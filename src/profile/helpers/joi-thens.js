/* eslint no-param-reassign: "error" */
import Joi from 'joi';
import moment from 'moment';

module.exports = {
    cep: Joi.string().max(8).min(8).required()
        .error((err) => {
            if (err[0].type === 'string.max' || err[0].type === 'string.min') err[0].message = 'CEP deve conter 8 dígitos.';
            else err[0].message = 'Preencha o CEP com valor válido';
            return err;
        }),
    city: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo Cidade'; return err; }),
    state: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo Estado'; return err; }),
    addressComplement: Joi.string().max(150).min(2)
        .error((err) => {
            if (err[0].type === 'string.max') err[0].message = 'Endereço invalido, maxímo 150 caracteres!';
            if (err[0].type === 'string.min') err[0].message = 'Endereço invalido, mínimo de 2 caracteres!';
            return err;
        }),
    address: Joi.string().max(150).min(2)
        .error((err) => {
            if (err[0].type === 'string.max') err[0].message = 'Endereço invalido, maxímo 150 caracteres!';
            if (err[0].type === 'string.min') err[0].message = 'Endereço invalido, mínimo de 2 caracteres!';
            return err;
        }),
    cellphone: Joi.string().regex(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/).error((err) => {
        err[0].message = 'Número de celular inválido';
        return err;
    }),
    martialStatus: Joi.string().error((err) => {
        err[0].message = 'Estado civil inválido';
        return err;
    }),
    occupation: Joi.string().error((err) => {
        err[0].message = 'Profissão inválida';
        return err;
    }),
    rg: Joi.string().min(9).error((err) => {
        if (err[0].type === 'string.min') err[0].message = 'RG invalido, mínimo de 9 caracteres!';
        else err[0].message = 'RG inválido';
        return err;
    }),
    rgEmission: Joi.string().error((err) => {
        err[0].message = 'Órgão emissor inválido';
        return err;
    }),
    birth: Joi.date().iso().required()
        .max(moment().add(-18, 'years').format('MM-DD-YYYY'))
        .error((err) => {
            if (err[0].type === 'date.max') err[0].message = 'Idade não permitida para cadastro de conta.';
            else if (err[0].type === 'date.isoDate') err[0].message = 'Data de Nascimento inválida';
            else err[0].message = 'Data de nascimento inválida';
            return err;
        }),
    name: Joi.string().required().max(30).error((err) => {
        if (err[0].type === 'string.max') err[0].message = 'O campo nome precisa ter no máximo 30 caracteres!!';
        else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Nome';
        return err;
    }),
    lastName: Joi.string().required().max(30).error((err) => {
        if (err[0].type === 'string.max') err[0].message = 'O campo Sobrenome precisa ter no máximo 30 caracteres!!';
        else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Sobrenome';
        return err;
    }),
    country: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo País'; return err; }),
    email: Joi.string().email().required().error((err) => {
        err[0].message = 'E-mail inválido';
        return err;
    }),
    linkValidation: message => Joi.string().uri().error((err) => {
        err[0].message = message;
        return err;
    }),
};
