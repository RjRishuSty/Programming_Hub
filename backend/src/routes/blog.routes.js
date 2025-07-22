import { Router } from "express";
import { handlerCreateBlog,
  handleUpdateBlog,
  handleGetBlogs, } from "../controllers/blog.controllers.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = Router();

router.post("/create-blog", protectRoute, handlerCreateBlog);
router.patch("/edit-blog", protectRoute, handleUpdateBlog);
router.get("/blogs", protectRoute, handleGetBlogs);

export default router;
