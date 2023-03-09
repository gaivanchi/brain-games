import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let countCorrectAnswers = 0;

  while (countCorrectAnswers < 3) {
    const randomInt = Math.round(Math.random() * 100);
    console.log(`Question: ${randomInt}`);

    const correct = isEven(randomInt) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if (answer === correct) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
