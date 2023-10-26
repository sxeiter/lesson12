'use strict';

(function() {
  const figures = ['камень', 'ножницы', 'бумага'];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function game() {
    const check = {
      player: 0,
      computer: 0,
    };

    return function gameStart() {
      const pcAnswer = figures[getRandomIntInclusive(0, 2)];
      console.log(`Компьютер выбрал: ${pcAnswer}`);
      const userAnswer = prompt(`${figures.join(', ')}. Введите вариант ответа`);
      console.log(`Игрок выбрал ${userAnswer}`);

      if (userAnswer === null) {
        const confirmExit = confirm('Вы уверены, что хотите выйти?');
        if (confirmExit) {
          alert(`Результат игры: Пользователь - ${check.player} очков, Компьютер - ${check.computer} очков`);
          return;
        }
      }

      const checkUserAnswer = figures.indexOf(figures.find(elem => elem.startsWith(userAnswer.toLocaleLowerCase())));
      console.log(checkUserAnswer);

      if (pcAnswer === checkUserAnswer) {
        alert('Ничья');
      } else if 
      (!figures.includes(checkUserAnswer)) {
        alert('Неверный ввод, попробуйстек снова!!!');
        gameStart();
        return;
      } else if
      ((pcAnswer === figures[0] && checkUserAnswer === figures[2]) ||
      (pcAnswer === figures[1] && checkUserAnswer === figures[0]) ||
      (pcAnswer === figures[2] && checkUserAnswer === figures[1])) {
        check.player++;
        alert('Вы победили!');
      } else {
        check.computer++;
        alert('Вы проиграли');
      };
       
      return gameStart();
    };
  }

  window.RPS = game;
})();
