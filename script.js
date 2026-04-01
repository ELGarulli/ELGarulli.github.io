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

const radios = document.querySelectorAll('input[name="theme"]');
const indicator = document.getElementById("indicator");

const angleByTheme = {
  "theme-cool": -60,
  "theme-boring": 0,
  "theme-party": 60,
};

function setTheme(theme) {
  document.body.className = theme;
  indicator.style.transform = `translateX(-50%) rotate(${angleByTheme[theme]}deg)`;
}

radios.forEach(radio => {
  radio.addEventListener("change", () => setTheme(radio.value));
});

setTheme(document.querySelector('input[name="theme"]:checked').value);