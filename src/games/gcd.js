import {
  showGreetingAndGetName, getRandomNumber, runStep, showCongratulation,
} from '../index.js';

const getGcd = (number1, number2) => {
  const difference = number1 - number2;

  if (number1 === 0 || number2 === 0) {
    return Math.abs(difference);
  }
  if (difference === 0) {
    return Math.abs(number1);
  }

  let result = Math.min(Math.abs(number1), Math.abs(number2));

  while (result > 0) {
    if (number1 % result === 0 && number2 % result === 0) {
      return result;
    }
    result -= 1;
  }

  return NaN;
};

export default () => {
  const userName = showGreetingAndGetName();

  console.log('Find the greatest common divisor of given numbers.');

  for (let countCorrectAnswers = 0; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const number1 = getRandomNumber(-50, 50);
    const number2 = getRandomNumber(-50, 50);

    const question = `${number1} ${number2}`;
    const correctAnswer = getGcd(number1, number2);

    const result = runStep(question, correctAnswer, userName);

    if (!result) {
      return;
    }
  }

  showCongratulation(userName);
};
