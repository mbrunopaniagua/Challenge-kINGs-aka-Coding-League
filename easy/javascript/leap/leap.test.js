// import { leap } from "./leap.js";
const leap = require("./leap.js");

describe("Leap function", () => {
  it('Year not div by 4', () => {
    expect(leap(2015)).toBe(false);
  });
  test('Year div by 2 not div by 4', () => {
    expect(leap(1970)).toBe(false);
  });
  test('Year div by 4 not div by 100', () => {
    expect(leap(1996)).toBe(true);
  });
  test('Year div by 4 and by 5', () => {
    expect(leap(1960)).toBe(true);
  });
  test('Year div 100 not by 400', () => {
    expect(leap(2100)).toBe(false);
  });
  test('Year div by 100 not div by 3', () => {
    expect(leap(1900)).toBe(false);
  });
  test('Year div by 400', () => {
    expect(leap(2000)).toBe(true);
  });
  test('Year div by 400 not div by 125', () => {
    expect(leap(2400)).toBe(true);
  });
  test('Year div by 200 not div 400', () => {
    expect(leap(1800)).toBe(false);
  });
});
