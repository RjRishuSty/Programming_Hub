import jwt from "jsonwebtoken";

 export const generateToken = async (userId, res) => {
  try {
    const createToken = jwt.sign({ userId }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("jwtToken", createToken, {
      maxAge: 60 * 60 * 24 * 7 * 1000, // 7 Days
      httpOnly: true,
      secure: process.env.MODE !== "development",
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error.message);
  }
};
