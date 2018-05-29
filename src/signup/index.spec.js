import test from 'ava';
import signup from './index';

const signUpValidation = signup.validator;

const mocks = require('./mocks/validator.json');

class SignUpValidationTester {
    // eslint-disable-next-line class-methods-use-this
    shouldThrowError(t, body, message) {
        return signUpValidation.validateUserAndProfile(body, (err) => {
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

const signUpTester = new SignUpValidationTester();

test('Starting to execute test cases for signup validation', t => t.pass());

test('should accept object for signup', (t) => {
    const body = mocks.shouldPass;
    signUpValidation.validateUserAndProfile(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
    });
});

test('should throw error when cpf is invalid', (t) => {
    const body = mocks.cpfInvalid;
    return signUpTester.shouldThrowError(t, body, 'CPF inválido');
});

test('should throw error when term use is not checked', (t) => {
    const body = mocks.termNotChecked;
    return signUpTester.shouldThrowError(t, body, 'O termo de uso precisa estar checado');
});

test('should throw error when email is not valid', (t) => {
    const body = mocks.emailInvalid;
    return signUpTester.shouldThrowError(t, body, 'E-mail inválido');
});

test('should throw error when emailConfirm is different', (t) => {
    const body = mocks.emailConfirmInvalid;
    return signUpTester.shouldThrowError(t, body, 'Os email não são iguais!');
});

test('should throw error when email and username is different', (t) => {
    const body = mocks.usernameInvalid;
    return signUpTester.shouldThrowError(t, body, 'Username e email devem ser iguais!');
});

test('should throw error when password length is under 8', (t) => {
    const body = mocks.passwordUnder8;
    return signUpTester.shouldThrowError(t, body, 'O campo senha precisa ter entre 8 a 16 caracteres, 1 caractere maiúsculo, 1 caractere especial e 1 número.');
});

test('should throw error when password confirm is different', (t) => {
    const body = mocks.passwordDifferent;
    return signUpTester.shouldThrowError(t, body, 'As senhas não conferem');
});

test('should throw error when cpf or cnpj is empty', (t) => {
    const body = mocks.cpfOrCnpjEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo CPF ou CNPJ');
});

test('should throw error when city field is empty', (t) => {
    const body = mocks.cityEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo Cidade');
});

test('should throw error when state field is empty', (t) => {
    const body = mocks.stateEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo Estado');
});

test('should throw error when name field is empty', (t) => {
    const body = mocks.nameEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo Nome');
});

test('should throw error when name field length is over 30', (t) => {
    const body = mocks.nameLength;
    return signUpTester.shouldThrowError(t, body, 'O campo nome precisa ter no máximo 30 caracteres!!');
});

test('should throw error when last name field is empty', (t) => {
    const body = mocks.lastNameEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo Sobrenome');
});

test('should throw error when last name field length is over 30', (t) => {
    const body = mocks.lastNameLength;
    return signUpTester.shouldThrowError(t, body, 'O campo Sobrenome precisa ter no máximo 30 caracteres!!');
});

test('should throw error when birth date is invalid', (t) => {
    const body = mocks.birthInvalid;
    return signUpTester.shouldThrowError(t, body, 'Data de Nascimento inválida');
});

test('should throw error when birth date is under 18', (t) => {
    const body = mocks.birthUnder18;
    return signUpTester.shouldThrowError(t, body, 'Para finalizar uma conta na Zater você precisa ser maior de idade!');
});

test('should accept legal person for signup', (t) => {
    const body = mocks.shouldPassLegal;
    signUpValidation.validateUserAndProfile(body, (err, ret) => {
        if (err) { t.log(err); t.fail(); } else { t.deepEqual(body, ret); t.log('Body accepted.'); }
    });
});

test('should throw error when cnpj is invalid', (t) => {
    const body = mocks.cnpjInvalid;
    return signUpTester.shouldThrowError(t, body, 'CNPJ inválido');
});

test('should throw error when social reason length is over 40', (t) => {
    const body = mocks.socialReasonOver40;
    return signUpTester.shouldThrowError(t, body, 'O campo Razão Social precisa ter no máximo 40 caracteres!');
});

test('should throw error when social reason is empty', (t) => {
    const body = mocks.socialReasonEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo Razão Social');
});

test('should throw error when fantasy name length is over 40', (t) => {
    const body = mocks.fantasyNameOver40;
    return signUpTester.shouldThrowError(t, body, 'O campo Nome Fantasia precisa ter no máximo 40 caracteres!');
});

test('should throw error when fantasy name is empty', (t) => {
    const body = mocks.fantasyNameEmpty;
    return signUpTester.shouldThrowError(t, body, 'Preencha o campo Nome Fantasia');
});
