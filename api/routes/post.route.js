import express from "express";
import { verfyToken } from "../utils/verifyUser.js";
import { create, getPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verfyToken, create);
router.get("/getPosts", getPosts);

export default router;
