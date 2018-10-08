const add = require("./StringCalculator");

it("Should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("Should return number if only one number is inserted", () => {
    expect(add("5")).toBe(5);
});