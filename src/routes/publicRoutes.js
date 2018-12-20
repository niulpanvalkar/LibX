import express from "express";
import user from "components/userComponents";
const router = express.Router();

router.use("/user", user);

export default router;