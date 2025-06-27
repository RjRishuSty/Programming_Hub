import { generateToken } from "../lib/generateToken.js";
import authModel from "../model/auth.model.js";
import bcrypt from "bcrypt";

const signUpHandler = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!email || !password || !fullname)
    return res
      .status(400)
      .json({ message: "All fields are required.", success: false });
  if (password.length < 6)
    return res.status(400).json({
      message: "Password must be at least 6 characters long.",
      success: false,
    });
  try {
    const isExist = await authModel.findOne({ email });
    if (isExist)
      return res
        .status(400)
        .json({ message: "User already exists.", success: false });

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new authModel({ fullname, email, password: hashPassword });
    if (!newUser)
      return res
        .status(400)
        .json({ message: "Somethings went wrong: Try again!", success: false });
    await newUser.save();
    res.status(201).json({
      message: "Account created successfully.",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
      error: error.message,
      success: false,
    });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "All fields are required!", success: false });
  try {
    const isUser = await authModel.findOne({ email });
    if (!isUser)
      return res
        .status(400)
        .json({ message: "Invalid email.", success: false });
    const isCurrectPassword = await bcrypt.compare(password, isUser.password);
    if (!isCurrectPassword)
      return res
        .status(400)
        .json({ message: "Invalid password.", success: false });
    //* Generate TOken..........
    generateToken(isUser._id, res);
    res
      .status(200)
      .json({ message: "Login successfully", success: true, data: isUser });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
      error: error.message,
      success: false,
    });
  }
};

const logoutHandler = async (req, res) => {
  try {
    res.cookie("jwtToken", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully", success: true });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
      error: error.message,
      success: false,
    });
  }
};

const checkAuthHandler = async (req,res) => {
  try {
    res.status(200).json({data:req.user});
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      error: error.message,
      success: false,
    });
  }
};

export { signUpHandler, loginHandler, logoutHandler, checkAuthHandler };
