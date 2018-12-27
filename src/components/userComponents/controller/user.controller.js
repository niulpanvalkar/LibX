import bcrypt from "bcrypt";
import helper from "../../../Utility/helper";
import uuidv4 from "uuid/v4";
import userModel from "../models/user.model";
import responseFormat from "../../../lib/responseFormat";
import utilityModel from "../../publicComponents/utility/models/utility.model";
import jwt from "jsonwebtoken";
import constants from "../../../config/constants";
class UserController {
    constructor() {}

    signUpUser = async (req, res, next) => {
        try {
            console.log("UserController : signUpUser api called");
            let params = {
                email : req.body.email,
                name :  req.body.name,
                password : req.body.password,
                createdDate : new Date(),
                isValid : 1
            };
            let userId = "user_"+ uuidv4();
            params.userId = userId;  
            let passwordHash = await helper.hashPassword(params.password);
            params.password = passwordHash;
            let result = await userModel.userSignUp(params);
            console.log(result);
            res
            .status(responseFormat.statusCode["SUCCESS"])
            .send(
              responseFormat.getResponseObject(
                "success",
                responseFormat.statusCode["SUCCESS"],
                "User registered successfully.",
                result
            ));    
        }catch (err) {
            res
            .status(responseFormat.statusCode["INTERNAL_SERVER_ERROR"])
            .send(
              responseFormat.getResponseObject(
                "error",
                responseFormat.statusCode["INTERNAL_SERVER_ERROR"],
                "Something went wrong",
                null
            ));
        }
    };

    loginUser = async (req, res, next) => {
        console.log("UserController : loginUser api called");
        try {
            let params = {
                email: req.body.email,
                password: req.body.password
            };
            let result = await utilityModel.getFields(["userId", "email", "password"], "User", {
                email: params.email
            });
            if (result[0] && (result[0].email === params.email)) {
                let isValidPassword = await helper.comparePassword(params.password, result[0].password);
                if (isValidPassword === true) {
                    let user = {
                        email: req.body.email,
                        userId: result[0].userId
                    };
                    let token = await helper.createToken(user);
                    res.json({
                        token: token,
                        user: user
                    })
                } else {
                    res
                    .status(responseFormat.statusCode["INTERNAL_SERVER_ERROR"])
                    .send(responseFormat.getResponseObject(
                        "Error",
                        responseFormat.statusCode["INTERNAL_SERVER_ERROR"],
                        "Password is incorrect.",
                        null
                    ))
                }
            } else {
                res
                .status(responseFormat.statusCode["INTERNAL_SERVER_ERROR"])
                .send(responseFormat.getResponseObject(
                    "Error",
                    responseFormat.statusCode["INTERNAL_SERVER_ERROR"],
                    "User does not exists.",
                    null
                ))
            }

        } catch (err) {
            res
            .status(responseFormat.statusCode["INTERNAL_SERVER_ERROR"])
            .send(
                responseFormat.getResponseObject(
                    "error",
                    responseFormat.statusCode["INTERNAL_SERVER_ERROR"],
                    "Something went wrong",
                    null
                ));
            }
        };
}

export default new UserController();