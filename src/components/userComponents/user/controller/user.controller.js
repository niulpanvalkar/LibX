import userModel from "../models/user.model";
import responseFormat from "../../../../lib/responseFormat";
class AuthUserController {
    constructor () {}

    getUser = async (req, res, next) => {
        try {
            let params = {
                userId : req.user 
            };
            let result = await userModel.getUser(params);
            console.log(result);
            res
            .status(responseFormat.statusCode["SUCCESS"])
            .send(
                responseFormat.getResponseObject(
                "success",
                responseFormat.statusCode["SUCCESS"],
                "User fetched successfully.",
                result
            ));    
        } catch(err) {
            res
            .status(responseFormat.statusCode["SUCCESS"])
            .send(
                responseFormat.getResponseObject(
                "error",
                responseFormat.statusCode["INTERNAL_SERVER_ERROR"],
                "Something went wrong.",
                null
            ));    
        }        
    };
}

export default new AuthUserController();