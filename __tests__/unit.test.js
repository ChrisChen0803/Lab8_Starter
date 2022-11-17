// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Test if a phone number has shorter length', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});
test('Test if a phone number without dash', () => {
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});
test('Test if a phone number with dash', () => {
    expect(functions.isPhoneNumber('333-111-1111')).toBe(true);
});
test('Test if a phone number length correct', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('Test if an email has @', () => {
    expect(functions.isEmail('chc033@ucsd.edu')).toBe(true);
});
test('Test if an email does not have @', () => {
    expect(functions.isEmail('chc033ucsd.edu')).toBe(false);
});
test('Test if an email has .', () => {
    expect(functions.isEmail('chc033@ucsd.edu')).toBe(true);
});
test('Test if an email does not have .', () => {
    expect(functions.isEmail('chc033@ucsdedu')).toBe(false);
});

test('Test if a password has short length', () => {
    expect(functions.isStrongPassword('1c')).toBe(false);
});

test('Test if a password only contains numbers', () => {
    expect(functions.isStrongPassword('11111111')).toBe(false);
});

test('Test if a password with 3 numbers', () => {
    expect(functions.isStrongPassword('chris111')).toBe(true);
});

test('Test if a password with numbers and characters', () => {
    expect(functions.isStrongPassword('ABCd1234')).toBe(true);
});

test('Test if a date whose year has 2 digit', () => {
    expect(functions.isDate('02/03/02')).toBe(false);
});
test('Test if a date whose month has 1 digit', () => {
    expect(functions.isDate('2/03/2002')).toBe(true);
});
test('Test if a date whose month has 3 digit', () => {
    expect(functions.isDate('202/03/2002')).toBe(false);
});
test('Test if a date whose date has 1 digit', () => {
    expect(functions.isDate('02/3/2002')).toBe(true);
});

test('Test if a hexcolor has less characters', () => {
    expect(functions.isHexColor('a')).toBe(false);
});
test('Test if a hexcolor has more characters', () => {
    expect(functions.isHexColor('abcdefghjklmn')).toBe(false);
});
test('Test if a hexcolor has 3 characters', () => {
    expect(functions.isHexColor('abc')).toBe(true);
});
test('Test if a hexcolor has 6 characters', () => {
    expect(functions.isHexColor('ABC123')).toBe(true);
});