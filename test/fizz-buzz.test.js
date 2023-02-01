import assert from 'assert/strict'
import FizzBuzz from '../lib/fizz-buzz.js'

// describe('fizz-buzz', function () {
//   it('example failing test', () => {
//     const fizzBuzz = new FizzBuzz()
//     const result = fizzBuzz.evaluate(1)
//     // TODO: add your assertions here
//     // @see https://nodejs.org/dist/latest-v16.x/docs/api/assert.html#assert
//   })
//   // TODO: implement more tests here
//   // @see https://mochajs.org
// })


describe('fizz-buzz', () => {
    let fizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    it('should return "Fizz" when input is divisible by 3', () => {
        assert.strictEqual(fizzBuzz.evaluate(3), "Fizz");
    });

    it('should return "Buzz" when input is divisible by 5', () => {
        assert.strictEqual(fizzBuzz.evaluate(5), "Buzz");
    });

    it('should return "FizzBuzz" when input is divisible by 3 and 5', () => {
        assert.strictEqual(fizzBuzz.evaluate(15), "FizzBuzz");
    });

    it('should return the input as a string when input is not divisible by 3 or 5', () => {
        assert.strictEqual(fizzBuzz.evaluate(1), "1");
        assert.strictEqual(fizzBuzz.evaluate(2), "2");
    });

    it('should append "Bingo" to the result if the previous result is the same as the current one', () => {
        assert.strictEqual(fizzBuzz.evaluate(3), "Fizz");
        assert.strictEqual(fizzBuzz.evaluate(9), "FizzBingo");
        assert.strictEqual(fizzBuzz.evaluate(5), "Buzz");
        assert.strictEqual(fizzBuzz.evaluate(10), "BuzzBingo");
        assert.strictEqual(fizzBuzz.evaluate(15), "FizzBuzz");
        assert.strictEqual(fizzBuzz.evaluate(30), "FizzBuzzBingo");
    });

    it('should throw an error when input is not a number', () => {
        assert.throws(() => {
            fizzBuzz.evaluate('string');
        }, Error, 'Invalid argument');
    });
});
