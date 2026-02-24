const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    answer: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  optionsContainer.innerHTML = "";
  current.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.textContent = optionText;
    btn.addEventListener("click", () => {
      checkAnswer(index);
    });
    optionsContainer.appendChild(btn);
  });
}

showQuestion();

function checkAnswer(index) {
  if (index == questions[currentQuestion].answer) {
    score = score + 1;
  }
  currentQuestion = currentQuestion + 1;

 if (currentQuestion < questions.length) {
  showQuestion();
} else {
  resultElement.textContent = "You got " + score + " out of " + questions.length;
  resultElement.style.display = "block";
  restartBtn.textContent = "restart";
  restartBtn.style.display = "block"
}
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  restartBtn.style.display = "none";
  resultElement.style.display = "none";
  showQuestion()
})
