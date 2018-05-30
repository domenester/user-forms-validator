/* eslint no-param-reassign: "error" */

import Joi from 'joi';
import moment from 'moment';
import DocumentValidation from './helper/joi-custom/cpfcnpj';

class SignUpValidation {
    constructor() {
        this.userSchema = Joi.object().keys({
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
        // 'type' param, must be 'physical' or 'legal'
        this.profileByUserType = (type) => {
            let labels = ['Cidade', 'Estado', 'CEP'];
            let values = Joi.required().when('label', {
                is: 'Cidade',
                then: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo Cidade'; return err; }),
            }).when('label', {
                is: 'Estado',
                then: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo Estado'; return err; }),
            }).when('label', {
                is: 'CEP',
                then: Joi.string().max(8).min(8).required()
                    .error((err) => { err[0].message = 'Preencha o campo CEP'; return err; }),
            });

            if (type === 'physical') {
                labels = [...labels, 'Nome', 'Sobrenome', 'Data de Nascimento', 'País'];
                values = values.when('label', {
                    is: 'Data de Nascimento',
                    then: Joi.date().iso().required().max(moment().add(-18, 'years').format('MM-DD-YYYY'))
                        .error((err) => {
                            if (err[0].type === 'date.max') err[0].message = 'Idade não permitida para cadastro de conta.';
                            else if (err[0].type === 'date.isoDate') err[0].message = 'Data de Nascimento inválida';
                            return err;
                        }),
                }).when('label', {
                    is: 'Nome',
                    then: Joi.string().required().max(30).error((err) => {
                        if (err[0].type === 'string.max') err[0].message = 'O campo nome precisa ter no máximo 30 caracteres!!';
                        else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Nome';
                        return err;
                    }),
                }).when('label', {
                    is: 'Sobrenome',
                    then: Joi.string().required().max(30).error((err) => {
                        if (err[0].type === 'string.max') err[0].message = 'O campo Sobrenome precisa ter no máximo 30 caracteres!!';
                        else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Sobrenome';
                        return err;
                    }),
                }).when('label', {
                    is: 'País',
                    then: Joi.string().required().error((err) => { err[0].message = 'Preencha o campo País'; return err; }),
                });
            }

            if (type === 'legal') {
                labels = [...labels, 'RazaoSocial', 'NomeFantasia'];
                values = values.when('label', {
                    is: 'RazaoSocial',
                    then: Joi.string().required().max(40).error((err) => {
                        if (err[0].type === 'string.max') err[0].message = 'O campo Razão Social precisa ter no máximo 40 caracteres!';
                        else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Razão Social';
                        return err;
                    }),
                }).when('label', {
                    is: 'NomeFantasia',
                    then: Joi.string().required().max(40).error((err) => {
                        if (err[0].type === 'string.max') err[0].message = 'O campo Nome Fantasia precisa ter no máximo 40 caracteres!';
                        else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Nome Fantasia';
                        return err;
                    }),
                });
            }

            return Joi.array().min(labels.length).unique().items(Joi.object().keys({
                label: Joi.string().required().valid(labels),
                value: values,
            }));
        };
    }

    validateUser(obj, cb, _this) {
        return Joi.validate(obj, this ? this.userSchema : _this.userSchema, (err, value) => cb(err, value));
    }
    validatePhysicalProfile(obj, cb, _this) {
        return Joi.validate(obj, this ? this.profileByUserType('physical') : _this.profileByUserType('physical'), (err, value) => cb(err, value));
    }
    validateLegalProfile(obj, cb, _this) {
        return Joi.validate(obj, this ? this.profileByUserType('legal') : _this.profileByUserType('legal'), (err, value) => cb(err, value));
    }
    validateUserAndProfile(obj, cb) {
        return this.validateUser(obj.user, (err, user) => {
            if (err) return cb(err);
            const profileValidator = user.cnpj ? this.validateLegalProfile : this.validatePhysicalProfile;
            return profileValidator(obj.profile, (erro) => {
                if (erro) return cb(erro);
                return cb(erro, obj);
            }, this);
        }, this);
    }
}

const signUpValidation = new SignUpValidation();

export default signUpValidation;
