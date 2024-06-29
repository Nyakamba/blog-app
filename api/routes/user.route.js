import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  updateUser,
} from "../controllers/user.controller.js";

import { verfyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:userId", verfyToken, updateUser);
router.delete("/delete/:userId", verfyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers", verfyToken, getUsers);
router.get("/:userId", getUser);

export default router;
