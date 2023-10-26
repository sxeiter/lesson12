'use strict';

(function() {
  const figures = ['камень', 'ножницы', 'бумага'];
  let userScore = 0;
  let computerScore = 0;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function game() {
    const userChoice = prompt('Выберите: камень, ножницы или бумага');
    const computerChoice = figures[getRandomIntInclusive(0, 2)];
    

    if (userChoice === null) {
      const confirmExit = confirm('Вы уверены, что хотите выйти?');
      if (confirmExit) {
        console.log(`Результат игры: Пользователь - ${userScore} очков, Компьютер - ${computerScore} очков`);
        return;
      }
    }

    if (!figures.includes(userChoice)) {
      console.log("Неверный выбор. Попробуйте снова.");
      game();
      return;
    }
  
    console.log(`Вы выбрали: ${userChoice}`);
    console.log(`Компьютер выбрал: ${computerChoice}`);

    if (userChoice === computerChoice) {
      alert('Ничья!');
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      alert('Вы победили!');
      userScore++;
    } else {
      alert('Вы проиграли!');
      computerScore++;
    }

    game();
  }

  game();
})();
