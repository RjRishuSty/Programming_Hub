import blogModel from "../model/blog.model.js";

const handlerCreateBlog = async (req, res) => {
  const { title, author, content, thumbnail } = req.body;
  if (!title || !author || !content)
    return res
      .status(400)
      .json({ message: "All fields are required.", success: false });
  console.log(req.user, "for checking");
  try {
    const newBlog = new blogModel({
      title,
      content,
      author,
      thumbnail,
      adminId: req.user.id,
    });
    await newBlog.save();
    res.status(201).json({
      message: "Blog created successfully",
      data: newBlog,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Blog creation failed", data: err.message });
  }
};

const handleGetBlogs = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(500)
      .json({ message: "Somethings went wrong.", data: error.message });
  }
};
const handleUpdateBlog = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(500)
      .json({ message: "Somethings went wrong.", data: error.message });
  }
};

export { handlerCreateBlog,handleUpdateBlog,handleGetBlogs };
