const { describe } = require("yargs");
const { sum, subtract } = require("./index");


test("takes two numbers 5 and 6 and return 11", () => {
    expect(sum(5, 6)).toEqual(11);
})
test("takes two numbers 5 and 6 and does not return 12", () => {
    expect(sum(5, 6)).not.toEqual(12);
})
test("takes two numbers 6 and 5 and return 1", () => {
    expect(subtract(6, 5)).toEqual(1);
})
test("takes two numbers 5 and 6 and does not return 12", () => {
    expect(subtract(6, 5)).not.toEqual(12);
})

// describe("testing sum", () => {
//     it("takes two numbers 5 and 6 and return 11", () => {
//         expect(sum(5, 6)).toEqual(11);
//     });
// });