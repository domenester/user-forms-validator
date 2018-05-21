const inputData = (label = 'title', type = 'string', field = 'input', key = 'id', index = 0, required = false) => ({
    label,
    type,
    field,
    key,
    index,
    required,
});

const extraData = (data = { empty: true }) => ({
    data,
});

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

const generateUserEnum = index => ({

    INPUT_EMAIL: {
        ...inputData('E-mail', 'string', 'input', 'email', index++, true),
        ...extraData({
            subType: 'email',
        }),
    },
    INPUT_CONFIRM_EMAIL: {
        ...inputData('Confirmar E-mail', 'string', 'input', 'emailConfirm', index++, true),
        ...extraData({
            subType: 'email',
        }),
    },
    INPUT_USERNAME: {
        ...inputData('Username', 'string', 'input', 'username', index++, true),
    },
    INPUT_PASSWORD: {
        ...inputData('Senha', 'string', 'input', 'password', index++, true),
        ...extraData({
            subType: 'password',
            length: {
                min: 8,
                max: 30,
            },
        }),
    },
    INPUT_CONFIRM_PASSWORD: {
        ...inputData('Confirmar Senha', 'string', 'input', 'passwordConfirm', index++, true),
        ...extraData({
            subType: 'password',
        }),
    },
    INPUT_USE_TERM: {
        ...inputData('Confirmar Senha', 'boolean', 'input', 'term', index++, true),
    },
    INPUT_COUNTRY: {
        ...inputData('País', 'string', 'combobox', 'country', index++, false),
    },
    INPUT_STATE: {
        ...inputData('Estado', 'string', 'combobox', 'state', index++, true),
    },
    INPUT_CITY: {
        ...inputData('Cidade', 'string', 'combobox', 'city', index++, true),
    },
});

const generatePhysicalUserEnum = index => ({
    INPUT_NAME: {
        ...inputData('Nome', 'string', 'input', 'name', index++, true),
        ...extraData({
            length: {
                min: 2,
                max: 20,
            },
        }),
    },
    INPUT_LASTNAME: {
        ...inputData('Sobrenome', 'string', 'input', 'lastName', index++, true),
        ...extraData({
            length: {
                min: 2,
                max: 20,
            },
        }),
    },
    INPUT_BIRTH: {
        ...inputData('Data de Nascimento', 'string', 'input', 'birth', index++, true),
        ...extraData({
            subType: 'birth',
        }),
    },
    INPUT_CPF: {
        ...inputData('CPF', 'number', 'input', 'cpf', index++, true),
        ...extraData({
            subType: 'cpf',
        }),
    },
    ...generateUserEnum(index++),
});

const generateLegalUserEnum = index => ({
    INPUT_SOCIAL_REASON: {
        ...inputData('Razão Social', 'string', 'input', index++, true),
        ...extraData({
            length: {
                max: 40,
            },
        }),
    },
    INPUT_FANTASY_NAME: {
        ...inputData('Nome Fantasia', 'string', 'input', index++, true),
        ...extraData({
            length: {
                max: 40,
            },
        }),
    },
    INPUT_CNPJ: {
        ...inputData('CNPJ', 'number', 'input', 'cnpj', index++, true),
        ...extraData({
            subType: 'cnpj',
        }),
    },
    ...generateUserEnum(index++),
});

/* eslint-enable no-plusplus */
/* eslint-enable no-param-reassign */

const userEnum = generateUserEnum(0);
const physicalUserEnum = generatePhysicalUserEnum(0);
const legalUserEnum = generateLegalUserEnum(0);

export {
    userEnum,
    physicalUserEnum,
    legalUserEnum,
};
