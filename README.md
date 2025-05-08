# Interactive Magic 8-Ball in JavaScript

This JavaScript script simulates a Magic 8-Ball. It provides a greeting, handles a user's question (or a default text), and then offers a random 8-Ball answer.

## Features

* **Personalized Greeting:** Greets the user, using "stranger" as a default name if one is not provided.
* **Question Input:** Displays the user's question. If no question is entered, it shows an introductory message.
* **Magic 8-Ball Response:** Randomly generates one of several classic 8-Ball answers.
* **Two Implementations:** Demonstrates two ways to generate the 8-Ball answer:
    1.  Using a `switch` statement.
    2.  Using an array of responses (refactored and preferred version).

## How to Use

1.  **Setup (Optional):**
    * You can modify the `userName` and `userQuestion` variables at the beginning of the script if you wish to customize the greeting or the question.
    ```javascript
    let userName = ''; // Change to your name
    let userQuestion = ''; // Write your question
    ```

2.  **Execution:**
    * Run the script in any JavaScript environment (e.g., Node.js or your web browser's developer console).
    ```bash
    # If using Node.js:
    node your_script_name.js
    ```

3.  **Output:**
    * The script will print to the console:
        1.  A greeting.
        2.  Your question (or the default message).
        3.  A random Magic 8-Ball answer.

## Magic 8-Ball Logic

The script includes two methods for determining the Magic 8-Ball's response:

1.  **`switch` Method:** An initial implementation using a `switch` statement based on a random number.
2.  **Array Method (Refactored):** An improved version that stores possible answers in an array and selects one randomly. This approach is generally cleaner, easier to maintain, and more adaptable if the number of answers changes.

```javascript
// Example of the refactored array version:
const eightBallAnswers = [
    'Outlook not good', 
    'Signs point to yes',   
    // ... more answers
];
let randomNumberForArray = Math.floor(Math.random() * eightBallAnswers.length);
let eightBallResponseFromArray = eightBallAnswers[randomNumberForArray];
console.log(eightBallResponseFromArray);
