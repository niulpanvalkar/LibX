import express from "express";
import user from "components/publicComponents/user";
const router = express.Router();

router.use("/user", user);

export default router;