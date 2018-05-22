
class SignUpEnum {
    constructor() {
        this.inputData = (label = 'title', type = 'string', field = 'input', key = 'id', index = 0, hash = 'key', required = false) => ({
            label,
            type,
            field,
            key,
            index,
            hash,
            required,
        });

        this.extraData = (data = { empty: true }) => ({
            data,
        });
        /* eslint-disable no-plusplus */
        /* eslint-disable no-param-reassign */
        this.generateUserEnum = index => ({

            INPUT_EMAIL: {
                ...this.inputData('E-mail', 'string', 'input', 'email', index++, 'INPUT_EMAIL', true),
                ...this.extraData({
                    subType: 'email',
                }),
            },
            INPUT_CONFIRM_EMAIL: {
                ...this.inputData('Confirmar E-mail', 'string', 'input', 'emailConfirm', index++, 'INPUT_USERNAME', true),
                ...this.extraData({
                    subType: 'email',
                }),
            },
            INPUT_USERNAME: {
                ...this.inputData('Username', 'string', 'input', 'username', index++, 'INPUT_USERNAME', true),
            },
            INPUT_PASSWORD: {
                ...this.inputData('Senha', 'string', 'input', 'password', index++, 'INPUT_PASSWORD', true),
                ...this.extraData({
                    subType: 'password',
                    length: {
                        min: 8,
                        max: 30,
                    },
                }),
            },
            INPUT_CONFIRM_PASSWORD: {
                ...this.inputData('Confirmar Senha', 'string', 'input', 'passwordConfirm', index++, 'INPUT_CONFIRM_PASSWORD', true),
                ...this.extraData({
                    subType: 'password',
                }),
            },
            INPUT_USE_TERM: {
                ...this.inputData('Confirmar Senha', 'boolean', 'input', 'term', index++, 'INPUT_USE_TERM', true),
            },
            INPUT_COUNTRY: {
                ...this.inputData('País', 'string', 'combobox', 'country', index++, 'INPUT_COUNTRY', false),
            },
            INPUT_STATE: {
                ...this.inputData('Estado', 'string', 'combobox', 'state', index++, 'INPUT_STATE', true),
            },
            INPUT_CITY: {
                ...this.inputData('Cidade', 'string', 'combobox', 'city', index++, 'INPUT_CITY', true),
            },
        });

        this.physicalUserEnum = (index => ({
            INPUT_NAME: {
                ...this.inputData('Nome', 'string', 'input', 'name', index++, 'INPUT_NAME', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                }),
            },
            INPUT_LASTNAME: {
                ...this.inputData('Sobrenome', 'string', 'input', 'lastName', index++, 'INPUT_LASTNAME', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                }),
            },
            INPUT_BIRTH: {
                ...this.inputData('Data de Nascimento', 'string', 'input', 'birth', index++, 'INPUT_BIRTH', true),
                ...this.extraData({
                    subType: 'birth',
                }),
            },
            INPUT_CPF: {
                ...this.inputData('CPF', 'number', 'input', 'cpf', index++, 'INPUT_CPF', true),
                ...this.extraData({
                    subType: 'cpf',
                }),
            },
            ...this.generateUserEnum(index++),
        }))(0);

        this.legalUserEnum = (index => ({
            INPUT_SOCIAL_REASON: {
                ...this.inputData('Razão Social', 'string', 'input', index++, 'INPUT_SOCIAL_REASON', true),
                ...this.extraData({
                    length: {
                        max: 40,
                    },
                }),
            },
            INPUT_FANTASY_NAME: {
                ...this.inputData('Nome Fantasia', 'string', 'input', index++, 'INPUT_FANTASY_NAME', true),
                ...this.extraData({
                    length: {
                        max: 40,
                    },
                }),
            },
            INPUT_CNPJ: {
                ...this.inputData('CNPJ', 'number', 'input', 'cnpj', index++, 'INPUT_CNPJ', true),
                ...this.extraData({
                    subType: 'cnpj',
                }),
            },
            ...this.generateUserEnum(index++),
        }))(0);

        /* eslint-enable no-plusplus */
        /* eslint-enable no-param-reassign */
    }

    sortByIndex(wichFilter) {
        const enumIndexed = [];
        Object.keys(this[wichFilter]).map(key => enumIndexed.push(this[wichFilter][key]));
        return enumIndexed.sort((a, b) => a.index - b.index);
    }
}

const signUpEnum = new SignUpEnum();

export default signUpEnum;
