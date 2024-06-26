import express from "express";
import { verfyToken } from "../utils/verifyUser.js";
import { create } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verfyToken, create);

export default router;
