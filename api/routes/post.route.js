import express from "express";
import { verfyToken } from "../utils/verifyUser.js";
import {
  create,
  deletepost,
  getPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verfyToken, create);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", verfyToken, deletepost);

export default router;
