
class AdminCreateUserEnum {
    constructor() {
        this.inputData = (label = 'title', type = 'text', field = 'input', key = 'id', index = 0, hash = 'key', required = false) => ({
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
                ...this.inputData('E-mail', 'text', 'input', 'email', index++, 'INPUT_EMAIL', true),
                ...this.extraData({
                    subType: 'email',
                }),
            },
            INPUT_CONFIRM_EMAIL: {
                ...this.inputData('Confirmar E-mail', 'text', 'input', 'emailConfirm', index++, 'INPUT_USERNAME', true),
                ...this.extraData({
                    subType: 'email',
                }),
            },
            INPUT_USERNAME: {
                ...this.inputData('Username', 'text', 'input', 'username', index++, 'INPUT_USERNAME', true),
            },
            INPUT_PASSWORD: {
                ...this.inputData('Senha', 'password', 'input', 'password', index++, 'INPUT_PASSWORD', true),
                ...this.extraData({
                    subType: 'password',
                    length: {
                        min: 8,
                        max: 30,
                    },
                }),
            },
            INPUT_CONFIRM_PASSWORD: {
                ...this.inputData('Confirmar Senha', 'password', 'input', 'passwordConfirm', index++, 'INPUT_CONFIRM_PASSWORD', true),
                ...this.extraData({
                    subType: 'password',
                }),
            },
            INPUT_STATE: {
                ...this.inputData('Estado', 'text', 'combobox', 'state', index++, 'INPUT_STATE', true),
            },
            INPUT_CITY: {
                ...this.inputData('Cidade', 'text', 'combobox', 'city', index++, 'INPUT_CITY', true),
            },
            INPUT_CEP: {
                ...this.inputData('CEP', 'text', 'input', 'cep', index++, 'INPUT_CEP', true),
                ...this.extraData({
                    subType: 'cep',
                    mask: '[/\\d/, /\\d/, /\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/, /\\d/]',
                }),
            },
            INPUT_ADDRESS: {
                ...this.inputData('Endereço', 'text', 'input', 'address', index++, 'INPUT_ADDRESS', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 150,
                    },
                }),
            },
        });

        this.physicalUserEnum = (index => ({
            INPUT_NAME: {
                ...this.inputData('Nome', 'text', 'input', 'name', index++, 'INPUT_NAME', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                }),
            },
            INPUT_LASTNAME: {
                ...this.inputData('Sobrenome', 'text', 'input', 'lastName', index++, 'INPUT_LASTNAME', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                }),
            },
            INPUT_BIRTH: {
                ...this.inputData('Data de Nascimento', 'text', 'input', 'birth', index++, 'INPUT_BIRTH', true),
                ...this.extraData({
                    subType: 'birth',
                    mask: '[/\\d/, /\\d/, \'/\', /\\d/, /\\d/, \'/\', /\\d/, /\\d/, /\\d/, /\\d/]',
                }),
            },
            INPUT_CPF: {
                ...this.inputData('CPF', 'text', 'input', 'cpf', index++, 'INPUT_CPF', true),
                ...this.extraData({
                    subType: 'cpf',
                    mask: '[/\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/]',
                }),
            },
            INPUT_COUNTRY: {
                ...this.inputData('País', 'text', 'input', 'country', index++, 'INPUT_COUNTRY', false),
            },
            INPUT_RG_FRONT: {
                ...this.inputData('Documento (Frontal)', 'file', 'input', 'rgFront', index++, 'INPUT_RG_FRONT', true),
            },
            INPUT_RG_BACK: {
                ...this.inputData('Documento (Verso)', 'file', 'input', 'rgBack', index++, 'INPUT_RG_BACK', true),
            },
            INPUT_PROOF_RESIDENCE: {
                ...this.inputData('Comprovante de Residência', 'file', 'input', 'proofOfResidence', index++, 'INPUT_PROOF_RESIDENCE', true),
            },
            INPUT_SELFIE: {
                ...this.inputData('Selfie com Documento Aberto', 'file', 'input', 'selfie', index++, 'INPUT_SELFIE', true),
            },
            ...this.generateUserEnum(index++),
        }))(0);

        this.legalUserEnum = (index => ({
            INPUT_SOCIAL_REASON: {
                ...this.inputData('Razão Social', 'text', 'input', 'socialReason', index++, 'INPUT_SOCIAL_REASON', true),
                ...this.extraData({
                    length: {
                        max: 40,
                    },
                }),
            },
            INPUT_FANTASY_NAME: {
                ...this.inputData('Nome Fantasia', 'text', 'input', 'fantasyName', index++, 'INPUT_FANTASY_NAME', true),
                ...this.extraData({
                    length: {
                        max: 40,
                    },
                }),
            },
            INPUT_CNPJ: {
                ...this.inputData('CNPJ', 'text', 'input', 'cnpj', index++, 'INPUT_CNPJ', true),
                ...this.extraData({
                    subType: 'cnpj',
                    mask: '[/\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'/\', /\\d/, /\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/]',
                }),
            },
            INPUT_NAME_CONTACT: {
                ...this.inputData('Nome do Contato', 'text', 'input', 'name', index++, 'INPUT_NAME_CONTACT', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                    filter: 'contact',
                }),
            },
            INPUT_EMAIL_CONTACT: {
                ...this.inputData('E-mail do Contato', 'text', 'input', 'email', index++, 'INPUT_EMAIL', true),
                ...this.extraData({
                    subType: 'email',
                    filter: 'contact',
                }),
            },
            INPUT_PHONE_CONTACT: {
                ...this.inputData('Telefone do Contato', 'text', 'input', 'cellphone', index++, 'INPUT_PHONE_PARTNER', true),
                ...this.extraData({
                    subType: 'phone',
                    mask: '[/\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'-\', /\\w/]',
                    filter: 'contact',
                }),
            },
            INPUT_NAME_PARTNER: {
                ...this.inputData('Nome do Sócio', 'text', 'input', 'namePartner', index++, 'INPUT_NAME_PARTNER', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                    filter: 'partner',
                }),
            },
            INPUT_LASTNAME_PARTNER: {
                ...this.inputData('Sobrenome do Sócio', 'text', 'input', 'lastNamePartner', index++, 'INPUT_LASTNAME_PARTNER', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                    filter: 'partner',
                }),
            },
            INPUT_EMAIL_PARTNER: {
                ...this.inputData('E-mail do Sócio', 'text', 'input', 'emailPartner', index++, 'INPUT_EMAIL_PARTNER', true),
                ...this.extraData({
                    subType: 'email',
                    filter: 'partner',
                }),
            },
            INPUT_BIRTH_PARTNER: {
                ...this.inputData('Data de Nascimento do Sócio', 'text', 'input', 'birthPartner', index++, 'INPUT_BIRTH_PARTNER', true),
                ...this.extraData({
                    subType: 'birth',
                    mask: '[/\\d/, /\\d/, \'/\', /\\d/, /\\d/, \'/\', /\\d/, /\\d/, /\\d/, /\\d/]',
                    filter: 'partner',
                }),
            },
            INPUT_CPF_PARTNER: {
                ...this.inputData('CPF do Sócio', 'text', 'input', 'cpfPartner', index++, 'INPUT_CPF_PARTNER', true),
                ...this.extraData({
                    subType: 'cpf',
                    mask: '[/\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/]',
                    filter: 'partner',
                }),
            },
            INPUT_RG_PARTNER: {
                ...this.inputData('RG do Sócio', 'text', 'input', 'rgPartner', index++, 'INPUT_RG_PARTNER', true),
                ...this.extraData({
                    subType: 'rg',
                    mask: '[/\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'-\', /\\w/]',
                    filter: 'partner',
                }),
            },
            INPUT_RG_EMISSION_PARTNER: {
                ...this.inputData('Órgão Emissor do Sócio', 'text', 'input', 'rgEmissionPartner', index++, 'INPUT_RG_EMISSION_PARTNER', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_OCCUPATION_PARTNER: {
                ...this.inputData('Profissão do Sócio', 'text', 'input', 'occupationPartner', index++, 'INPUT_OCCUPATION_PARTNER', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_MARTIAL_STATUS_PARTNER: {
                ...this.inputData('Estado Civil do Sócio', 'text', 'combobox', 'martialStatusPartner', index++, 'INPUT_MARTIAL_STATUS_PARTNER', true),
                ...this.extraData({
                    itens: [
                        { label: 'Solteiro(a)', value: 'Solteiro(a)' },
                        { label: 'Casado(a)', value: 'Casado(a)' },
                        { label: 'Viúvo(a)', value: 'Viúvo(a)' },
                        { label: 'Divorciado(a)', value: 'Divorciado(a)' },
                    ],
                    filter: 'partner',
                }),
            },
            INPUT_PHONE_PARTNER: {
                ...this.inputData('Telefone do Sócio', 'text', 'input', 'cellphonePartner', index++, 'INPUT_PHONE_PARTNER', true),
                ...this.extraData({
                    subType: 'phone',
                    mask: '[/\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'.\', /\\d/, /\\d/, /\\d/, \'-\', /\\w/]',
                    filter: 'partner',
                }),
            },
            INPUT_ADDRESS_PARTNER: {
                ...this.inputData('Endereço do Sócio', 'text', 'input', 'addressPartner', index++, 'INPUT_ADDRESS_PARTNER', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 150,
                    },
                    filter: 'partner',
                }),
            },
            INPUT_STATE_PARTNER: {
                ...this.inputData('Estado do Sócio', 'text', 'combobox', 'statePartner', index++, 'INPUT_STATE_PARTNER', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_CITY_PARTNER: {
                ...this.inputData('Cidade do Sócio', 'text', 'combobox', 'cityPartner', index++, 'INPUT_CITY_PARTNER', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_CEP_PARTNER: {
                ...this.inputData('CEP do Sócio', 'text', 'input', 'cepPartner', index++, 'INPUT_CEP_PARTNER', true),
                ...this.extraData({
                    subType: 'cep',
                    mask: '[/\\d/, /\\d/, /\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/, /\\d/]',
                    filter: 'partner',
                }),
            },
            INPUT_ADDRESS_COMPLEMENT_PARTNER: {
                ...this.inputData('Complemento do Sócio', 'text', 'input', 'addressComplementPartner', index++, 'INPUT_ADDRESS_COMPLEMENT_PARTNER', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 150,
                    },
                    filter: 'partner',
                }),
            },
            INPUT_RG_FRONT: {
                ...this.inputData('Documento (Frontal) do Sócio', 'file', 'input', 'rgFrontPartner', index++, 'INPUT_RG_FRONT', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_RG_BACK: {
                ...this.inputData('Documento (Verso) do Sócio', 'file', 'input', 'rgBackPartner', index++, 'INPUT_RG_BACK', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_CONTRACT: {
                ...this.inputData('Contrato Social do Sócio', 'file', 'input', 'socialContractPartner', index++, 'INPUT_CONTRACT', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_CONTRACT_LAST_CHANGE: {
                ...this.inputData('Alteracao Contrato do Sócio', 'file', 'input', 'contractLastChangePartner', index++, 'INPUT_CONTRACT_LAST_CHANGE', true),
                ...this.extraData({
                    filter: 'partner',
                }),
            },
            INPUT_SELFIE: {
                ...this.inputData('Selfie do Sócio-proprietário', 'file', 'input', 'selfiePartner', index++, 'INPUT_SELFIE', true),
                ...this.extraData({
                    filter: 'partner',
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

export default (fieldsToExclude) => {
    const adminCreateUserEnum = new AdminCreateUserEnum();
    fieldsToExclude.forEach((field) => {
        if (adminCreateUserEnum.physicalUserEnum[field]) {
            delete adminCreateUserEnum.physicalUserEnum[field];
        }
        if (adminCreateUserEnum.legalUserEnum[field]) {
            delete adminCreateUserEnum.legalUserEnum[field];
        }
    });
    return adminCreateUserEnum;
};