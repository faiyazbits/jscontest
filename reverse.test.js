const reverse = require("./reverse")


test('reverse an array', () => {
    let input  = [1,2,3,4]
    expect(reverse(input)).toEqual([4,3,2,1]);
});

test('reverse an array for all element same', () => {
    let input  = [1,1,2]
    expect(reverse(input)).toEqual([2,1,1]);
});