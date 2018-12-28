import connnection from "config/db.js";

class UserModel {
    constructor () {}

    userSignUp = params => {
        console.log("UserModel : userSignUp model called");
        return new Promise((resolve, reject) => {
            try {
                let queryString = `INSERT INTO User(userId, name, email, password, createdDate, isValid)
                                   VALUES (?,?,?,?,?,?);`;
    
                connnection.query(queryString,
                     [params.userId,
                      params.name,
                      params.email,
                      params.password,
                      params.createdDate,
                      params.isValid],
                      (err, result) => {
                        if (err) {
                            console.log("User registration falied.")
                            reject(err);
                        }
                        else {
                            console.log("User registration successful");
                            resolve(result);
                        }
                      });
            } catch(err) {
                reject({
                    message: "Server Error"
                });
            } 
        })
    };
}

export default new UserModel();