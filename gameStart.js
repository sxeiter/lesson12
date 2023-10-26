'use strict';

(() => {
    const figures = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const game = () => {
        const result = {
            player: 0,
            computer: 0,
        };

        const userAnswer = prompt('Выберите: камень, ножницы или бумага');
        const pcAnswer = figures[getRandomIntInclusive(0, 2)];
        const checkUserAnswer = userAnswer.startsWith();

        if (userAnswer === null) {
            const gameOver = confirm('Вы уверены, что хотите выйти?');
            if (gameOver) {
                console.log(`Результат игры: Пользователь - ${player} очков, Компьютер - ${computer} очков`);
        return;
            };
        };

        if (!figures.includes(checkUserAnswer)) {
            console.log("Неверный выбор. Попробуйте снова.");
            game();
            return;
        };
        console.log(`Вы выбрали: ${userAnswer}`);
        console.log(`Компьютер выбрал: ${pcAnswer}`);

        if (userAnswer === pcAnswer) {
            alert('Ничья');
        };

        return function start() {

        };
    };

    window.RPS = game;
})();
