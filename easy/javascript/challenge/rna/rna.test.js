// import { rna } from "./rna.js";
const rna = require("./rna.js");

describe("RNA function", () => {
  test('Empty RNA sequence', () => {
    expect(transcribe("")).toEqual("");
  });
  test('RNA of cytosine is guanine', () => {
    expect(transcribe("C")).toEqual("G");
  });
  test('RNA of guanine is cytosine', () => {
    expect(transcribe("G")).toEqual("C");
  });
  test('RNA of thymine is adenine', () => {
    expect(transcribe("T")).toEqual("A");
  });
  test('RNA of adenine is uracil', () => {
    expect(transcribe("A")).toEqual("U");
  });
  test('RNA trnascription', () => {
    expect(transcribe("ACGTGGTCTTAA")).toEqual("UGCACCAGAAUU");
  });
});
