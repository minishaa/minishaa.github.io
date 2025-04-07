const term = document.getElementById("terminal-graphe");
const head = document.getElementById("terminal-header-graphe");
const closeBtn1 = document.getElementById("close-btn-graphe");
const openBtn1 = document.getElementById("open-btn-graphique"); 
const termBody = document.querySelector(".terminal-body-graphe");

let isDragging1 = false;
let offsetX1, offsetY1;

// Gestion des événements liés au terminal
function initializeTermEvents() {
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

    // Boutons de fermeture et d'ouverture
    closeBtn1.addEventListener("click", () => {
        term.style.display = "none";
    });

    openBtn1.addEventListener("click", () => {
        term.style.display = "block";
    });
}

// Ajout d'un élément carré dans le terminal


// Initialisation
initializeTermEvents();

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



    const terminal = document.getElementById("terminal");
    const header = document.getElementById("terminal-header");
    const closeBtn = document.getElementById("close-btn");
    const openBtn = document.getElementById("open-btn");
    const terminalBody = document.querySelector(".terminal-body");
    
    let isDragging = false;
    let offsetX, offsetY;
    
    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - terminal.offsetLeft;
        offsetY = e.clientY - terminal.offsetTop;
    });
    
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            terminal.style.left = `${e.clientX - offsetX}px`;
            terminal.style.top = `${e.clientY - offsetY}px`;
        }
    });
    
    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
    
    closeBtn.addEventListener("click", () => {
        terminal.style.display = "none";
    });
    
    openBtn.addEventListener("click", () => {
        terminal.style.display = "block";
        inputField.focus();
    });
    
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.className = "terminal-input";
    inputField.style.width = "100%";
    inputField.style.border = "none";
    inputField.style.background = "transparent";
    inputField.style.color = "#00ff9f";
    inputField.style.fontSize = "14px";
    inputField.style.outline = "none";
    terminalBody.appendChild(inputField);
    inputField.focus();
    
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = inputField.value.trim();
            if (command) {
                processCommand(command);
                inputField.value = "";
            }
        }
    }); 
    
    function processCommand(command) {
        const output = document.createElement("div");
        output.textContent = `> ${command}`;
        terminalBody.appendChild(output);
    
        if (/^[\d\s+\-*/()]+$/.test(command)) {
            try {
                const result = eval(command);
                const resultOutput = document.createElement("div");
                resultOutput.textContent = `${result}`;
                terminalBody.appendChild(resultOutput);
            } catch (error) {
                showError("Erreur de calcul");
            }
        } else {
            showError("zsh: command not found:");
        }
    
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
    
    function showError(message) {
        const errorOutput = document.createElement("div");
        errorOutput.textContent = message;
        errorOutput.style.color = "red";
        terminalBody.appendChild(errorOutput);
    }
    