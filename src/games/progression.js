import {
  showGreetingAndGetName, getRandomNumber, getRandomIndex, runStep, showCongratulation,
} from '../index.js';

const getProgressionArr = (firstItem, length, step) => {
  const coll = [];

  for (let i = firstItem; coll.length < length; i += step) {
    coll.push(i);
  }

  return coll;
};

export default () => {
  const userName = showGreetingAndGetName();

  console.log('What number is missing in the progression?');

  for (let countCorrectAnswers = 0; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const firstItem = getRandomNumber(-50, 50);
    const progressionStep = getRandomNumber(-5, 5);
    const progressionLength = getRandomNumber(5, 10);

    const progressionArr = getProgressionArr(firstItem, progressionLength, progressionStep);
    const hiddenIndex = getRandomIndex(progressionArr);
    const correctAnswer = progressionArr[hiddenIndex];

    progressionArr[hiddenIndex] = '..';
    const question = `${progressionArr.join(' ')}`;

    const result = runStep(question, correctAnswer, userName);

    if (!result) {
      return;
    }
  }

  showCongratulation(userName);
};
