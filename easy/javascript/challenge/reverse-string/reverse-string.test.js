// import { reverseString } from "./reverse-string.js";
const reverseString = require("./reverse-string.js");

describe("Reverse String function", () => {
  test('An empty string', () => {
    expect(reverseString("")).toEqual("");
  });
  test('A word', () => {
    expect(reverseString("robot")).toEqual("tobor");
  });
  test('A capitalized word', () => {
    expect(reverseString("Ramen")).toEqual("nemaR");
  });
  test('A sentence with punctuation', () => {
    expect(reverseString("I'm hungry!")).toEqual("!yrgnuh m'I");
  });
  test('A palindrome', () => {
    expect(reverseString("racecar")).toEqual("racecar");
  });
  test('An even sized word', () => {
    expect(reverseString("drawer")).toEqual("reward");
  });
});
