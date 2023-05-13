const btn = document.querySelector('#btn');
const input = document.querySelector('#guessInput');
const progressBar = document.querySelector('#guessProgress');
const hiddenBox = document.querySelector('#hidden');

const progressMessages = {
  more: 'Введите число побольше',
  less: 'Введите число поменьше',
  success: 'Вы угадали число!'
}

let randomNum = 0;

btn.addEventListener('click', () => {
  randomNum = Math.floor(Math.random() * 100);
  hiddenBox.classList.remove('hidden');
})

input.addEventListener('change', (e) => {
  if (e.target.value == randomNum) {
    progressBar.innerHTML = progressMessages.success;
    setInterval(() => {
      hiddenBox.classList.add('hidden');
    }, 1500);
  } else if (e.target.value < randomNum) {
    progressBar.innerHTML = progressMessages.more;
  } else {
    progressBar.innerHTML = progressMessages.less;
  }
})