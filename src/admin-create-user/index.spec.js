import test from 'ava';
import adminCreateUser from './index';

const adminCreateUserValidation = adminCreateUser.validator;

const mocks = require('./mocks/validator.json');

// class SignUpValidationTester {
//     // eslint-disable-next-line class-methods-use-this
//     shouldThrowError(t, body, message) {
//         return signUpValidation.validateUserAndProfile(body, (err) => {
//             if (!err) {
//                 t.log(err);
//                 t.fail();
//             } else {
//                 t.log(err.details[0].message);
//                 t.deepEqual(err.details[0].message, message);
//             }
//         });
//     }
// }

// const signUpTester = new SignUpValidationTester();

test.only('Starting to execute test cases for signup validation', t => t.pass());

test.only('should accept natural person user data', (t) => {
    const body = mocks.natural.shouldPass;
    adminCreateUserValidation.validateUserAndProfile(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
    });
});

test.only('should accept legal person user data', (t) => {
    const body = mocks.legal.shouldPass;
    adminCreateUserValidation.validateUserAndProfile(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
    });
});
