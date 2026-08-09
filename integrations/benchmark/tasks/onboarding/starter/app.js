const nameInput = document.querySelector("#workspace-name");
const preview = document.querySelector("#url-preview");

nameInput.addEventListener("input", () => {
  const slug = nameInput.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  preview.textContent = `relay.app/${slug || "workspace"}`;
});
