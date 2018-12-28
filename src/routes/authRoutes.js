import express from "express";
import user from "components/userComponents/user";

const router = express.Router();

router.use("/user", user);

export default router;