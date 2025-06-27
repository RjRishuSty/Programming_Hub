import { Router } from "express";
import {
  checkAuthHandler,
  loginHandler,
  logoutHandler,
  signUpHandler,
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = Router();

router.post("/signup", signUpHandler);
router.post("/login", loginHandler);
router.post("/logout", logoutHandler);
router.get("/check-auth", protectRoute , checkAuthHandler);

export default router;
