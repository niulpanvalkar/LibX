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
}

export default new UserValidator();