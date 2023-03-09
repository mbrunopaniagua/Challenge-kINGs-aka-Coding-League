function acronym(phrase) {
  const words = phrase
    .replace(/[_-]/g, " ") // replace underscores and hyphens with spaces
    .split(" ")
    .filter(word => word.length > 0); // split into words and remove any empty strings

  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0].toUpperCase();
  }

  return acronym;
}

module.exports = acronym;