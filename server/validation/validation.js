const Joi = require('@hapi/joi');

const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const signinSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
});

module.exports = {
    signupSchema, 
    signinSchema
}
