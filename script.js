const questions = [
    { question: "A pecuária é uma das principais atividades econômicas no campo?", answer: true },
    { question: "O campo fornece apenas matérias-primas para a cidade?", answer: false }, // O campo fornece também alimentos e recursos naturais
    { question: "A baixa rentabilidade é um desafio comum para os agricultores?", answer: true },
    { question: "A modernização da agricultura sempre diminui a produtividade?", answer: false }, // Geralmente aumenta
    { question: "A globalização tem diminuído a interdependência entre campo e cidade?", answer: false }, // Aumentou
    { question: "A educação rural é importante para a formação de novos conhecimentos?", answer: true },
    { question: "Serviços especializados, como assistência técnica, são oferecidos pelo campo à cidade?", answer: false }, // São oferecidos pela cidade ao campo
    { question: "A urbanização tem contribuído para a migração da população rural para as cidades?", answer: true },
    { question: "A gestão urbana não tem preocupação com a qualidade de vida da população?", answer: false }, // Tem preocupação
    { question: "A cidade pode investir em infraestrutura para ajudar o campo?", answer: true },
    { question: "A interdependência entre campo e cidade é fundamental para a sustentabilidade?", answer: true },
    { question: "A tecnologia tem dificultado a comunicação entre campo e cidade?", answer: false } // Tem facilitado
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
const currentScoreDisplay = document.getElementById('current-score');

const feedbackText = document.createElement('p');
feedbackText.id = 'feedback-text';
questionContainer.insertBefore(feedbackText, yesButton.parentElement.nextSibling);

function startGame() {
    currentQuestionIndex = 0;
    score = 0; // Inicia a pontuação em 0
    currentScoreDisplay.textContent = score;
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
    yesButton.disabled = true;
    noButton.disabled = true;

    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++; // Ganha 1 ponto se acertar
        feedbackText.textContent = "Certo!";
        feedbackText.style.color = '#4CAF50'; // Verde para acerto
    } else {
        score--; // Perde 1 ponto se errar
        feedbackText.textContent = "Errado!";
        feedbackText.style.color = '#f44336'; // Vermelho para erro
    }

    currentScoreDisplay.textContent = score; // Atualiza a pontuação no display

    setTimeout(() => {
        feedbackText.textContent = '';
        yesButton.disabled = false;
        noButton.disabled = false;
        currentQuestionIndex++;
        showQuestion();
    }, 1200);
}

function endGame() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreText.textContent = `Você terminou o jogo com ${score} pontos!`; // Mensagem de finalização com a pontuação final
}

yesButton.addEventListener('click', () => checkAnswer(true));
noButton.addEventListener('click', () => checkAnswer(false));
restartButton.addEventListener('click', startGame);

startGame();
