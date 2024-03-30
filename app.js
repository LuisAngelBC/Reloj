let showDate = document.getElementById("fecha");
let showHour = document.getElementById("reloj");

let date = new Date();

const week = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

showDate.innerHTML = `${week[date.getDay()]}, ${date.getDate()} de ${
  month[date.getMonth()]
} de ${date.getFullYear()}`;

setInterval(() => {
  let hour = new Date();
  let auxHour = {
    hours: hour.getHours(),
    minutes: hour.getMinutes(),
    seconds: hour.getSeconds(),
  };
  if (auxHour.hours > 12) {
    auxHour.hours = "0" + (auxHour.hours - 12);
  }
  if (auxHour.minutes < 10) {
    auxHour.minutes = "0" + auxHour.minutes;
  }
  if (auxHour.seconds < 10) {
    auxHour.seconds = "0" + auxHour.seconds;
  }
  showHour.innerHTML = `${auxHour.hours}:${auxHour.minutes}:${auxHour.seconds}`;
}, 1000);
