/* eslint no-param-reassign: "error" */

import Joi from 'joi';
import moment from 'moment';

class Profile {
    constructor() {
        this.validationByLabel = {
            city: {
                is: 'Cidade',
                then: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo Cidade'; return err; }),
            },
            state: {
                is: 'Estado',
                then: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo Estado'; return err; }),
            },
            cep: {
                is: 'CEP',
                then: Joi.string().max(8).min(8).required()
                    .error((err) => {
                        if (err[0].type === 'string.max' || err[0].type === 'string.min') err[0].message = 'CEP deve conter 8 dígitos.';
                        else err[0].message = 'Preencha o CEP com valor válido';
                        return err;
                    }),
            },
            address: {
                is: 'Endereço',
                then: Joi.string().max(150).min(2)
                    .error((err) => {
                        if (err[0].type === 'string.max') err[0].message = 'Endereço invalido, maxímo 150 caracteres!';
                        if (err[0].type === 'string.min') err[0].message = 'Endereço invalido, mínimo de 2 caracteres!';
                        return err;
                    }),
            },
            addressComplement: {
                is: 'Complemento',
                then: Joi.string().max(150).min(2)
                    .error((err) => {
                        if (err[0].type === 'string.max') err[0].message = 'Endereço invalido, maxímo 150 caracteres!';
                        if (err[0].type === 'string.min') err[0].message = 'Endereço invalido, mínimo de 2 caracteres!';
                        return err;
                    }),
            },
            cellphone: {
                is: 'Celular',
                then: Joi.string().regex(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/).error((err) => {
                    err[0].message = 'Número de celular inválido';
                    return err;
                }),
            },
            martialStatus: {
                is: 'Estado civil',
                then: Joi.string().error((err) => {
                    err[0].message = 'Estado civil inválido';
                    return err;
                }),
            },
            occupation: {
                is: 'Profissão',
                then: Joi.string().error((err) => {
                    err[0].message = 'Profissão inválida';
                    return err;
                }),
            },
            incomeTax: {
                is: 'Número do comprovante IR',
                then: Joi.string().error((err) => {
                    err[0].message = 'Número do comprovante de IR inválido';
                    return err;
                }),
            },
            rg: {
                is: 'RG',
                then: Joi.string().min(9).error((err) => {
                    if (err[0].type === 'string.min') err[0].message = 'RG invalido, mínimo de 9 caracteres!';
                    else err[0].message = 'RG inválido';
                    return err;
                }),
            },
            rgEmission: {
                is: 'RG Emissão',
                then: Joi.string().error((err) => {
                    err[0].message = 'Órgão emissor inválido';
                    return err;
                }),
            },
            rgFront: {
                is: 'Documento (frontal)',
                then: Joi.string().uri().error((err) => {
                    err[0].message = 'Documento frontal inválido';
                    return err;
                }),
            },
            rgBack: {
                is: 'Documento (verso)',
                then: Joi.string().uri().error((err) => {
                    err[0].message = 'Verso do documento inválido';
                    return err;
                }),
            },
            selfie: {
                is: 'Selfie com doc. aberto',
                then: Joi.string().uri().error((err) => {
                    err[0].message = 'Selfie com documento inválido';
                    return err;
                }),
            },
            proofOfResidence: {
                is: 'Comp. de Residência',
                then: Joi.string().uri().error((err) => {
                    err[0].message = 'Comprovante de residência inválido';
                    return err;
                }),
            },
            birth: {
                is: 'Data de Nascimento',
                then: Joi.date().iso().required()
                    .max(moment().add(-18, 'years').format('MM-DD-YYYY'))
                    .error((err) => {
                        if (err[0].type === 'date.max') err[0].message = 'Idade não permitida para cadastro de conta.';
                        else if (err[0].type === 'date.isoDate') err[0].message = 'Data de Nascimento inválida';
                        else err[0].message = 'Data de nascimento inválida';
                        return err;
                    }),
            },
            name: {
                is: 'Nome',
                then: Joi.string().required().max(30).error((err) => {
                    if (err[0].type === 'string.max') err[0].message = 'O campo nome precisa ter no máximo 30 caracteres!!';
                    else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Nome';
                    return err;
                }),
            },
            lastName: {
                is: 'Sobrenome',
                then: Joi.string().required().max(30).error((err) => {
                    if (err[0].type === 'string.max') err[0].message = 'O campo Sobrenome precisa ter no máximo 30 caracteres!!';
                    else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Sobrenome';
                    return err;
                }),
            },
            country: {
                is: 'País',
                then: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo País'; return err; }),
            },
            socialReason: {
                is: 'RazaoSocial',
                then: Joi.string().required().max(40).error((err) => {
                    if (err[0].type === 'string.max') err[0].message = 'O campo Razão Social precisa ter no máximo 40 caracteres!';
                    else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Razão Social';
                    return err;
                }),
            },
            fantasyName: {
                is: 'NomeFantasia',
                then: Joi.string().required().max(40).error((err) => {
                    if (err[0].type === 'string.max') err[0].message = 'O campo Nome Fantasia precisa ter no máximo 40 caracteres!';
                    else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Nome Fantasia';
                    return err;
                }),
            },
        };
    }

    getValuesByLabels(joiToMount, labels) {
        let joiMounted = joiToMount;
        labels.forEach((label) => { joiMounted = joiMounted.when('label', this.validationByLabel[label]); });
        return joiMounted;
    }

    getLabelsNameByKey(labels) {
        return labels.map(label => this.validationByLabel[label].is);
    }
}

export default new Profile();
