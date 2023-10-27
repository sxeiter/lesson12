'use strict';

(() => {
  const figures = ['камень', 'ножницы', 'бумага'];
  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const userAnswer =
      prompt('Выберите: камень, ножницы или бумага');
      const pcAnswer = getRandomIntInclusive(0, 2)

      console.log(`Ответ игрока ${userAnswer}`);
      console.log(`Ответ компа ${pcAnswer}`);

      if (userAnswer === null) {
        const exitGame = confirm('Вы хотите выйти?');
        if (exitGame) {
          alert(`Результат игры: Пользователь - ${result.player} очков,
           Компьютер - ${result.computer} очков`);
          return;
        }
      }

      const checkUserAnswer = figures.indexOf(figures.find(elem =>
        elem.startsWith(userAnswer.toLowerCase())));
        console.log(checkUserAnswer);

        if (pcAnswer === checkUserAnswer) {
            alert('Ничья!')
        } else if (
            (pcAnswer ===  0 && checkUserAnswer === 2) ||
            (pcAnswer ===  1 && checkUserAnswer === 0) ||
            (pcAnswer ===  2 && checkUserAnswer === 1)
        ) {
            result.player++;
            alert('Вы победили!');
        } else if (
            (pcAnswer === 0 && checkUserAnswer === 1) ||
            (pcAnswer === 1 && checkUserAnswer === 2) ||
            (pcAnswer === 2 && checkUserAnswer === 0)
        ) {
            result.computer++;
            alert('Вы проиграли!')
        }

      
        return start();
    };
  };

  window.RPS = game;
})();
