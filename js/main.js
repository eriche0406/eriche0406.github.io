function toggleCard(event, card) {
  if (event.target.closest("a, button")) return;

  const details = card.querySelector(".collapse-section");
  if (!details) return;

  const isOpen = details.classList.contains("open");
  details.classList.toggle("open", !isOpen);
  card.classList.toggle("is-open", !isOpen);
  card.setAttribute("aria-expanded", String(!isOpen));
  details.style.maxHeight = isOpen ? null : `${details.scrollHeight}px`;
}

document.querySelectorAll(".project-card").forEach((card) => {
  const details = card.querySelector(".collapse-section");
  if (!details) return;

  card.classList.toggle("is-open", details.classList.contains("open"));
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-expanded", String(details.classList.contains("open")));
  details.style.maxHeight = details.classList.contains("open") ? `${details.scrollHeight}px` : null;

  card.addEventListener("keydown", (event) => {
    if (event.target.closest("a, button")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleCard(event, card);
  });
});

window.addEventListener("resize", () => {
  document.querySelectorAll(".project-card .collapse-section.open").forEach((details) => {
    details.style.maxHeight = `${details.scrollHeight}px`;
  });
});
