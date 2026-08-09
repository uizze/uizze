const status = document.querySelector("#decision-status");
document.querySelectorAll("[data-decision]").forEach((button) => {
  button.addEventListener("click", () => {
    status.textContent = `${button.dataset.decision} selected`;
  });
});
