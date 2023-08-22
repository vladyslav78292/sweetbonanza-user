'use strict';

const game_open = document.querySelector('.play_button');
const game = document.querySelector('.game_container');
const body = document.querySelector('.body');
const close = document.querySelector('.button_close');

game_open.addEventListener('click', () => {
  game.classList.add('game_open');
  body.classList.add('hidden');
});

close.addEventListener('click', () => {
  game.classList.remove('game_open');
  body.classList.remove('hidden');
});