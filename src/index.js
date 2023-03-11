import readlineSync from 'readline-sync';

export const showGreetingAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNumber = () => Math.round(Math.random() * 50);

export const runStep = (question, correctAnswer, userName) => {
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  const isCorrect = (answer === String(correctAnswer));

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  }

  return isCorrect;
};

export const showCongratulation = (userName) => console.log(`Congratulations, ${userName}!`);
