import { ProfileEnum } from '../profile/enum';

class AdminCreateUserEnum extends ProfileEnum {}

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
