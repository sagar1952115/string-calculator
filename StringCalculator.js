class StringCalculator {
  Add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const numberArray = numbers
      .split(/[\n,]/) // Added rejex to split number by either a comma or a new  line
      .map((num) => parseInt(num));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
