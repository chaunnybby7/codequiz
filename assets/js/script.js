
/* DEFINE VARIABLES */

 // Define a set of questions
 const questions = [
    {
        question: "In the state of Georgia, it’s illegal to eat what with a fork?",
        choices: ["a. Shrimp and Grits", "b. Fried chicken", "c. Lowcountry Boil", "d. Steak"],
        answer: "a. Shrimp and Grits"
    },
    {
        question: "What can be broken but is never held?",
        choices: ["a. A rule", "b. A law", "c. A promise", "d. A glass"],
        answer: "c. A promise"
    },
    {
        question: "Which is the only edible food that never goes bad?",
        choices: ["a. Hamburger", "b. Fries", "c. Honey", "d. all of the above"],
        answer: "c. Honey"
    },
    {
        question: "What's the national flower of Japan?",
        choices: ["a. Hydrangea", "b. Carnation", "c. Sunflower", "d. Cherry blossom"],
        answer: "d. Cherry blossom"
    },
    {
        question: "What UK city do the Beatles come from",
        choices: ["a. Liverpool", "b. Bristol", "c. Manchester", "d. London"],
        answer: "a. Liverpool"
    },
    {
        question: "One kilogram is equal to how many pounds?",
        choices: ["a. 3.0", "b. 1.5", "c. 2.2", "d. 2.8"],
        answer: "c. 2.2"
    },
    {
        question: "The brain is divided into how many lobes?",
        choices: ["a. Two", "b. Three", "c. Four", "d. Five"],
        answer: "c. Four"
    },
    {
        question: "In what state in the US will you find a town named Christmas?",
        choices: ["a. Oregon", "b. Minnesota", "c. Pennsylvania", "d. Florida"],
        answer: "d. Florida"
    },
    {
        question: "What color are flamingos when they hatch out of their eggs?",
        choices: ["a. Gray", "b. Pink", "c. Black", "d. Yellow"],
        answer: "a. Gray"
    },
    {
        question: "What's the only bird that can fly backward?",
        choices: ["a. Swallows", "b. Mockingbird", "c. Eagle", "d. Hummingbird"],
        answer: "d. Hummingbird"
    },
    {
        question: "What's 15 percent of 2000?",
        choices: ["a. 295", "b. 255", "c. 300", "d. 625"],
        answer: "c. 300"
    },
    {
        question: "How many moons does the planet Venus have?",
        choices: ["a. One", "b. Two", "c. Three", "d. Zero"],
        answer: "d. Zero"
    }
];

// Assign references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startEl = document.getElementById("start");
var startBtn = document.getElementById("start-quiz-button");

var questionEl = document.getElementById("questionEl");
var questionHeader = document.getElementById("questionHeader");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var finale = document.getElementById("finale");
var submitNameBtn = document.getElementById("submitNameBtn");
var nameInput = document.getElementById("nameInput");
var all = document.getElementById("all");

var highScoreEl = document.getElementById("highScoreEl");
var finalScore = document.getElementById("finalScore");

var returnBtn = document.getElementById("returnBtn");
var resetHighScoreBtn = document.getElementById("resetHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listHighScores = document.getElementById("listHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/* FUNCTIONS*/

// WHEN I click the start button, timer starts
var totalTime = 181;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    nameInput.textContent = "";

    startEl.style.display = "none";
    questionEl.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};

// console.log(questions[questionIndex].question);
// console.log(questions[questionIndex].choices);

// then presented with questions and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionHeader.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct! ✅";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! ❌ The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// when all questions are answered or timer reaches 0, game over
function gameOver() {
    finale.style.display = "block";
    questionEl.style.display = "none";
    startEl.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // stop function is initial is blank
    if (nameInput.value === "") {
        alert("Please enter your name‼️‼️ ");
        return;
    } 

    startEl.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    finale.style.display = "none";
    highScoreEl.style.display = "block";   

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        name: nameInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    // show current highscores
    showHighScores();
}

// function to show high scores
var i = 0;
function showHighScores() {

    startEl.style.display = "none";
    timer.style.display = "none";
    questionEl.style.display = "none";
    timesUp.style.display = "none";
    finale.style.display = "none";
    highScoreEl.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].name + ": " + storedHighScores[i].score;
        listHighScores.appendChild(eachNewHighScore);
    }
}

/**
 * ADD EVENT LISTENERS
 */

startBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitNameBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

returnBtn.addEventListener("click", function() {
    startEl.style.display = "block";
    highScoreEl.style.display = "none";
});

resetHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listHighScores.innerHTML = "High Scores Cleared!";
    listHighScores.setAttribute("style", "font-family: 'Inter', sans-serif; font-style: italic;")
});
