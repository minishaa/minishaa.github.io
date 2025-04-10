const questionnaire = [
    {
      qlabel: "Combien de chevaux possède la R1M ?",
      qid: 1,
      reponses: [
        { rlabel: "180cv", rid: 1 },
        { rlabel: "200cv", rid: 2 },
        { rlabel: "220cv", rid: 3 },
      ],
      correct: 2,
    },
    {
      qlabel: "Combien de cylindres possède la R1M ?",
      qid: 2,
      reponses: [
        { rlabel: "2", rid: 1 },
        { rlabel: "3", rid: 2 },
        { rlabel: "4", rid: 3 },
      ],
      correct: 3,
    },
    {
      qlabel: "Combien de cm³ possède la R1M ?",
      qid: 3,
      reponses: [
        { rlabel: "998cc", rid: 1 },
        { rlabel: "1040cc", rid: 2 },
        { rlabel: "850cc", rid: 3 },
      ],
      correct: 1,
    },
  ];
  
  
  let currentIndex = 0;
  let responses = "";
  const container = document.getElementById("question-container");
  
  function renderQuestion(index) {
    const q = questionnaire[index];
    container.innerHTML = `
      <h2 class="text-xl font-bold">${q.qlabel}</h2>
      <div class="flex flex-col gap-4 mt-4 px-4">
        ${q.reponses
          .map(
            (rep) => `
            <button class="btn btn-outline-primary" onclick="handleResponse(${q.qid}, ${rep.rid})">
              ${rep.rlabel}
            </button>
          `
          )
          .join("")}
      </div>
    `;
  }
  
  function handleResponse(qid, rid) {
    responses += `A${qid}_${rid}`;
    currentIndex++;
    if (currentIndex < questionnaire.length) {
      renderQuestion(currentIndex);
    } else {
      checkNextPage();
    }
  }
  
  renderQuestion(currentIndex);
  
  function checkNextPage() {
    const nextPage = `${responses}.html`;
    fetch(nextPage)
      .then((res) => {
        if (res.ok) {
          container.innerHTML = `
            <p>Bravo, vous pouvez nous contacter via ce lien :</p>
            <input type="button" onclick="location.href='A1_2A2_3A3_1.html';" value="Contact" />
          `;
        } else {
          container.innerHTML = `
            <h2 class="text-center text-danger">Vous avez mal répondu au questionnaire, réessayez !</h2>
            <button class="btn btn-primary" onclick="retryQuiz()">Recommencer</button>
          `;
        }
      })
      .catch(() => {
        container.innerHTML = `
          <h2 class="text-center text-danger">Vous avez mal répondu au questionnaire, réessayez !</h2>
          <button class="btn btn-primary" onclick="retryQuiz()">Recommencer</button>
        `;
      });
  }
  
  function retryQuiz() {
    currentIndex = 0;
    responses = "";
    renderQuestion(currentIndex);
  }