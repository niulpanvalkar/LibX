import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import publicRoutes from "./routes/publicRoutes";
import authRoutes from "./routes/authRoutes";
import passport from "passport";
import middleware from "./middlewares/authenticate";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(passport.initialize());
middleware.authenticate(passport);
app.use("/v1", publicRoutes);
app.use("/v1/auth", passport.authenticate('jwt' , {session : false}), authRoutes);

export default app;