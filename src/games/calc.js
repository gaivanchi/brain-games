import {
  showGreetingAndGetName, getRandomNumber, getRandomItem, runStep, showCongratulation,
} from '../index.js';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return NaN;
  }
};

export default () => {
  const userName = showGreetingAndGetName();

  console.log('What is the result of the expression?');

  for (let countCorrectAnswers = 0; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const operand1 = getRandomNumber(-50, 50);
    const operand2 = getRandomNumber(-5, 5);
    const operator = getRandomItem(operators);

    const question = `${operand1} ${operator} ${operand2}`;
    const correctAnswer = getCorrectAnswer(operand1, operand2, operator);

    const result = runStep(question, correctAnswer, userName);

    if (!result) {
      return;
    }
  }

  showCongratulation(userName);
};
