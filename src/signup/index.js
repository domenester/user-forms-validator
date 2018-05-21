import SignUpValidation from './validator';
import { userEnum, physicalUserEnum, legalUserEnum } from './enum';

const signup = {
    validator: SignUpValidation,
    enums: {
        userEnum,
        physicalUserEnum,
        legalUserEnum
    }
}
export { signup };
