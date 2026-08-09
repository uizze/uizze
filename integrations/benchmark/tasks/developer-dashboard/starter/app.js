const status = document.querySelector("#action-status");
document.querySelector("#retry").addEventListener("click", () => {
  status.textContent = "Retry selected";
});
document.querySelector("#rollback").addEventListener("click", () => {
  status.textContent = "Rollback selected";
});
document.querySelector("#copy-error").addEventListener("click", () => {
  status.textContent = "Copy action selected";
});
