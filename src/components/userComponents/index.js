import express from "express";
import userController from "./controller/user.controller";
import userValidator from "./validator/user.validator";
const router = express.Router();

// router.post("/login", userValidator.validateLoginUser)

export default router;
