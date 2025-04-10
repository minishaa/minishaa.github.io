const term = document.getElementById("terminal-graphe");
const head = document.getElementById("terminal-header-graphe");
const closeBtn1 = document.getElementById("close-btn-graphe");
const openBtn1 = document.getElementById("open-btn-graphique"); 
const termBody = document.querySelector(".terminal-body-graphe");

let isDragging1 = false;
let offsetX1, offsetY1;

// Gestion des événements liés au terminal
function initializeTermEvents1() {
    // Drag & drop pour déplacer la fenêtre
    head.addEventListener("mousedown", (e) => {
        isDragging1 = true;
        offsetX1 = e.clientX - term.offsetLeft;
        offsetY1 = e.clientY - term.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging1) {
            term.style.left = `${e.clientX - offsetX1}px`;
            term.style.top = `${e.clientY - offsetY1}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging1 = false;
    });

    closeBtn1.addEventListener("click", () => {
        term.style.display = "none";
    });

    openBtn1.addEventListener("click", () => {
        term.style.display = "block";
    });
}

initializeTermEvents1();

let screenValue1 = "";


function appendValue(value) {
  screenValue1 += value;
  document.getElementById("screen").textContent = screenValue1;
}
function clearScreen() {
  screenValue1 = "";
  document.getElementById("screen").textContent = "";
}
function calculateResult() {
  try {
    screenValue1 = eval(screenValue1); // Évaluer l'expression
    document.getElementById("screen").textContent = screenValue1;
  } catch (error) {
    document.getElementById("screen").textContent = "Erreur";
  }
}



