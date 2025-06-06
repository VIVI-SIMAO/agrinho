const questions = [
    { question: "O Brasil é o maior produtor de café do mundo?", answer: true },
    { question: "A Torre Eiffel fica em Londres?", answer: false },
    { question: "A água ferve a 100 graus Celsius ao nível do mar?", answer: true },
    { question: "Um dia tem 24 horas?", answer: true },
    { question: "O elefante é o maior mamífero terrestre?", answer: false }, // É o maior animal terrestre, mas não mamífero terrestre (a baleia azul é maior)
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

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
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
    }
    currentQuestionIndex++;
    showQuestion();
}

function endGame() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

yesButton.addEventListener('click', () => checkAnswer(true));
noButton.addEventListener('click', () => checkAnswer(false));
restartButton.addEventListener('click', startGame);

// Inicia o jogo quando a página carrega
startGame();
