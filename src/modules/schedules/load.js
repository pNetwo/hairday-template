import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show";

// Seleciona o input data.
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtém a data do input.
  const date = selectedDate.value;

  // Busca na API os agendamentos.
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos.
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules });
}
