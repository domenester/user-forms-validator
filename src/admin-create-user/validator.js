/* eslint no-param-reassign: "error" */

import Joi from 'joi';
import Profile from '../profile/profile-fields';
import userValidation from '../user/user-validation';

class AdminCreateUserValidation {
    constructor() {
        this.userSchema = userValidation;
        // 'type' param, must be 'physical' or 'legal'
        this.profileByUserType = (type) => {
            if (type !== 'physical' && type !== 'legal') throw new Error('type must be "physical" or "legal"');

            let labels = ['city', 'state', 'cep', 'address', 'addressComplement'];
            let values;

            if (type === 'physical') {
                labels = [...labels, 'name', 'lastName', 'birth', 'rgFront', 'rgBack', 'proofOfResidence', 'selfie', 'country', 'cellphone', 'rg', 'rgEmission', 'martialStatus', 'occupation', 'incomeTax'];
                values = Profile.getValuesByLabels(Joi.required(), labels);
            }

            if (type === 'legal') {
                /* eslint-disable max-len */
                const partnerLabels = ['cpfPartner', 'cityPartner', 'statePartner', 'cepPartner', 'addressPartner', 'namePartner', 'lastNamePartner', 'birthPartner', 'rgFrontPartner', 'rgBackPartner', 'selfiePartner', 'addressComplementPartner', 'cellphonePartner', 'rgPartner', 'rgEmissionPartner', 'martialStatusPartner', 'occupationPartner', 'socialContractPartner', 'contractLastChangePartner', 'emailPartner'];
                const contactLabels = ['contactName', 'contactEmail', 'contactPhone'];
                labels = [...labels, 'socialReason', 'fantasyName', ...partnerLabels, ...contactLabels];
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

const adminCreateUserValidation = new AdminCreateUserValidation();

export default adminCreateUserValidation;
