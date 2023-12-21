import readlineSync from 'readline-sync';

console.log ('Добро пожаловать в игру "Камень, ножницы, бумага"!')


function randomComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'Камень';
  } else if (randomNumber === 1) {
    return 'Ножницы';
  } else {
    return 'Бумага';
  }
}

function getRoundWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Ничья';
  } else if (
    (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
    (userChoice === 'Ножницы' && computerChoice === 'Бумага') ||
    (userChoice === 'Бумага' && computerChoice === 'Камень')
  ) {
    return 'Вы победили';
  } else {
    return 'Вы проиграли';
  }
}

function playGame() {
  
  let playAgain = true;
  while (playAgain) {
    console.log('\nВыберите вашу фигуру:\n1. Камень\n2. Ножницы\n3. Бумага\n');
    const userChoiceIndex = readlineSync.keyIn('Ваш выбор: ', { limit: '$<0-2>' });
    const choices = ['Камень', 'Ножницы', 'Бумага'];
    const userChoice = choices[userChoiceIndex];

    console.log(`Вы выбрали: ${userChoice}`);

    const computerChoice = randomComputerChoice();
    console.log(`Компьютер выбирает: ${computerChoice}`);

    const roundWinner = getRoundWinner(userChoice, computerChoice);
    console.log(`Результат: ${roundWinner}!`);
    
    const answer = readlineSync.keyIn('Хотите сыграть еще раз? (да(y)/нет(n)): ');
     if (answer === 'y') {
        playGame()
     } else (answer === 'n') 
        return console.log('Спасибо за игру! До скорого!');
  }
}
playGame();