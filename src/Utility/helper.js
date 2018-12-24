import bcrypt from "bcrypt";

class Helper {
    constructor () {}

    hashPassword = async(password) => {
        return new Promise((resolve, reject) => {
            let salt = 10;
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(hash);
                }
            });
        });
    }

    comparePassword = async(dbPassword, loginPassword) => {
        // later
    };
}

export default new Helper();