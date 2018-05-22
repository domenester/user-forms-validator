import test from 'ava';
import { signup } from './index';

test('Starting to execute test cases for signup validation', (t) => {
    t.log(signup.enums.sortByIndex('physicalUserEnum'));
    t.log(signup.enums.physicalUserEnum);
    t.pass();
});

// console.log(JSON.stringify(signup.enums.physicalUserEnum));
