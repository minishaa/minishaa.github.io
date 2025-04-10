document.getElementById("brute-force-btn").addEventListener("click", bruteForce);

document.getElementById("brute-force-btn").onclick = function() {
    this.style.display = "none";
    
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function bruteForce() {
    const possibilities = [
      [1, 2, 3], 
      [1, 2, 3], 
      [1, 2, 3], 
    ];
  
    const logEl = document.getElementById("brute-force-log");
    logEl.innerText = "> 🧠 Brute force en cours...\n";
    let found = false;
  
    for (let r1 of possibilities[0]) {
      for (let r2 of possibilities[1]) {
        for (let r3 of possibilities[2]) {
          if (found) return;
  
          const combo = `A1_${r1}A2_${r2}A3_${r3}`;
          const url = `${combo}.html`;
  
          logEl.innerText += `> ⏳ Test de ${url}...\n`;
          logEl.scrollTop = logEl.scrollHeight;
          await sleep(100); 
  
          try {
            const res = await fetch(url);
            if (res.ok) {
              found = true;
              responses = combo;
              logEl.innerText += `> ✅ Trouvé : ${url}\n`;
              logEl.scrollTop = logEl.scrollHeight;
              await sleep(500); 
              checkNextPage();
              return;
            }
          } catch (err) {
            logEl.innerText += `❌ Erreur lors de la requête : ${url}\n`;
            logEl.scrollTop = logEl.scrollHeight;
          }
        }
      }
    }
  }