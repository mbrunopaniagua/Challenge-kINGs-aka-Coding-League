const TypeOfPerfectNumber = {
  DEFICIENT: "deficient",
  PERFECT: "perfect",
  ABUNDANT: "abundant"
}

// import { perfectNumber } from "./perfect-numbers.js";
const perfectNumber = require("./perfect-numbers.js");

describe("Perfect numbers function", () => {
  it('Small perfect number', () => {
    expect(perfectNumber(6)).toEqual(TypeOfPerfectNumber.PERFECT);
  });
  test('Medium Perfect Number', () => {
    expect(perfectNumber(28)).toEqual(TypeOfPerfectNumber.PERFECT);
  });
  test('Large Perfect Number', () => {
    expect(perfectNumber(33550336)).toEqual(TypeOfPerfectNumber.PERFECT);
  });
  test('Small Abundant Number', () => {
    expect(perfectNumber(12)).toEqual(TypeOfPerfectNumber.ABUNDANT);
  });
  test('Medium Abundant Number', () => {
    expect(perfectNumber(30)).toEqual(TypeOfPerfectNumber.ABUNDANT);
  });
  test('Large Abundant Number', () => {
    expect(perfectNumber(33550335)).toEqual(TypeOfPerfectNumber.ABUNDANT);
  });
  test('Small Prime Deficient Number', () => {
    expect(perfectNumber(2)).toEqual(TypeOfPerfectNumber.DEFICIENT);
  });
  test('Small Non Prime Deficient Number', () => {
    expect(perfectNumber(4)).toEqual(TypeOfPerfectNumber.DEFICIENT);
  });
  test('Medium Deficient Number', () => {
    expect(perfectNumber(32)).toEqual(TypeOfPerfectNumber.DEFICIENT);
  });
  test('Large Deficient Number', () => {
    expect(perfectNumber(33550337)).toEqual(TypeOfPerfectNumber.DEFICIENT);
  });
});
