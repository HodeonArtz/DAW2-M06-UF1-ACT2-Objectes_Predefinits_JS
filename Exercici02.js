"use strict";
const infoCells = document.querySelectorAll(
  "#taula_propietats tr > td:nth-child(even)"
);
const elMaxValueJS = infoCells[0],
  elTotalScreenHeight = infoCells[1],
  elTotalInnerHeight = infoCells[2],
  elURL = infoCells[3];
elMaxValueJS.textContent = Number.MAX_VALUE;
elTotalScreenHeight.textContent = screen.height;
elTotalInnerHeight.textContent = window.innerHeight;
elURL.textContent = window.location.href;

// <<===========||===========||===========||===========>>

const btnStartCD = document.querySelector(".btn-start-countdown"),
  btnStopCD = document.querySelector(".btn-stop-countdown"),
  btnPauseCD = document.querySelector(".btn-pause-countdown"),
  inputMinutes = document.querySelector("input.input-minutos"),
  inputSeconds = document.querySelector("input.input-segundos");

const outputDisplay = document.querySelector(".output-display"),
  outputMinutes = outputDisplay.querySelector(".minutes-output"),
  outputSeconds = outputDisplay.querySelector(".seconds-output");

let intervalCD;
let countdownTime = 0;

btnStartCD.addEventListener("click", (event) => {
  countdownTime = +inputMinutes.value * 60 + +inputSeconds.value;
  if (intervalCD) clearInterval(intervalCD);
  /**
   * Permite restar la cuentra atras 1 segundo y actualizar el texto de salida
   * @returns void
   */
  function updateCountdown() {
    if (countdownTime === 0) {
      clearInterval(intervalCD);
      return;
    }
    countdownTime--;
    outputMinutes.textContent = (countdownTime / 60).toFixed(0).padStart(2, 0);
    outputSeconds.textContent = (((countdownTime / 60) % 1) * 60)
      .toFixed(0)
      .padStart(2, 0);
  }
  updateCountdown();
  intervalCD = setInterval(updateCountdown, 1000);
});
btnStopCD.addEventListener("click", (event) => {
  if (intervalCD) clearInterval(intervalCD);
  outputMinutes.textContent = outputSeconds.textContent = "00";
  inputMinutes.value = inputSeconds.value = 0;
});
