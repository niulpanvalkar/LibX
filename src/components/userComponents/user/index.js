import express from "express";
import userValidator from "./validator/user.validator";
import userController from "./controller/user.controller";

const router = express.Router();

router.get("/", userController.getUser);

export default router;