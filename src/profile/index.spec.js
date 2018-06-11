import test from 'ava';
import profile from './index';

const profileValidation = profile.validator;

const mocks = require('./mocks/validator.json');

// class ProfileValidationTester {
//     // eslint-disable-next-line class-methods-use-this
//     shouldThrowError(t, body, message) {
//         return profileValidation.validatePhysicalProfile(body, (err) => {
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

// const profileTester = new ProfileValidationTester();

test('Starting test cases for profile validation', t => t.pass());

test('should accept object for physical person profile', (t) => {
    const body = mocks.physical.shouldPass;
    profileValidation.validatePhysicalProfile(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.notDeepEqual(body, ret); t.log('Body accepted.'); }
    });
});

// test('should accept object for legal person profile', (t) => {
//     const body = mocks.legal.shouldPass;
//     profileValidation.validatePhysicalProfile(body, (err, ret) => {
//         if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
//     });
// });

// test('should throw error when cpf is invalid', (t) => {
//     const body = mocks.cpfInvalid;
//     return profileTester.shouldThrowError(t, body, 'CPF inválido');
// });
