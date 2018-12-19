import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import userComponents from "./components/userComponents";
import authRoutes from "./routes/authRoutes";
import pool from "./config/db";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/v1/auth", authRoutes);

export default app;