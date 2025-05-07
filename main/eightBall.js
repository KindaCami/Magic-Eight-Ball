let userName = '';
let defaultName = userName || 'stranger'
console.log(`Hello ${defaultName}!`);

let userQuestion = '';
let defaultQuestion = userQuestion || 'That which you do not dare to ask, the answer is: ';
console.log(defaultQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0: eightBall = 'Outlook not good';
  break;
  case 1: eightBall = 'Signs point to yes';
  break;
  case 2: eightBall = 'It is decidedly so';
  break;
  case 3: eightBall = 'Reply hazy try again';
  break;
  case 4: eightBall = 'Cannot predict now';
  break;
  case 5: eightBall = 'Do not count on it';
  break;
  case 6: eightBall = 'My sources say no';
  break;
  case 7: eightBall = 'It is certain';
  break;
  default : eightBall = 'Reply hazy try again';
  break;
}
console.log(eightBall);

// The next code is a refactor of the previous switch statement with an array
const eightBallAnswers = [
    'Outlook not good', 
    'Signs point to yes',   
    'It is decidedly so',  
    'Reply hazy try again', 
    'Cannot predict now',   
    'Do not count on it',  
    'My sources say no',    
    'It is certain'        
  ];
  
  // Generates a random number based on the number of available answers
  let randomNumberForArray = Math.floor(Math.random() * eightBallAnswers.length);
  let eightBallResponseFromArray = eightBallAnswers[randomNumberForArray]; /* Here we can use the variable randomNumber instead of randomNumberForArray to 
  get the same result than the switch statement, but it is better to use the variable randomNumberForArray because it is another program */
   
  console.log(eightBallResponseFromArray);