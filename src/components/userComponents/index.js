import express from "express";
import userController from "./controller/user.controller";
import userValidator from "./validator/user.validator";
const router = express.Router();

router.post("/signUp", userValidator.validateSignUpUser, userController.signUpUser);

export default router;
