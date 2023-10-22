const fromPair = require("./pair")


test('from pair all values present', () => {
    let input  = [["name","faiyaz"], ["age", 30], ["location","ernakulam"]]
    expect(fromPair(input)).toEqual({
        "name": "faiyaz",
        "age": 30,
        "location": "ernakulam"
    });
});

