const checkpassword = require('./checkpassword');


test('password should have 6 characters', () => {
    let p  = "A1help"
    expect(checkpassword(p)).toEqual(true);
});

test('password should have at least one number', () => {
    let p  = "A1help"
    expect(checkpassword(p)).toEqual(true);
});

test('password should have at least one uppercase', () => {
    let p  = "A1help"
    expect(checkpassword(p)).toEqual(true);
});

