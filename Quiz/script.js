const questions = [{
    question: "What is the capital of India? ",
    answers: [
        {text: "Delhi" , correct: true },
        {text: "Mumbai" , correct: false},
        {text: "Kolkata", correct: false},
        {text: "Chennai", correct: false},
    ]
},
{
    question: "Kashmir is the integral part of: ",
    answers: [
        {text: "China", correct: false},
        {text: "Pakistan", correct: false},
        {text: "India", correct: true},
        {text: "None of the above", correct: false},
    ]
},
{
    question: "Which is the largest continent? ",
    answers: [
        {text: "Asia", correct: true},
        {text: "Europe", correct: false},
        {text: "Africa", correct: false},
        {text: "Antarctica", correct: false},
    ]
},
{
    question: "Who killed Ravan ? ",
    answers: [
        {text: "Bharat", correct: false},
        {text: "Hanuman", correct: false},
        {text: "Ram", correct: true},
        {text: "Laxman", correct: false},
    ]
},
{
    question: "How many states are there in India ? ",
    answers: [
        {text: 22, correct: false},
        {text: 25, correct: false},
        {text: 26, correct: false},
        {text: 28, correct: true},
    ]
}];

const questionText = document.getElementById("questiontext");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("prev");

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let questionNumber = questionIndex + 1;
    let question = questions[questionIndex].question;
    questionText.innerHTML = questionNumber + " ." + question;

    questions[questionIndex].answers.forEach((answer) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", (e)=>{
            let value = e.target;
            if(value.dataset.correct === "true"){
                value.classList.add("correct");
                score++;
            }
            else{
                value.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextButton.style.display = "block";
        })
    })
}

nextButton.addEventListener("click", ()=>{
    if(questionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

function showScore(){
    resetState();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    previousButton.style.display = "none";
}

function handleNextButton(){
    questionIndex++;
    if(questionIndex < questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

function resetState(){
    nextButton.style.display = "none";
    previousButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

startQuiz();
