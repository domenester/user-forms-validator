const inputData = (label = 'title', type = 'string', field = 'input', required = false) => ({
    label,
    type,
    field,
    required,
});

const extraData = (data = { empty: true }) => ({
    data,
});

const userEnum = {
    INPUT_EMAIL: {
        ...inputData('E-mail', 'string', 'input', true),
        ...extraData({
            subType: 'email',
        }),
    },
    INPUT_CONFIRM_EMAIL: {
        ...inputData('Confirmar E-mail', 'string', 'input', true),
        ...extraData({
            subType: 'email',
        }),
    },
    INPUT_PASSWORD: {
        ...inputData('Senha', 'string', 'input', true),
        ...extraData({
            subType: 'password',
            length: {
                min: 8,
                max: 30,
            },
        }),
    },
    INPUT_CONFIRM_PASSWORD: {
        ...inputData('Confirmar Senha', 'string', 'input', true),
        ...extraData({
            subType: 'password',
        }),
    },
    INPUT_USE_TERM: {
        ...inputData('Confirmar Senha', 'boolean', 'input', true),
    },
    INPUT_COUNTRY: {
        ...inputData('País', 'string', 'combobox', false),
    },
    INPUT_STATE: {
        ...inputData('Estado', 'string', 'combobox', true),
    },
    INPUT_CITY: {
        ...inputData('Cidade', 'string', 'combobox', true),
    },
};

const physicalUserEnum = {
    ...userEnum,
    INPUT_NAME: {
        ...inputData('Nome', 'string', 'input', true),
        ...extraData({
            length: {
                min: 2,
                max: 20,
            },
        }),
    },
    INPUT_LASTNAME: {
        ...inputData('Sobrenome', 'string', 'input', true),
        ...extraData({
            length: {
                min: 2,
                max: 20,
            },
        }),
    },
    INPUT_BIRTH: {
        ...inputData('Data de Nascimento', 'string', 'input', true),
        ...extraData({
            subType: 'birth',
        }),
    },
    INPUT_CPF: {
        ...inputData('CPF', 'number', 'input', true),
        ...extraData({
            subType: 'cpf',
        }),
    },
};

const legalUserEnum = {
    ...userEnum,
    INPUT_CNPJ: {
        ...inputData('CNPJ', 'number', 'input', true),
        ...extraData({
            subType: 'cnpj',
        }),
    },
    INPUT_SOCIAL_REASON: {
        ...inputData('Razão Social', 'string', 'input', true),
        ...extraData({
            length: {
                max: 40,
            },
        }),
    },
    INPUT_FANTASY_NAME: {
        ...inputData('Nome Fantasia', 'string', 'input', true),
        ...extraData({
            length: {
                max: 40,
            },
        }),
    },
};

export {
    userEnum,
    physicalUserEnum,
    legalUserEnum,
};
