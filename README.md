# README

## What do I need to do here?

### Clone Repository & Import
1. Clone this repository
2. Import this project into your IDE
3. Install the development dependencies

### Implement FizzBuzzBingo
1. Create and export a class called `FizzBuzz` in the file `lib/fizz-buzz.js` with a method called `evaluate` which accepts a number
2. Create tests in the provided `test/fizz-buzz.test.js` file testing the `FizzBuzz`s `evaluate(number)` method. Write tests for the following scenarios and implement `FizzBuzz` accordingly:
    - In case number is divisible by 3, the String "Fizz" should be returned.
    - In case the number is divisible by 5, the String "Buzz" should be returned.
    - For numbers that are divisible by 3 and 5, the String "FizzBuzz" should be returned.
    - All other numbers should be printed as Strings ("1", "2", etc.).
    - If the previous result was the same as the current one, append "Bingo" to the output (e.1. fizzBuzz(3)->Fizz , fizzBuzz(9)->FizzBingo)
3. Run the tests to verify your implementation.

### Implement the Animal Race
1. Create and export a single function in file `lib/animal-race.js`.
    - the function must accept a single argument `animals`, which the object exported from file `api/animals.js`
    - use the methods provided from `api/animals.js` to implement your race, e.g. `animals.rabbit()`
    - the function must return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves with an array, which represents the final placement of the animals competing in the race.
    - The expected outcome of the race is: `['🐌', '🐇', '🐢']`. So the `snail` must finish **1st** place, the `rabbit` must finish **2nd** place, and the `turtle` must finish **3rd** place.
    - The race must **not** take longer than 3000 milliseconds (plus some minor computing overhead). Hint: *all* animals should run *concurrently*.
2. Run the tests to verify your implementation.

### Commit and Push to personal Branch
Commit your changes and push them to a remote branch on this repository that matches your D/I/C-Number ( e.g. D055151 or I234212)

### Check Results
1. After pushing to this repository as per the previous step, check https://github.tools.sap/cloud-curriculum/cdf-nodejs-test for a pipeline run with your UserId
1. If the pipeline is successful (green) you passed, if it is red there were still some issues you need to fix.
