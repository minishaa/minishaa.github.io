const terminalquestionnaire = document.getElementById("terminal-questionnaire");
const headerquestionnaire = document.getElementById("terminal-header-questionnaire");
const closeBtnquestionnaire = document.getElementById("close-btn-questionnaire");
const openBtnquestionnaire = document.getElementById("open-btn-questionnaire"); 
const terminalBodyquestionnaire = document.querySelector(".terminal-body-questionnaire");

let isDraggingquestionnaire = false;
let offsetXquestionnaire, offsetYquestionnaire;

function initializeTerminalEventsquestionnaire() {
    headerquestionnaire.addEventListener("mousedown", (e) => {
        isDraggingquestionnaire = true;
        offsetXquestionnaire = e.clientX - terminalquestionnaire.offsetLeft;
        offsetYquestionnaire = e.clientY - terminalquestionnaire.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDraggingquestionnaire) {
            terminalquestionnaire.style.left = `${e.clientX - offsetXquestionnaire}px`;
            terminalquestionnaire.style.top = `${e.clientY - offsetYquestionnaire}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDraggingquestionnaire = false;
    });

    closeBtnquestionnaire.addEventListener("click", () => {
        terminalquestionnaire.style.display = "none";
    });

    openBtnquestionnaire.addEventListener("click", () => {
        terminalquestionnaire.style.display = "block";
    });
}

initializeTerminalEventsquestionnaire()