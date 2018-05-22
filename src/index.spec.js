import test from 'ava';
import { signup } from './index';

test('Starting to execute test cases for signup validation', (t) => {
    const en = signup.initEnums(['INPUT_COUNTRY']);
    t.log(en.sortByIndex('physicalUserEnum'));
    t.log(en.physicalUserEnum);
    t.pass();
});

// console.log(JSON.stringify(signup.enums.physicalUserEnum));
