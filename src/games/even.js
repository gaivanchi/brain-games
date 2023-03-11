import {
  showGreetingAndGetName, getRandomNumber, runStep, showCongratulation,
} from '../index.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const userName = showGreetingAndGetName();

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let countCorrectAnswers = 0; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    const result = runStep(question, correctAnswer, userName);

    if (!result) {
      return;
    }
  }

  showCongratulation(userName);
};
