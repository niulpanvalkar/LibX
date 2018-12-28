import connection from "config/db.js";
import utilityModel from "utility/utility.model";

class AuthUserModel {
    constructor () {}

    getUser = params => {
        return new Promise(async (resolve, reject) => {
            try {
                let result = await utilityModel.getFields(["userId","email", "name", "createdDate"], "User", {userId : params.userId}); 
                if (result[0] && result[0].userId) {
                    resolve(result);
                }
                else {
                    resolve([]);
                }
            }catch(err) {
                reject(err);
            }
        });
    };
}

export default new AuthUserModel();