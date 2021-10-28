# Cloud Development Fundamentals Prerequiste Test for Node.js

## What do I need to do here?

For this prerequiste test you have to implement **two** small games:

- [Fizz Buzz Bingo](#2-implement-the-fizz-buzz-bingo)

- [Animal Race](#3-implement-the-animal-race)

To do so please follow the detailed steps below.

### 1. Clone Repository & Import

1. Clone this repository to your local machine

1. Import this project into your IDE

    - We recommend [Visual Studio Code](https://code.visualstudio.com/) with [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions.

    - But feel free to use the IDE of your choice.

1. Install the development dependencies

    - Please make sure to use the **latest LTS version 16** of [Node.js](https://nodejs.org/en/).

***Do not rename or move the files in this project***

### 2. Implement the Fizz Buzz Bingo

1. Create and export a class called `FizzBuzz` in the file `lib/fizz-buzz.js` which provides a single public method `evaluate`.

1. The `evaluate` method must accept a single argument of type `number`.

1. The `evaluate` method must behave as follows:

    - In case number is divisible by 3, the string `"Fizz"` should be returned.

    - In case the number is divisible by 5, the string `"Buzz"` should be returned.

    - For numbers that are divisible by 3 and 5, the string `"FizzBuzz"` should be returned.

    - All other numbers should be printed as strings (`"1"`, `"2"`, etc.).

    - If the previous result was the same as the current one, append "`Bingo"` to the result.

    ```javascript
    fizzBuzz.evaluate(3) // -> "Fizz"
    fizzBuzz.evaluate(9) // -> "FizzBingo"
    ```

1. Create sufficient tests cases for all of above scenarios in the provided `test/fizz-buzz.test.js` file using the **[mocha](https://mochajs.org)** test framework and the **[assert](https://nodejs.org/dist/latest-v16.x/docs/api/assert.html#assert)** module.

1. Run the tests to verify your implementation: `npm run test:fizz-buzz`

### 3. Implement the Animal Race
1. Create and export a single function in file `lib/animal-race.js`.

    - the function must accept a single argument `animals`, which is the object exported from file `api/animals.js`

    - use the methods provided from `api/animals.js` to implement your race, e.g. call `animals.rabbit()` to retrieve `'🐇'`.

    - the function must return a **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** which resolves with an array of strings which represents the final placement of the animals competing in the race, e.g. `['🐇', '🐢', '🐌']`

    - The expected outcome of the race is:

      - the `snail` (`'🐌'`) must finish **1st** place

      - the `rabbit` (`'🐇'`) must finish **2nd** place

      - the `turtle` (`'🐢'`) must finish **3rd** place

    - Additionally the race **must not take longer than 3000 milliseconds** (plus a few millisenconds computing overhead).

      **Hint**: *all* animals should run *concurrently*.

1. Run the tests to verify your implementation: `npm run test:animal-race`

### 4. Commit and Push to personal Branch

1. Run **all** the tests to verify your implementations: `npm run test`

1. Commit your changes and push them to a remote branch on **this** repository that matches your D/I/C-Number (e.g. D055151 or I234212) (Note: The branch will be automatically *deleted* afterwards)

### 5. Check Results

1. After pushing to this repository as per the previous step, check https://github.tools.sap/cloud-curriculum/fun-prerequisite-test-nodejs/actions for a pipeline run with your D/I/C-Number.

1. If the pipeline is successful (green) you passed, if it is red there were still some issues you need to fix.
(repeat [4. Commit and Push to personal Branch](#4-commit-and-push-to-personal-branch) and check again)

:octocat: **Happy Coding** :octocat:
