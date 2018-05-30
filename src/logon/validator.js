import Joi from 'joi';

class LogonValidation {
    constructor() {
        this.logonSchema = Joi.object().keys({
            email: Joi.string().email().required().error((err) => {
                /* eslint-disable no-param-reassign */
                err[0].message = 'E-mail inválido';
                return err;
            }),
            password: Joi.string().required().regex(/^(?:(?=.*[a-z])([^A-Za-z0-9])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,16}$/).error((err) => {
                err[0].message = 'O campo senha precisa ter entre 8 a 16 caracteres, 1 caractere maiúsculo, 1 caractere especial e 1 número.';
                return err;
            }),
            token: Joi.string().max(6).min(6).error((err) => {
                if (err[0].type === 'string.max' || err[0].type === 'string.min') err[0].message = 'O campo token precisa ter 6 digitos.';
                return err;
            }),
        });
    }

    validateLogon(obj, cb) {
        return Joi.validate(obj, this.logonSchema, (err, value) => cb(err, value));
    }
}

const logonValidation = new LogonValidation();

export default logonValidation;
