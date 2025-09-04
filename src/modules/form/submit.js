import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load";

const form = document.querySelector("form");

const clientName = document.querySelector("#client");
const selectedDate = document.getElementById("date");

// Define a data atual do dayjs.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual.
selectedDate.value = inputToday;

// Define uma data mínima como sendo a data atual.
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recuperando o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione um horário de agendamento.");
    }

    // Recuperar somente a hora.
    const [hour] = hourSelected.innerText.split(":");

    // Insere a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();

    // Faz o agendamento.
    await scheduleNew({
      id,
      name,
      when,
    });

    await schedulesDay();
    clientName.value = "";
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
