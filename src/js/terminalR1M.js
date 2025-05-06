const terminalR1M = document.getElementById("terminal-R1M");
const headerR1M = document.getElementById("terminal-header-R1M");
const closeBtnR1M = document.getElementById("close-btn-R1M");

const openButtons1 = document.querySelectorAll(".open-btn-R1M");

openButtons1.forEach(btn => {
    btn.addEventListener("click", () => {
        terminalR1M.style.display = "block";
    });
});

const terminalBodyR1M = document.querySelector(".terminal-body-R1M");

let isDraggingR1M = false;
let offsetXR1M, offsetYR1M;

// Gestion des événements liés au terminal
function initializeTerminalEventsR1M() {
    // Drag & drop pour déplacer la fenêtre
    headerR1M.addEventListener("mousedown", (e) => {
        isDraggingR1M = true;
        offsetXR1M = e.clientX - terminalR1M.offsetLeft;
        offsetYR1M = e.clientY - terminalR1M.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDraggingR1M) {
            terminalR1M.style.left = `${e.clientX - offsetXR1M}px`;
            terminalR1M.style.top = `${e.clientY - offsetYR1M}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDraggingR1M = false;
    });

    // Boutons de fermeture et d'ouverture
    closeBtnR1M.addEventListener("click", () => {
        terminalR1M.style.display = "none";
    });
}

initializeTerminalEventsR1M()