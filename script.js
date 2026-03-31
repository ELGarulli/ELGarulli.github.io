const panel = document.getElementById("panel-content");
const buttons = document.querySelectorAll(".nav-item");

async function loadSection(name) {
  const response = await fetch(`sections/${name}.html`);
  const html = await response.text();
  panel.innerHTML = html;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    loadSection(button.dataset.section);
  });
});

loadSection("about");