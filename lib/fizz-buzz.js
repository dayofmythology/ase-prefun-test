// TODO: Create and export your FizzBuzz class in this file
export default class FizzBuzz {

    constructor() {
        this.previousResult = null;
        this.currentResult= null;
    }

    evaluate(num) {
        if (typeof (num) !== 'number') {
            throw new Error('Invalid argument')
        }
        if (num % 15 === 0) { 
            this.currentResult = 'FizzBuzz';
        }
        else if (num % 3 === 0) {
            this.currentResult = 'Fizz';
        }
        else if (num % 5 === 0) {            
            this.currentResult = 'Buzz';
        }
        else {
            this.currentResult = `${num}`
        }
        
        if(this.previousResult == this.currentResult) {
            this.currentResult+='Bingo'
        }

        this.previousResult = this.currentResult
        return this.currentResult

    }
}