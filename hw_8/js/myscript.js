var main = document.getElementById("main");
var quizSection = document.getElementById("quiz__section");

const name = document.getElementById("name");
const surname = document.getElementById("surname");

function startQuiz() {
    main.style.display = "none";
    quizSection.style.display = "flex";
}

var quizSec = document.getElementById("quiz__section");
var quiz = document.getElementById("quiz");

var resultSec = document.getElementById("resultSec");
var resultsInner = document.getElementById("results__inner");

var answersEls = document.querySelectorAll(".answer");

var questionEl = document.getElementById("question__title");

var a__text = document.getElementById("a__text");
var b__text = document.getElementById("b__text");
var c__text = document.getElementById("c__text");
var d__text = document.getElementById("d__text");

var answerEls = document.querySelectorAll(".answer");

var submitBtn = document.getElementById("subm");

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    var currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;
}

function getSelected() {
    var answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    var answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizSec.style.display = "none";
            resultSec.style.display = "flex";
            resultsInner.innerHTML = `
                <h2 id="end">${name.value} ${surname.value},
                <br>you got ${score} points out of ${quizData.length}.</h2>
                
            `;
        }
    }
});