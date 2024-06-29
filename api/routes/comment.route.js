import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from "../controllers/comment.controller.js";
import { verfyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verfyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/likeComment/:commentId", verfyToken, likeComment);
router.put("/editComment/:commentId", verfyToken, editComment);
router.delete("/deleteComment/:commentId", verfyToken, deleteComment);
router.get("/getcomments", verfyToken, getcomments);

export default router;
