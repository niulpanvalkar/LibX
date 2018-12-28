import joi from "joi";

class AuthUserValidator {
    constructor () {}

    validateEditInfo = (req, res, next) => {
        let bodySchema = joi.object().keys({
            
        });
    };

}

export default new AuthUserValidator();