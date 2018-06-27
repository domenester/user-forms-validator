/* eslint no-param-reassign: "error" */

import Joi from 'joi';
import Profile from './profile-fields';

class ProfileValidation {
    constructor() {
        this.profileByUserType = (type) => {
            if (type !== 'physical' && type !== 'legal') throw new Error('type must be "physical" or "legal"');

            let labels = ['city', 'state', 'cep', 'address'];
            let values;

            if (type === 'physical') {
                labels = [...labels,
                    'name', 'lastName', 'country', 'rg', 'addressComplement',
                    'birth', 'cellphone', 'martialStatus', 'occupation', 'rgEmission', 'incomeTax',
                    'rgFront', 'rgBack', 'selfie', 'proofOfResidence'];

                values = Profile.getValuesByLabels(Joi.required(), labels);
            }

            if (type === 'legal') {
                labels = [...labels, 'socialReason', 'fantasyName'];
                values = Profile.getValuesByLabels(Joi.required(), labels);
            }

            return Joi.array().min(labels.length).unique().items(Joi.object().keys({
                label: Joi.string().required().valid(Profile.getLabelsNameByKey(labels)),
                value: values,
            }));
        };
    }

    validatePhysicalProfile(obj, cb) {
        return Joi.validate(obj, this.profileByUserType('physical'), (err, value) => cb(err, value));
    }
    validateLegalProfile(obj, cb) {
        return Joi.validate(obj, this.profileByUserType('legal'), (err, value) => cb(err, value));
    }
}

const profileValidation = new ProfileValidation();

export default profileValidation;
