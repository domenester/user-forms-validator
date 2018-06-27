/* eslint no-param-reassign: "error" */

import Joi from 'joi';
import DocumentValidation from './helper/joi-custom/cpfcnpj';
import Profile from '../profile/profile-fields';

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
            if (type !== 'physical' && type !== 'legal') throw new Error('type must be "physical" or "legal"');

            let labels = ['city', 'state', 'cep', 'address'];
            let values;

            if (type === 'physical') {
                labels = [...labels, 'name', 'lastName', 'country', 'birth'];
                values = Profile.getValuesByLabels(Joi.required(), labels);
            }

            if (type === 'legal') {
                labels = [...labels, 'socialReason', 'fantasyName'];
                values = Profile.getValuesByLabels(Joi.required(), labels);
            }

            return Joi.array().min(labels.length).unique().items(Joi.object().keys({
                label: Joi.string().required().valid(Profile.getLabelsNameByKey(labels)),
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
