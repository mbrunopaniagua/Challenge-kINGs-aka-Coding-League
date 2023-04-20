// import { armstrongNumbers } from "./armstrong-numbers.js";
const armstrongNumbers = require("./armstrong-numbers.js");

describe("Armstrong Numbers function", () => {
  test('Zero', () => {
    expect(armstrongNumbers(0)).toBe(true);
  });

  test('Single digits is Armstrong numbers', () => {
    expect(armstrongNumbers(5)).toBe(true);
  });

  test('No two digits Armstrong numbers', () => {
    expect(armstrongNumbers(10)).toBe(false);
  });

  test('Three digits is Armstrong numbers', () => {
    expect(armstrongNumbers(153)).toBe(true);
  });

  test('Three digits is not Armstrong numbers', () => {
    expect(armstrongNumbers(100)).toBe(true);
  });

  test('Four digits is Armstrong numbers', () => {
    expect(armstrongNumbers(9474)).toBe(true);
  });

  test('Four digits is not Armstrong numbers', () => {
    expect(armstrongNumbers(9475)).toBe(false);
  });

  test('Seven digits is Armstrong numbers', () => {
    expect(armstrongNumbers(9926315)).toBe(true);
  });

  test('Seven digits is not Armstrong numbers', () => {
    expect(armstrongNumbers(9926314)).toBe(false);
  });
});
