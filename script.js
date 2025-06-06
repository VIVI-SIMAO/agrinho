const questions = [
    { question: "O Brasil é o maior produtor de café do mundo?", answer: true },
    { question: "A Torre Eiffel fica em Londres?", answer: false },
    { question: "A água ferve a 100 graus Celsius ao nível do mar?", answer: true },
    { question: "Um dia tem 24 horas?", answer: true },
    { question: "O elefante é o maior mamífero terrestre?", answer: false },
    { question: "O Sol é uma estrela?", answer: true },
    { question: "O oceano Pacífico é o maior oceano da Terra?", answer: true },
    { question: "Morcegos são cegos?", answer: false },
    { question: "A capital da França é Paris?", answer: true },
    { question: "Cachorros enxergam apenas em preto e branco?", answer: false },
    { question: "A Terra é plana?", answer: false },
    { question: "O corpo humano é composto principalmente por água?", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-button');
const currentScoreDisplay = document.getElementById('current-score'); // Novo: elemento para exibir a pontuação atual

// Adiciona um elemento para exibir o feedback
const feedbackText = document.createElement('p');
feedbackText.id = 'feedback-text';
feedbackText.style.fontSize = '1.1em';
feedbackText.style.marginTop = '15px';
feedbackText.style.color = '#333';
questionContainer.insertBefore(feedbackText, yesButton.parentElement.nextSibling);


function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    currentScoreDisplay.textContent = score; // Zera a pontuação no display
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    feedbackText.textContent = '';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++;
        currentScoreDisplay.textContent = score; // Atualiza a pontuação no display
        feedbackText.textContent = "Certo, continue assim!";
        feedbackText.style.color = '#4CAF50'; // Verde para acerto
    } else {
        feedbackText.textContent = "Não é bem assim...";
        feedbackText.style.color = '#f44336'; // Vermelho para erro
    }

    setTimeout(() => {
        feedbackText.textContent = '';
        currentQuestionIndex++;
        showQuestion();
    }, 1000);
}

function endGame() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

yesButton.addEventListener('click', () => checkAnswer(true));
noButton.addEventListener('click', () => checkAnswer(false));
restartButton.addEventListener('click', startGame);

startGame();
