/* eslint no-param-reassign: "error" */

import Joi from 'joi';
import DocumentValidation from './helper/joi-custom/cpfcnpj';

module.exports = Joi.object().keys({
    term: Joi.boolean().required().valid(true).error((err) => {
        err[0].message = 'O termo de uso precisa estar checado';
        return err;
    }),
    email: Joi.string().email().required().error((err) => {
        err[0].message = 'E-mail inválido';
        return err;
    }),
    emailConfirm: Joi.string().email().valid(Joi.ref('email')).required()
        .error((err) => {
            err[0].message = 'Os email não são iguais!';
            return err;
        }),
    username: Joi.string().email().valid(Joi.ref('email')).required()
        .error((err) => {
            err[0].message = 'Username e email devem ser iguais!';
            return err;
        }),
    password: Joi.string().regex(/^(?:(?=.*[a-z])([^A-Za-z0-9])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,16}$/).error((err) => {
        err[0].message = 'O campo senha precisa ter entre 8 a 16 caracteres, 1 caractere maiúsculo, 1 caractere especial e 1 número.';
        return err;
    }),
    passwordConfirm: Joi.string().valid(Joi.ref('password')).required()
        .error((err) => {
            err[0].message = 'As senhas não conferem';
            return err;
        }),
    createdAt: Joi.date().iso().required(),
    cnpj: DocumentValidation.any().isCnpj(),
    cpf: DocumentValidation.any().isCpf(),
})
    .or('cnpj', 'cpf').error((err) => {
        err[0].message = 'Preencha o campo CPF ou CNPJ';
        return err;
    });

