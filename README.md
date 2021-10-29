# Cloud Development Fundamentals Prerequiste Test for Node.js

_Disclaimer: We are [counting page hits](https://github.wdf.sap.corp/cloud-native-dev/usage-tracker) using a cookie to distinguish returning & new visitors._
<img src="https://cloud-native-dev-usage-tracker.cfapps.sap.hana.ondemand.com/pagehit/cc-cloud-dev-fundamentals/prerequisite-test-nodejs/1x1.png" alt="" height="1" width="1">

## 🎯 Why?
Cloud Development Fundamentals (Node.js) is a training for Development roles which have good knowledge in Node.js and its ecosystem.
This little test, that should not take much time for a skilled programmer, gives you a first feedback if you have the required knowledge and skills to attend the training.


## 🤔 What if I don't know what to do or can't solve it?
If you don't have all the skills yet don't worry, [you can learn them](https://github.tools.sap/cloud-curriculum/fun-prerequisite-test-nodejs/blob/main/SkillsAndResources.md#learning-resources). Have a look at the [prerequisites list](https://github.tools.sap/cloud-curriculum/fun-prerequisite-test-nodejs/blob/main/SkillsAndResources.md#required-skillsknowledge) and [learn the knowledge and skills you are still missing](https://github.tools.sap/cloud-curriculum/fun-prerequisite-test-nodejs/blob/main/SkillsAndResources.md#learning-resources).

## 🛠️ Technical Prerequisites
For this exercise you will require the following tools:

- IDE, we recommend [Visual Studio Code](https://code.visualstudio.com/) with [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions.
- [Node.js](https://nodejs.org/en/) Please make sure to use the **latest LTS version 16**
- [Git client](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## 📗 Exercise/Test

### What do I need to do here?

For this prerequiste test you have to implement **two** small games:

- [Fizz Buzz Bingo](#2-implement-the-fizz-buzz-bingo)
- [Animal Race](#3-implement-the-animal-race)

To do so please follow the detailed steps below.

### 1. Clone Repository & Import

1. Clone this repository to your local machine
1. Open it in your preferred IDE
1. Install the development dependencies

:warning: ***Do not rename or move the files in this project*** :warning:

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

1. Run the tests :test_tube: to verify your implementation: `npm run test:fizz-buzz`

### 3. Implement the Animal Race
1. Create and export a single function in file `lib/animal-race.js`.

    - the function must accept a single argument `animals`, which is the object exported from file `api/animals.js`

    - use the methods provided from `api/animals.js` to implement your race, e.g. calling `animals.rabbit()` will return a **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** which resolves with a string `'🐇'` after 1000 milliseconds (this is the time it takes for the `rabbit` to complete the race)

    - your function must return a **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** which resolves with an array of strings which represents the final placement of the animals competing in the race, e.g. `['🐇', '🐢', '🐌']`

    - However, the race is **staged** and the expected outcome of the race is:

      - the `snail` (`'🐌'`) must finish **1st** place

      - the `rabbit` (`'🐇'`) must finish **2nd** place

      - the `turtle` (`'🐢'`) must finish **3rd** place

    - Additionally the race **must not take longer than 3000 milliseconds** (plus a few millisenconds computing overhead).

      **Hint**: *all* animals should run *concurrently*.

1. Run the tests :test_tube: to verify your implementation: `npm run test:animal-race`

### 4. Commit and Push to personal Branch

1. Run **all** the tests :test_tube: to verify your implementations: `npm run test`

1. Commit your changes and push them to a remote branch on **this** repository that matches your D/I/C-Number (e.g. D055151 or I234212) (Note: The branch will be automatically *deleted* afterwards)

### 5. Check Results
After pushing to this repository as per the previous step, a build will be triggered that takes ~2 minutes to finish.
In case of errors you will be. notified via email. Don't worry: You have as many attempts as you need!
<details><summary>What exactly does the build do?</summary>

The build will:
- Run your tests
- Add and run smoke tests that we provide, to make sure the implementation is correct ;-)
- Delete your remote branch (the branch you pushed to this repo) no matter if the solution is correct or not</details>

</details>

1. Check the [outcome of the build here](https://github.tools.sap/cloud-curriculum/fun-prerequisite-test-nodejs/actions). There should be a pipeline run with your UserId (since it is the branch name) and your commit message.
1. If the pipeline is successful :white_check_mark: you passed, if it fails :x: there are still some issues you need to fix - in this case check the pipeline logs for the reason.
(after fixing repeat [4. Commit and Push to Personal Branch](#4-commit-and-push-to-personal-branch) and check again)

## 📣 Questions/Feedback
We value your feedback and your questions, and please use [the slack channel #fundamentals-prerequisite-test](https://sap-cloud-enablement.slack.com/archives/C02KFC2UAFN) to let us know!

:octocat: **Happy Coding** :octocat:
