const StringCalculator = require('./StringCalculator');

test('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("")).toBe(0);
});


test('should return the number itself for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1")).toBe(1);
});


test('should return the sum of two numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.Add("1,2")).toBe(3);
});