const TypeOfPerfectNumber = {
  DEFICIENT: "deficient",
  PERFECT: "perfect",
  ABUNDANT: "abundant"
}

function perfectNumber(number) {
  return TypeOfPerfectNumber.DEFICIENT;
}

module.exports = perfectNumber;