const wrapper = document.querySelector('.guessBoxWrapper');
const counter = document.querySelector('#count');
const timer = document.querySelector('#time');
const timerSeconds = document.querySelector('.timerSeconds');

let progress = 0;
let seconds = 59;

for (let i=0; i<100; i++) {
  const div = document.createElement('div');
  div.classList.add('box');
  wrapper.insertAdjacentElement('afterbegin', div);
}

function generateRandomNum() {
  return Math.floor(Math.random() * 100);
}

function selectRandomBoxes(i) {
  setTimeout(() => {
    while(i) {
      wrapper.children[generateRandomNum()].dataset.selected = true;   
      i--;
    }      
      wrapper.addEventListener('click', (e) => {
        console.log(e.target.dataset.selected);
        if (e.target.dataset.selected == 'true') {
          e.target.style.backgroundColor = 'green';
          progress++;
          counter.innerHTML = progress;
        }
    })   
  }, 500);
}
selectRandomBoxes(10);

function countTimer() {
  const countTimerInterval = setInterval(() => {
    timerSeconds.innerHTML = seconds;
    seconds > 0 ? seconds-- : clearInterval(countTimerInterval);
  }, 1000);
}

countTimer();