import joi from "joi";


class UserValidator {
    constructor () {}

    validateSignUpUser = async (req, res , next) => {
        // console.log()
        let bodySchema = joi.object().keys({
            name : joi.string().required(),
            email : joi.string().email().required(),
            password : joi.string().required(),
        });
        let reqBody = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        };

        joi.validate(reqBody, bodySchema, (err, result) => {
            if (err) {
                console.log("Error in validating signUp request")
            }
            else {
                console.log("UserValidator : validateSignUpUser successfully validatedd");
                next();
            }
        });
    };

    validateUserLogin = (req, res, next) => {
        let bodySchema = joi.object().keys({
            email : joi.string().email().required(),
            password : joi.string().required()
        });
        let reqBody = {
            email : req.body.email,
            password : req.body.password
        };

        joi.validate(reqBody, bodySchema, (err, result) => {
            if (err) {
                console.log("Error in validating login request")
            }
            else {
                console.log("UserValidator : validateLoginUser successfully validated");
                next();
            }
        });

    };
}

export default new UserValidator();