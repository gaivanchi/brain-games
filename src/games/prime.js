import {
  showGreetingAndGetName, getRandomNumber, runStep, showCongratulation,
} from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divisor = 2;

  while (divisor <= number / 2) {
    if (number % divisor === 0) {
      return false;
    }
    divisor += 1;
  }

  return true;
};

export default () => {
  const userName = showGreetingAndGetName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let countCorrectAnswers = 0; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const question = getRandomNumber(-5, 50);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    const result = runStep(question, correctAnswer, userName);

    if (!result) {
      return;
    }
  }

  showCongratulation(userName);
};
