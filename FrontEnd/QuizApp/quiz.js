const questions = [
  {
    question:
      'Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?',
    asnwer: [
      { text: "Newell's", correct: true },
      { text: 'River Plate', correct: false },
      { text: 'Boca Juniors', correct: false },
      { text: 'Santos', correct: false }
    ]
  },
  {
    question:
      'Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?',
    asnwer: [
      { text: "Newell's", correct: true },
      { text: 'River Plate', correct: false },
      { text: 'Boca Juniors', correct: false },
      { text: 'Santos', correct: false }
    ]
  },
  {
    question:
      'Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?',
    asnwer: [
      { text: "Newell's", correct: true },
      { text: 'River Plate', correct: false },
      { text: 'Boca Juniors', correct: false },
      { text: 'Santos', correct: false }
    ]
  },
  {
    question:
      'Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?',
    asnwer: [
      { text: "Newell's", correct: true },
      { text: 'River Plate', correct: false },
      { text: 'Boca Juniors', correct: false },
      { text: 'Santos', correct: false }
    ]
  },
  {
    question:
      'Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?',
    asnwer: [
      { text: "Newell's", correct: true },
      { text: 'River Plate', correct: false },
      { text: 'Boca Juniors', correct: false },
      { text: 'Santos', correct: false }
    ]
  }
]
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = 'Next'
  showQuestion()
}
function showQuestion() {
  resetState()
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

  currentQuestion.asnwers.forEach((answer) => {
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn')
    answerButton.appendChild(button)
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  })
}
function resetState() {
  nextButton.style.display = 'none'
  while (answerButtons.firstChild) {
    answerButtons.removeChild(button)
  }
}
function selectAnswer(){
  const
}
