// import { acronym } from "./acronym.js";
const acronym = require("./acronym.js");

describe("Acronym function", () => {
  it('Basic', () => {
    expect(acronym('Portable Network Graphics')).toEqual('PNG');
  });
  test('LowerCaseWords', () => {
    expect(acronym('Ruby on Rails')).toEqual('ROR');
  });
  test('Punctuation', () => {
    expect(acronym('First In, First Out')).toEqual('FIFO');
  });
  test('nonAcronymAllCapsWord', () => {
    expect(acronym('GNU Image Manipulation Program')).toEqual('GIMP');
  });
  test('punctuationWithoutWhitespace', () => {
    expect(acronym('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
  test('veryLongAbbreviation', () => {
    expect(acronym('Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me')).toEqual('ROTFLSHTMDCOALM');
  });
  test('consecutiveDelimiters', () => {
    expect(acronym('Something - I made up from thin air')).toEqual('SIMUFTA');
  });
  test('apostrophes', () => {
    expect(acronym("Halley's Comet")).toEqual('HC');
  });
  test('underscoreEmphasis', () => {
    expect(acronym('The Road _Not_ Taken')).toEqual('TRNT');
  });
});
