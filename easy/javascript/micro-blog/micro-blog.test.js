// import { microBlog } from "./micro-blog.js";
const microBlog = require("./micro-blog.js");

describe("Micro Blog function", () => {
  it('Enlgish language short', () => {
    expect(microBlog('Hi')).toEqual('Hi');
  });
  test('English language long', () => {
    expect(microBlog('Hello there')).toEqual('Hello');
  });
  test('German language short', () => {
    expect(microBlog('brühe')).toEqual('brühe');
  });
  test('German language long', () => {
    expect(microBlog('Bärteppich')).toEqual('Bärte');
  });
  test('Bulgarian language short', () => {
    expect(microBlog('Добър')).toEqual('Добър');
  });
  test('Greek language short', () => {
    expect(microBlog('υγειά')).toEqual('υγειά');
  });
  test('Maths short', () => {
    expect(microBlog('a=πr²')).toEqual('a=πr²');
  });
  test('Maths long', () => {
    expect(microBlog('∅⊊ℕ⊊ℤ⊊ℚ⊊ℝ⊊ℂ')).toEqual('∅⊊ℕ⊊ℤ');
  });
  test('English and Emoji', () => {
    expect(microBlog('Fly 🛫')).toEqual('Fly 🛫');
  });
  test('Emoji short', () => {
    expect(microBlog('💇')).toEqual('💇');
  });
  test('Emoji long', () => {
    expect(microBlog('❄🌡🤧🤒🏥🕰😀')).toEqual('❄🌡🤧🤒🏥');
  });
  test('Royal flush', () => {
    expect(microBlog('🃎🂸🃅🃋🃍🃁🃊')).toEqual('🃎🂸🃅🃋🃍');
  });
});
