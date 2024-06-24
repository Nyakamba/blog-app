import express from "express";
import { deleteUser, updateUser } from "../controllers/user.controller.js";

import { verfyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId", verfyToken, updateUser);
router.delete("/delete/:userId", verfyToken, deleteUser);

export default router;
