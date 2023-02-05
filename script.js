const question = document.querySelector('.question')
const ans1 = document.querySelector('#option1')
const ans2 = document.querySelector('#option2')
const ans3 = document.querySelector('#option3')
const ans4 = document.querySelector('#option4')

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showScore')

const quizDB = [
{
	question:"Q1 What does HTML stand for?",
	a:"Hyper Tag Markup Language",
	b:"Hyper Text Markup Language",
	c:"Hyperlinks Text Mark Language",
	d:"Hyperlinking Text Marking Language",
	ans: "ans2"
},
{
	question:"Q2 Which of these is a genuine tag keyword?",
	a:"Header",
	b:"Bold",
	c:"Body",
	d:"Image",
	ans: "ans3"
},
{
	question:"Q3 What does CSS stand for?",
	a:"Computing Style Sheet",
	b:"Creative Style Sheet",
	c:"Creative Styling Sheet",
	d:"Cascading Style Sheet",
	ans: "ans4"
},
{
	question:"Q4 What is the correct format for changing the background colour of a div in CSS?",
	a:"Bg-color: red;",
	b:"Background:red;",
	c:"Background-colour:red;",
	d:"Background-color:red;",
	ans: "ans4"
}
]
let questionIndex = 0
let score = 0
function loadQuestion() {
	const quesList = quizDB[questionIndex]
	question.innerHTML = quesList.question
	ans1.innerHTML = quesList.a
	ans2.innerHTML = quesList.b
	ans3.innerHTML = quesList.c
	ans4.innerHTML = quesList.d
}

loadQuestion()

function checkAnswer() {
	let answer;

	answers.forEach((curr) => {
		if(curr.checked)
			answer = curr.id
	})
		return answer
}

const uncheck = () => {
	answers.forEach((curr) => curr.checked = false)
}

submit.addEventListener('click',() => {
	const checkedAnswer = checkAnswer()
	console.log(checkedAnswer)
	if(checkedAnswer === quizDB[questionIndex].ans)
		score++

	questionIndex++;
	if(questionIndex < quizDB.length) {
		uncheck()
		loadQuestion();
	}
	else {
		showScore.innerHTML = `
		<h3>You scored ${score}/${quizDB.length}</h3> 
		<button class="btn" onclick="location.reload()">Play Again</button>
		`;

		showScore.classList.remove('scoreArea')
	}


})