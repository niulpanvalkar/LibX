import bcrypt from "bcrypt";
import helper from "../../../Utility/helper";
import uuidv4 from "uuid/v4";
class UserController {
    constructor() {}

    signUpUser = async (req, res, next) => {
        console.log("UserController : signUpUser api called");
        let params = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        };
        let userId = uuidv4();
        let salt = 10 ;  
        let passwordHash = await helper.hashPassword(params.password);
    };
}

export default new UserController();