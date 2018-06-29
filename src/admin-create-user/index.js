import adminCreateUserValidation from './validator';
import adminCreateUserEnum from './enum';

const adminCreateUser = {
    validator: adminCreateUserValidation,
    initEnums: adminCreateUserEnum,
};
export default adminCreateUser;
