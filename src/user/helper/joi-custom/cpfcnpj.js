import Joi from 'joi';
import { isCpf, isCnpj } from '../document-checker';

const DocumentValidation = Joi.extend(joi => ({
    base: joi.any(),
    name: 'any',
    language: {
        isCnpj: '!!CNPJ inválido',
        isCpf: '!!CPF inválido',
    },
    rules: [
        {
            name: 'isCnpj',
            validate(params, value, state, options) {
                if (!isCnpj(value)) return this.createError('any.isCnpj', { v: value }, state, options);
                return value;
            },
        },
        {
            name: 'isCpf',
            validate(params, value, state, options) {
                if (!isCpf(value)) return this.createError('any.isCpf', { v: value }, state, options);
                return value;
            },
        },

    ],
}));

export default DocumentValidation;
