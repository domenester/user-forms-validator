import test from 'ava';
import logon from './index';

const logonValidation = logon.validator;

const mocks = require('./mocks/validator.json');

class LogonValidationTester {
    // eslint-disable-next-line class-methods-use-this
    shouldThrowError(t, body, message) {
        return logonValidation.validateLogon(body, (err) => {
            if (!err) {
                t.log(err);
                t.fail();
            } else {
                t.log(err.details[0].message);
                t.deepEqual(err.details[0].message, message);
            }
        });
    }
}

const logonTester = new LogonValidationTester();

test('Starting to execute test cases for logon validation', t => t.pass());

test('should accept object for logon with token', (t) => {
    const body = mocks.shouldPassWithToken;
    logonValidation.validateLogon(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
    });
});

test('should accept object for logon without token', (t) => {
    const body = mocks.shouldPassWithoutToken;
    logonValidation.validateLogon(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
    });
});

test('should throw error when email is invalid', (t) => {
    const body = mocks.invalidEmail;
    return logonTester.shouldThrowError(t, body, 'E-mail inválido');
});

test('should throw error when password is invalid', (t) => {
    const body = mocks.invalidPassword;
    return logonTester.shouldThrowError(t, body, 'O campo senha precisa ter entre 8 a 16 caracteres, 1 caractere maiúsculo, 1 caractere especial e 1 número.');
});

test('should throw error when token length is high', (t) => {
    const body = mocks.invalidTokenHighLength;
    return logonTester.shouldThrowError(t, body, 'O campo token precisa ter 6 digitos.');
});

test('should throw error when token length is low', (t) => {
    const body = mocks.invalidTokenLowLength;
    return logonTester.shouldThrowError(t, body, 'O campo token precisa ter 6 digitos.');
});
