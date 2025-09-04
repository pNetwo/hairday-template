import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

// Gera evento de click para cada lista.
periods.forEach((period) => {
  // Captura o evento de clique da lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento"
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
