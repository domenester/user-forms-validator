const inputData = (label = 'title', type = 'string', field = 'input', key, required = false) => ({
    label,
    type,
    field,
    key: key || undefined,
    required,
});

const extraData = (data = { empty: true }) => ({
    data,
});

const userEnum = {
    INPUT_EMAIL: {
        ...inputData('E-mail', 'string', 'input', 'email', true),
        ...extraData({
            subType: 'email',
        }),
    },
    INPUT_CONFIRM_EMAIL: {
        ...inputData('Confirmar E-mail', 'string', 'input', 'emailConfirm', true),
        ...extraData({
            subType: 'email',
        }),
    },
    INPUT_USERNAME: {
        ...inputData('Username', 'string', 'input', 'username', true),
    },
    INPUT_PASSWORD: {
        ...inputData('Senha', 'string', 'input', 'password', true),
        ...extraData({
            subType: 'password',
            length: {
                min: 8,
                max: 30,
            },
        }),
    },
    INPUT_CONFIRM_PASSWORD: {
        ...inputData('Confirmar Senha', 'string', 'input', 'passwordConfirm', true),
        ...extraData({
            subType: 'password',
        }),
    },
    INPUT_USE_TERM: {
        ...inputData('Confirmar Senha', 'boolean', 'input', 'term', true),
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
        ...inputData('Nome', 'string', 'input', 'name', true),
        ...extraData({
            length: {
                min: 2,
                max: 20,
            },
        }),
    },
    INPUT_LASTNAME: {
        ...inputData('Sobrenome', 'string', 'input', 'lastName', true),
        ...extraData({
            length: {
                min: 2,
                max: 20,
            },
        }),
    },
    INPUT_BIRTH: {
        ...inputData('Data de Nascimento', 'string', 'input', 'birth', true),
        ...extraData({
            subType: 'birth',
        }),
    },
    INPUT_CPF: {
        ...inputData('CPF', 'number', 'input', 'cpf', true),
        ...extraData({
            subType: 'cpf',
        }),
    },
};

const legalUserEnum = {
    ...userEnum,
    INPUT_CNPJ: {
        ...inputData('CNPJ', 'number', 'input', 'cnpj', true),
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
