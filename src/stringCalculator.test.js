const add = require("./StringCalculator");

it("Should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("Should return number if only one number is inserted", () => {
    expect(add("5")).toBe(5);
});

it("Should return the sum of two numbers inserted and devided by , ", () => {
    expect(add("1,2")).toBe(3);
});

it("Should return the sum of multaple numbers inserted and devided by , ", () => {
    expect(add("1,2,3")).toBe(6);
});

it("Should return the sum of multaple numbers inserted and devided by , ", () => {
    expect(add("2\n2\n3")).toBe(7);
});

it("Should return error on negative input ", () => {
    function negativeNumbers() {
        add("1,-2,-3");
    }
        expect(negativeNumbers).toThrowError(/^Negatives not allowed: -2-3$/);
});