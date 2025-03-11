const $ = el => document.querySelector(el);

const $container = $('.container');

function generateBricks() {
  Array.from({ length: 500 }).forEach(() => {
    const $brick = document.createElement('aside');
    $brick.classList.add('brick');
    $container.appendChild($brick);
  })
} 

document.addEventListener('DOMContentLoaded', generateBricks);