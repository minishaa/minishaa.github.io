const terminalBF = document.getElementById("terminal-BF");
const headerBF = document.getElementById("terminal-header-BF");
const closeBtnBF = document.getElementById("close-btn-BF");


const openButtons3 = document.querySelectorAll(".open-btn-BF");

openButtons3.forEach(btn => {
    btn.addEventListener("click", () => {
        terminalBF.style.display = "block";
    });
});


const terminalBodyBF = document.querySelector(".terminal-body-BF");

let isDraggingBF = false;
let offsetXBF, offsetYBF;

// Gestion des événements liés au terminal
function initializeTerminalEventsBF() {
    // Drag & drop pour déplacer la fenêtre
    headerBF.addEventListener("mousedown", (e) => {
        isDraggingBF = true;
        offsetXBF = e.clientX - terminalBF.offsetLeft;
        offsetYBF = e.clientY - terminalBF.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDraggingBF) {
            terminalBF.style.left = `${e.clientX - offsetXBF}px`;
            terminalBF.style.top = `${e.clientY - offsetYBF}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDraggingBF = false;
    });

    closeBtnBF.addEventListener("click", () => {
        terminalBF.style.display = "none";
    });
}

initializeTerminalEventsBF() 