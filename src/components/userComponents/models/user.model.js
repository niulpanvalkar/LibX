import connnection from "config/db.js";

class UserModel {
    constructor () {}

    userSignUp = params => {
        console.log("UserModel : userSignUp model called");
    };
}

export default new UserModel();