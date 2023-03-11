import {
  showGreetingAndGetName, getRandomNumber, runStep, showCongratulation,
} from '../index.js';

const getRandomOperator = (operators = ['+', '-', '*']) => operators[Math.round(Math.random() * (operators.length - 1))];

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
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const operator = getRandomOperator();

    const question = `${operand1} ${operator} ${operand2}`;
    const correctAnswer = getCorrectAnswer(operand1, operand2, operator);

    const result = runStep(question, correctAnswer, userName);

    if (!result) {
      return;
    }
  }

  showCongratulation(userName);
};
