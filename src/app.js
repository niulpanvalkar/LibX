import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import publicRoutes from "./routes/publicRoutes";
import connection from "./config/db";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/v1", publicRoutes);

export default app;