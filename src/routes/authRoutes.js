import express from "express";
import user from "components/userComponents";
import app from "../app";
const router = express.Router();

router.use("/user", user);

export default router;