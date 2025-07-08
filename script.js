console.log("script.js cargado correctamente");

let timer; 
let timeLeft = 0; 
let isPaused = false; 

const btn25 = document.getElementById('btn25');
const btn50 = document.getElementById('btn50');
const input = document.getElementById('timeInput');
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const alarmSound = document.getElementById('alarmSound');
const startSound = document.getElementById('startSound');
const startSound2 = document.getElementById('startSound2');


function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  display.textContent = 
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timer) clearInterval(timer);

  if (!isPaused) {
    const minutes = parseInt(input.value);
    if (isNaN(minutes) || minutes <= 0) {
      alert('Ingresá minutos válidos');
      return;
    }
    timeLeft = minutes * 60;
  }

  isPaused = false;

if (startSound && startSound2) {
  if (timeLeft <= 25 * 60) {
    startSound2.currentTime = 0;
    startSound2.play();
  } else {
    startSound.currentTime = 0;
    startSound.play();
  }
}
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      display.textContent = "Time!";
      alarmSound.play();
    } else {
      timeLeft--;
      updateDisplay();
    }
  }, 1000);

  updateDisplay();
}

function pauseTimer() {
  clearInterval(timer);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  isPaused = false;
  timeLeft = 0;
  display.textContent = "00:00";
  input.value = '';
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

btn25.addEventListener('click', () => {
  input.value = 25;
  updateDisplayFromInput();
});

btn50.addEventListener('click', () => {
  input.value = 50;
  updateDisplayFromInput();
});

function updateDisplayFromInput() {
  const minutes = parseInt(input.value);
  if (!isNaN(minutes) && minutes > 0) {
    timeLeft = minutes * 60;
    updateDisplay();
  }
}