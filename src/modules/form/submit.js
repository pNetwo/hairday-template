import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Define a data atual do dayjs.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual.
selectedDate.value = inputToday;

// Define uma data mínima como sendo a data atual.
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  console.log("enviado");
};
