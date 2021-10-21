# README

## What do I need to do here?

### Clone Repository & Import
1. Clone this repository
1. Import this project into your IDE
1. Install the development dependencies

### Implement FizzBuzzBingo
1. Create a class called `FizzBuzz` in the file `fizz-buzz.js` with a method called `evaluate` which accepts a number
1. Create tests in the provided `test/fizz-buzz.test.js` file testing the `FizzBuzz`s `evaluate(number)` method. Write tests for the following scenarios and implement `FizzBuzz` accordingly:
  1. In case number is divisible by 3, the String "Fizz" should be returned.
  1. In case the number is divisible by 5, the String "Buzz" should be returned.
  1. For numbers that are divisible by 3 and 5, the String "FizzBuzz" should be returned.
  1. All other numbers should be printed as Strings ("1", "2", etc.).
  1. If the previous result was the same as the current one, append "Bingo" to the output (e.g. fizzBuzz(3)->Fizz , fizzBuzz(9)->FizzBingo)
#1. Run the tests to verify your 

### Commit and Push to personal Branch
Commit your changes and push them to a remote branch on this repository that matches your D/I/C-Number ( e.g. D055151 or I234212)

### Check Results
1. After pushing to this repository as per the previous step, check https://github.tools.sap/cloud-curriculum/gh-actions-test-mdv/actions for a pipeline run with your UserId
1. If the pipeline is successful (green) you passed, if it is red there were still some issues you need to fix.