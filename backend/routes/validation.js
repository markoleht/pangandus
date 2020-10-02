const Joi = require('@hapi/joi');


// Register validations
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    const {error} = schema.validate(data, schema);
}


const loginValidation =   (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    const {error} = schema.validate(data, schema);

}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;