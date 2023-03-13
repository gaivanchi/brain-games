import readlineSync from 'readline-sync';

export const showGreetingAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomItem = (coll) => coll[Math.floor(Math.random() * coll.length)];

export const getRandomIndex = (coll) => Math.floor(Math.random() * coll.length);

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
