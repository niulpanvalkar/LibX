import bcrypt from "bcrypt";
import helper from "../../../Utility/helper";
import uuidv4 from "uuid/v4";
import userModel from "../models/user.model";
class UserController {
    constructor() {}

    signUpUser = async (req, res, next) => {
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
        let salt = 10 ;  
        let passwordHash = await helper.hashPassword(params.password);
        params.password = passwordHash;
        await userModel.userSignUp(params); 
    };
}

export default new UserController();