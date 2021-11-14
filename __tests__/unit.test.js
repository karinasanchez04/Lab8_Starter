// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("is a valid phone number", () => {
    const number = "(805) 754-8694";
    let isNumber = true;
    if(!functions.isPhoneNumber(number)){ isNumber = false};
    expect(isNumber).toBe(true);
})

test("valid phone number 2", () => {
    const number = "805-754-8694";
    let isNumber = true;
    if(!functions.isPhoneNumber(number)){ isNumber = false};
    expect(isNumber).toBe(true);
})

test("phone number with letters", () => {
    const number = "(805) 7A4-8694";
    let isNumber = true;
    if(!functions.isPhoneNumber(number)){ isNumber = false};
    expect(isNumber).toBe(false);
})

test("phone number with missing digit", () => {
    const number = "(805) 754-869";
    let isNumber = true;
    if(!functions.isPhoneNumber(number)){ isNumber = false};
    expect(isNumber).toBe(false);
})

test("valid email", () => {
    const email = "kcs@gmail.com";
    let isValid = true;
    if(!functions.isEmail(email)){ isValid = false};
    expect(isValid).toBe(true);
})

test("valid email 2", () => {
    const email = "kcsanchez44@yahoo.com";
    let isValid = true;
    if(!functions.isEmail(email)){ isValid = false};
    expect(isValid).toBe(true);
})

test("invalid email wrong ending", () => {
    const email = "kcsanchez44@yahoo.turtles";
    let isValid = true;
    if(!functions.isEmail(email)){ isValid = false};
    expect(isValid).toBe(false);
})

test("invalid email special characters", () => {
    const email = "kcsanchez$$!@yahoo.turtles";
    let isValid = true;
    if(!functions.isEmail(email)){ isValid = false};
    expect(isValid).toBe(false);
})

test("is a strong password", () => {
    const password = "dodgers_444";
    let isStrong = true;
    if(!functions.isStrongPassword(password)){ isStrong = false};
    expect(isStrong).toBe(true);
})

test("is a strong password 2", () => {
    const password = "d12569__";
    let isStrong = true;
    if(!functions.isStrongPassword(password)){ isStrong = false};
    expect(isStrong).toBe(true);
})

test("is not a strong password, not enough characters", () => {
    const password = "kcs";
    let isStrong = true;
    if(!functions.isStrongPassword(password)){ isStrong = false};
    expect(isStrong).toBe(false);
})

test("starts with a number", () => {
    const password = "4turtles";
    let isStrong = true;
    if(!functions.isStrongPassword(password)){ isStrong = false};
    expect(isStrong).toBe(false);
})

test("is a valid date", () => {
    const date = "05/04/2000";
    let isValid = true;
    if(!functions.isDate(date)){ isValid = false};
    expect(isValid).toBe(true);
})

test("is a valid date 2", () => {
    const date = "11/13/2021";
    let isValid = true;
    if(!functions.isDate(date)){ isValid = false};
    expect(isValid).toBe(true);
})

test("incorrect year format", () => {
    const date = "11/13/21";
    let isValid = true;
    if(!functions.isDate(date)){ isValid = false};
    expect(isValid).toBe(false);
})

test("incorrect date format", () => {
    const date = "11 13 21";
    let isValid = true;
    if(!functions.isDate(date)){ isValid = false};
    expect(isValid).toBe(false);
})

test("is a valid Hex", () => {
    const hex = "FFF";
    let isValid = true;
    if(!functions.isHexColor(hex)){ isValid = false};
    expect(isValid).toBe(true);
})

test("is a valid Hex 2", () => {
    const hex = "445544";
    let isValid = true;
    if(!functions.isHexColor(hex)){ isValid = false};
    expect(isValid).toBe(true);
})

test("is a not a valid Hex color", () => {
    const hex = "F!F";
    let isValid = true;
    if(!functions.isHexColor(hex)){ isValid = false};
    expect(isValid).toBe(false);
})

test("is a not a valid Hex color", () => {
    const hex = "FFFF";
    let isValid = true;
    if(!functions.isHexColor(hex)){ isValid = false};
    expect(isValid).toBe(false);
})