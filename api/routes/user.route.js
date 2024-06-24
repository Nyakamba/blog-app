import express from "express";
import {
  deleteUser,
  signout,
  updateUser,
} from "../controllers/user.controller.js";

import { verfyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId", verfyToken, updateUser);
router.delete("/delete/:userId", verfyToken, deleteUser);
router.post("/signout", signout);

export default router;
