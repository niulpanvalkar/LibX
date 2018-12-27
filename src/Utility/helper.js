import bcrypt from "bcrypt";
import constants from "../config/constants";
import jwt from "jsonwebtoken";

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

    comparePassword = (loginPassword,dbPassword) => {
            return new Promise((resolve, reject) => {
                bcrypt.compare(loginPassword, dbPassword, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        };

    createToken = (payload) => {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, constants.JWT_SECRET, (err, token) => {
                if (err) {
                    reject(err);
                } 
                else {
                    resolve(token);
                }
            });
        });
    };
}

export default new Helper();