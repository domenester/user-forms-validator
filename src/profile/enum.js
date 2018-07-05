
class ProfileEnum {
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
        this.generateUserEnum = (index, cb) => {
            let userEnum = {
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
                    ...this.extraData({
                        subType: 'state',
                        filter: 'person',
                    }),
                },
                INPUT_CITY: {
                    ...this.inputData('Cidade', 'text', 'combobox', 'city', index++, 'INPUT_CITY', true),
                    ...this.extraData({
                        subType: 'city',
                        filter: 'person',
                    }),
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
                INPUT_ADDRESS_COMPLEMENT: {
                    ...this.inputData('Complemento', 'text', 'input', 'addressComplement', index++, 'INPUT_ADDRESS_COMPLEMENT'),
                    ...this.extraData({
                        length: {
                            min: 2,
                            max: 150,
                        },
                    }),
                },
            };

            if (cb) userEnum = { ...userEnum, ...cb(index++) };

            return userEnum;
        };

        this.generatePartnerEnum = index => ({
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
                    filter: 'partner',
                }),
            },
            INPUT_RG_EMISSION_PARTNER: {
                ...this.inputData('Órgão Emissor do Sócio', 'text', 'combobox', 'rgEmissionPartner', index++, 'INPUT_RG_EMISSION_PARTNER', true),
                ...this.extraData({
                    itens: [
                        { label: 'AC', value: 'AC' },
                        { label: 'AL', value: 'AL' },
                        { label: 'AP', value: 'AP' },
                        { label: 'AM', value: 'AM' },
                        { label: 'BA', value: 'BA' },
                        { label: 'CE', value: 'CE' },
                        { label: 'DF', value: 'DF' },
                        { label: 'ES', value: 'ES' },
                        { label: 'GO', value: 'GO' },
                        { label: 'MA', value: 'MA' },
                        { label: 'MT', value: 'MT' },
                        { label: 'MS', value: 'MS' },
                        { label: 'MG', value: 'MG' },
                        { label: 'PA', value: 'PA' },
                        { label: 'PB', value: 'PB' },
                        { label: 'PR', value: 'PR' },
                        { label: 'PE', value: 'PE' },
                        { label: 'PI', value: 'PI' },
                        { label: 'RJ', value: 'RJ' },
                        { label: 'RN', value: 'RN' },
                        { label: 'RS', value: 'RS' },
                        { label: 'RO', value: 'RO' },
                        { label: 'RR', value: 'RR' },
                        { label: 'SC', value: 'SC' },
                        { label: 'SP', value: 'SP' },
                        { label: 'SE', value: 'SE' },
                        { label: 'TO', value: 'TO' },
                    ],
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
                        { label: 'Divorciado(a)', value: 'Divorciado(a)' },
                        { label: 'Separado(a)', value: 'Separado(a)' },
                        { label: 'Viúvo(a)', value: 'Viúvo(a)' },
                    ],
                    filter: 'partner',
                }),
            },
            INPUT_PHONE_PARTNER: {
                ...this.inputData('Telefone do Sócio', 'text', 'input', 'cellphonePartner', index++, 'INPUT_PHONE_PARTNER', true),
                ...this.extraData({
                    subType: 'phone',
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
                    subType: 'state',
                    filter: 'partner',
                }),
            },
            INPUT_CITY_PARTNER: {
                ...this.inputData('Cidade do Sócio', 'text', 'combobox', 'cityPartner', index++, 'INPUT_CITY_PARTNER', true),
                ...this.extraData({
                    subType: 'city',
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
                ...this.inputData('Complemento do Sócio', 'text', 'input', 'addressComplementPartner', index++, 'INPUT_ADDRESS_COMPLEMENT_PARTNER'),
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
            INPUT_PHONE: {
                ...this.inputData('Telefone', 'text', 'input', 'cellphone', index++, 'INPUT_PHONE', true),
                ...this.extraData({
                    subType: 'phone',
                }),
            },
            INPUT_RG: {
                ...this.inputData('RG', 'text', 'input', 'rg', index++, 'INPUT_RG', true),
                ...this.extraData({
                    subType: 'rg',
                }),
            },
            INPUT_RG_EMISSION: {
                ...this.inputData('Órgão Emissor', 'text', 'input', 'rgEmission', index++, 'INPUT_RG_EMISSION', true),
            },
            INPUT_OCCUPATION: {
                ...this.inputData('Profissão', 'text', 'input', 'occupation', index++, 'INPUT_OCCUPATION', true),
            },
            INPUT_MARTIAL_STATUS: {
                ...this.inputData('Estado Civil', 'text', 'combobox', 'martialStatus', index++, 'INPUT_MARTIAL_STATUS', true),
                ...this.extraData({
                    itens: [
                        { label: 'Solteiro(a)', value: 'Solteiro(a)' },
                        { label: 'Casado(a)', value: 'Casado(a)' },
                        { label: 'Divorciado(a)', value: 'Divorciado(a)' },
                        { label: 'Separado(a)', value: 'Separado(a)' },
                        { label: 'Viúvo(a)', value: 'Viúvo(a)' },
                    ],
                    filter: 'partner',
                }),
            },
            INPUT_INCOME_TAX: {
                ...this.inputData('Número do IR', 'text', 'input', 'incomeTax', index++, 'INPUT_INCOME_TAX'),
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
                ...this.inputData('Nome do Contato', 'text', 'input', 'contactName', index++, 'INPUT_NAME_CONTACT', true),
                ...this.extraData({
                    length: {
                        min: 2,
                        max: 20,
                    },
                    filter: 'contact',
                }),
            },
            INPUT_EMAIL_CONTACT: {
                ...this.inputData('E-mail do Contato', 'text', 'input', 'contactEmail', index++, 'INPUT_EMAIL', true),
                ...this.extraData({
                    subType: 'email',
                    filter: 'contact',
                }),
            },
            INPUT_PHONE_CONTACT: {
                ...this.inputData('Telefone do Contato', 'text', 'input', 'contactPhone', index++, 'INPUT_PHONE_PARTNER', true),
                ...this.extraData({
                    subType: 'phone',
                    filter: 'contact',
                }),
            },
            ...this.generateUserEnum(index++, this.generatePartnerEnum),
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

export { ProfileEnum };

export default (fieldsToExclude) => {
    const profileEnum = new ProfileEnum();
    fieldsToExclude.forEach((field) => {
        if (profileEnum.physicalUserEnum[field]) {
            delete profileEnum.physicalUserEnum[field];
        }
        if (profileEnum.legalUserEnum[field]) {
            delete profileEnum.legalUserEnum[field];
        }
    });
    return profileEnum;
};
