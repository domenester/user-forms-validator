/* eslint no-param-reassign: "error" */
import Joi from 'joi';
import DocumentValidation from '../user/helper/joi-custom/cpfcnpj';
import thens from './helpers/joi-thens';

class Profile {
    constructor() {
        this.validationByLabel = {
            city: { is: 'Cidade', then: thens.city },
            cityPartner: { is: 'Cidade-SOCIO', then: thens.city },
            state: { is: 'Estado', then: thens.state },
            statePartner: { is: 'Estado-SOCIO', then: thens.state },
            cep: { is: 'CEP', then: thens.cep },
            cepPartner: { is: 'CEP-SOCIO', then: thens.cep },
            address: { is: 'Endereço', then: thens.address },
            addressPartner: { is: 'Endereço-SOCIO', then: thens.address },
            addressComplement: { is: 'Complemento', then: thens.addressComplement },
            addressComplementPartner: { is: 'Complemento-SOCIO', then: thens.addressComplement },
            cellphone: { is: 'Celular', then: thens.cellphone },
            cellphonePartner: { is: 'Telefone-SOCIO', then: thens.cellphone },
            martialStatus: { is: 'Estado civil', then: thens.martialStatus },
            martialStatusPartner: { is: 'Estado Civil-SOCIO', then: thens.martialStatus },
            occupation: { is: 'Profissão', then: thens.occupation },
            occupationPartner: { is: 'Profissão-SOCIO', then: thens.occupation },
            incomeTax: {
                is: 'Número do comprovante IR',
                then: Joi.string().allow('').optional().error((err) => {
                    err[0].message = 'Número do comprovante de IR inválido';
                    return err;
                }),
            },
            rg: { is: 'RG', then: thens.rg },
            rgPartner: { is: 'RG-SOCIO', then: thens.rg },
            rgEmission: { is: 'RG Emissão', then: thens.rgEmission },
            rgEmissionPartner: { is: 'Orgão emissor-SOCIO', then: thens.rgEmission },
            cpfPartner: { is: 'CPF-SOCIO', then: DocumentValidation.any().isCpf() },
            emailPartner: { is: 'Email-SOCIO', then: thens.email },
            rgFront: { is: 'Documento (frontal)', then: thens.linkValidation('Documento frontal inválido') },
            rgFrontPartner: { is: 'Documento (frontal)', then: thens.linkValidation('Documento frontal inválido') },
            rgBack: { is: 'Documento (verso)', then: thens.linkValidation('Verso do documento inválido') },
            rgBackPartner: { is: 'Documento (verso)', then: thens.linkValidation('Verso do documento inválido') },
            selfie: { is: 'Selfie com doc. aberto', then: thens.linkValidation('Selfie com documento inválido') },
            selfiePartner: { is: 'Selfie do Sócio-proprietário', then: thens.linkValidation('Selfie com documento inválido') },
            socialContractPartner: { is: 'Contrato Social', then: thens.linkValidation('Contrato Social inválido') },
            contractLastChangePartner: { is: 'Alteracao Contrato', then: thens.linkValidation('Alteração de Contrato inválida') },
            proofOfResidence: { is: 'Comp. de Residência', then: thens.linkValidation('Comprovante de residência inválido') },
            birth: { is: 'Data de Nascimento', then: thens.birth },
            birthPartner: { is: 'Nascimento-SOCIO', then: thens.birth },
            name: { is: 'Nome', then: thens.name },
            namePartner: { is: 'Nome-SOCIO', then: thens.name },
            lastName: { is: 'Sobrenome', then: thens.lastName },
            lastNamePartner: { is: 'Sobre Nome-SOCIO', then: thens.lastName },
            country: { is: 'País', then: thens.country },
            socialReason: {
                is: 'RazaoSocial',
                then: Joi.string().required().max(255).error((err) => {
                    if (err[0].type === 'string.max') err[0].message = 'O campo Razão Social precisa ter no máximo 255 caracteres!';
                    else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Razão Social';
                    return err;
                }),
            },
            fantasyName: {
                is: 'NomeFantasia',
                then: Joi.string().required().max(40).error((err) => {
                    if (err[0].type === 'string.max') err[0].message = 'O campo Nome Fantasia precisa ter no máximo 40 caracteres!';
                    else if (err[0].type === 'any.empty') err[0].message = 'Preencha o campo Nome Fantasia';
                    return err;
                }),
            },
            contactName: { is: 'contactName', then: thens.name },
            contactPhone: { is: 'contactPhone', then: thens.cellphone },
            contactEmail: { is: 'contactEmail', then: thens.email },
        };
    }

    getValuesByLabels(joiToMount, labels) {
        let joiMounted = joiToMount;
        labels.forEach((label) => { joiMounted = joiMounted.when('label', this.validationByLabel[label]); });
        return joiMounted;
    }

    getLabelsNameByKey(labels) {
        return labels.map(label => this.validationByLabel[label].is);
    }
}

export default new Profile();
