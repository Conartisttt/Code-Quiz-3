// These are my questions, answers, and correct answers
let questions = [
    {
        "question": "Which of the following key words is used to define variables in JavaScript?",
        "answers": ["a. const", "b. let", "c. both a and b", "d. none of the above"],
        "correct": "c. both a and b"
    },
    {
        "question": "What does a JavaScript loop do?",
        "answers": ["a. Runs the same code over and over again", "b. Goes back to the top of the page and runs the nearest function", "c. Adds two integers together", "d. Returns a random number between 1 and 100"],
        "correct": "a. Runs the same code over and over again"
    },
    {
        "question": "What values does the Boolean data type take?",
        "answers": ["a. Yes and No", "b. True and False", "c. Up and Down", "d. Left and Right"],
        "correct": "b. True and False"
    },
    {
        "question": "What does DOM stand for?",
        "answers": ["a. Direct Object Method", "b. Data Object Model", "c. Define Object Map", "d. Document Object Model"],
        "correct": "d. Document Object Model"
    },
    {
        "question": "What is JavaScript used for in programming?",
        "answers": ["a. to define the content of web pages", "b. to specify the layout of web pages", "c. to program the behavior of web pages", "d. to organize code within a web page"],
        "correct": "c. to program the behavior of web pages"
    },
    {
        "question": "What are examples of JavaScript Popup boxes?",
        "answers": ["a. alert, prompt, and confirm", "b. yes, no, and cancel", "c. present, past, and future", "d. display, hide, and rename"],
        "correct": "a. alert, prompt, and confirm"
    },
    {
        "question": "Who invented JavaScript?",
        "answers": ["a. Michael Linloffin", "b. Barry Velma", "c. Lauren Gilligan", "d. Brendan Eich"],
        "correct": "d. Brendan Eich"
    },
    {
        "question": "What is a JavaScript function?",
        "answers": ["a. a predetermined variable within a JavaScript page", "b. an event that occurs inside of JavaScript, but is not displayed on screen", "c. a block of JavaScript code that can be executed when 'called' for", "d. the link between JavaScript, HTML, and CSS"],
        "correct": "c. a block of JavaScript code that can be executed when 'called' for"
    }
];

// Getting sections from HTML to use dynamically
const hSection = document.getElementById("header-section");
const sSection = document.getElementById("start-section");
const qSection = document.getElementById("question-section");
const aSection = document.getElementById("answer-section");
const startButton = document.getElementById("start-button");
const timerSection = document.getElementById("timer-section");
const scoreSection = document.getElementById("score-section");
const hScoreSection = document.getElementById("highscore-section");
const seeHighscores = document.getElementById("highscore-button");
const instructionSection = document.getElementById("instruction-section");

startButton.addEventListener("click", startQuiz); //When start button is clicked, startQuiz function is called

hScoreSection.innerHTML = ""; //set high score section text to nothing

 //create button to see high scores
seeHighscores.addEventListener("click", goToHighScores); //when highscores button is clicked, call goToHighScores function

let quizEnded = false; //set quiz end to false

let secondsLeft = 100; //set time start countdown

function setTime() {
    const timerInterval = setInterval(function () { //set function to a variable
        secondsLeft--; //countdown by 1

        if (secondsLeft <= 0) { //if seconds left is less than or equal to 0
            clearInterval(timerInterval); //stop the timer
            secondsLeft = 0; //set seconds left to zero in case the timer went below 0
            endQuiz(); //call endQuiz function

        } if (quizEnded) { //if quizEnded variable is set to true
            clearInterval(timerInterval); //stop the timer
        };
        timerSection.textContent = "Timer: " + secondsLeft + " seconds left"; //display text of timer on screen
    }, 1000); //this function will run every second (or 1000 milliseconds)
};

let currentQuestionNumber = 0; //sets current question number to 0 to be used as index

let questionAnswered = false; //sets question answered to false (global)

function startQuiz() { //this is called when start quiz button is hit
    setTime(); //start the timer
    continueQuiz(); //call continueQuiz function
};

function continueQuiz() {
    questionAnswered = false; //set questionAnswered to false
    startButton.style.display = "none"; //remove startButton from screen
    instructionSection.textContent = "";
    const cQuestionObj = questions[currentQuestionNumber]; //sets current question in object
    const qH1 = document.createElement("h1"); //add header element for question to display
    qSection.appendChild(qH1); //add header element to question div
    qH1.textContent = cQuestionObj.question; //set header text content to display the current question
    for (i = 0; i < cQuestionObj.answers.length; i++) { //loop to repeat over the number of answers in the current question object
        const aBtn = document.createElement("button"); //create a button
        aBtn.classList.add("btn", "btn-info", "mb-1", "answer-button")
        qSection.appendChild(aBtn); //add button to h1 element with question displayed
        aBtn.textContent = cQuestionObj.answers[i]; //set text to button with answer text
        aBtn.addEventListener("click", answerButtonLister); //when you click the button, answerButtonListener is called
    };
}

function answerButtonLister(e) { //function with event to target
    if (questionAnswered) { //if question answered is true, exit function
        return;
    }
    console.log(e.target);
    if (e.target.textContent == questions[currentQuestionNumber].correct) { //if the text content of the button clicked matches the text of the correct answer in that object
        e.target.classList.remove("btn-info");
        e.target.classList.add("btn-success");
        const correctAnswer = document.createElement("h2"); //create h2 element
        aSection.appendChild(correctAnswer); //add h2 element to answer section
        correctAnswer.textContent = "You got it right!"; //set text of h2

    } else { //if the button clicked text does not match
        const incorrectAnswer = document.createElement("h2"); //create h2 element
        e.target.classList.add("btn-danger");
        aSection.appendChild(incorrectAnswer); //add h2 element to answer section
        incorrectAnswer.textContent = "You got it wrong!"; //set text of h2
        secondsLeft = secondsLeft - 20; //deduct 20 seconds from the countdown timer
    };

    nextButton = document.createElement("button"); //create button
    nextButton.classList.add("btn", "btn-primary");
    nextButton.textContent = "Next Question"; //set button text
    aSection.appendChild(nextButton); //add button to answer section
    nextButton.addEventListener("click", nextQuestion); //when next button is clicked, call nextQuestion function
    questionAnswered = true; //set questionAnswered to true
}

function nextQuestion() {
    qSection.innerHTML = ""; //remove content from question section
    aSection.innerHTML = ""; //remove content from answer question
    currentQuestionNumber++; //add 1 to current question to be used as index
    if (currentQuestionNumber == questions.length) { //if current question number is equal to the number of question objects
        endQuiz(); //call endQuiz function
    } else {
        continueQuiz(); //if not, call continueQuiz function
    };
}

function endQuiz() {
    timerSection.classList.add("hide-me");
    qSection.innerHTML = ""; //remove content form question section
    aSection.innerHTML = ""; //remove content from answer section
    quizEnded = true; //set quizEnded to true
    setScore(); //call setScore function
}

function setScore() {
    const scoreNumber = document.createElement("h3"); //create h3 element
    scoreNumber.textContent = "Your Score: " + secondsLeft; //set h3 element text to value in seconds left
    scoreSection.appendChild(scoreNumber); //add h3 element to score section
    timerSection.innerHTML = ""; //remove content from timerSection
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-group", "justify-content-center");
    scoreSection.appendChild(inputDiv);
    const enterInitials = document.createElement("input"); //create input to type initials
    enterInitials.setAttribute("placeholder", "Enter Initials");
    enterInitials.setAttribute("maxlength", "3");
    inputDiv.appendChild(enterInitials); //add input to score section
    const submitButton = document.createElement("button"); //create button
    submitButton.classList.add("btn", "btn-primary");
    submitButton.innerHTML = "Submit"; //add text to button
    inputDiv.appendChild(submitButton); //add button to score section
    submitButton.addEventListener("click", initialSubmit); //when button is clicked, call initialSubmit function

    function initialSubmit(e) {
        const initials = enterInitials.value; //set variable with value of what was typed in input
        if (!initials) {
            alert("You must enter your initials!");
            return;
        } 
        const userScore = { //create object to store what was typed in input, and secondsleft on clock at end of quiz
            name: initials,
            score: secondsLeft
        };

        localStorage.setItem("lastHighscore", JSON.stringify(userScore)); //set userScore to local storage under lastHighscore
        scoreSection.innerHTML = ""; //remove content from scoreSection
        let highScoreList = []; //create variable with empty array to store list of high scores
        const oldHighScoreList = JSON.parse(localStorage.getItem("highscores")); //set variable to value of local storage named "highscores"
        highScoreList.push(userScore); //add userScore object to array
        if (oldHighScoreList) { //if oldHighscoreList has content in it
            highScoreList = highScoreList.concat(oldHighScoreList); //set highScoreList variable value to what is inside, and add oldHighScoreList to end of the array
            localStorage.setItem("highscores", JSON.stringify(highScoreList)); //set highScoreList to local storage
        };
        localStorage.setItem("highscores", JSON.stringify(highScoreList)); //set highScoreList to local storage
        displayScores(); //call function displayScores
    };
}

function displayScores() {
    const scoreData = JSON.parse(localStorage.getItem("lastHighscore")); //retreive information from local storage under lastHighscore to a variable
    const finalScore = document.createElement("h4"); //create h4 element
    scoreSection.appendChild(finalScore); //add h4 element to scoreSection
    finalScore.textContent = scoreData.name + " : " + scoreData.score; //set h4 element text to the value of name : score in scoreData variable
}

function goToHighScores() {
    if (hScoreSection.textContent.includes("Highscores:")) { //if hScoreSection text includes "Highscores:"
        hScoreSection.textContent = ""; //set hScoreSection content to nothing
        seeHighscores.classList.remove("btn-secondary");
        seeHighscores.classList.add("btn-warning");
    } else { 
        seeHighscores.classList.remove("btn-warning");
        seeHighscores.classList.add("btn-secondary");
        hScoreSection.textContent = "Highscores:"; //set hScoreSection content to "Highscores:"
        const scoreData = JSON.parse(localStorage.getItem("highscores")); //get highscores from local storage
        if (scoreData) { //if there is content in scoreData
            for (i = 0; i < scoreData.length; i++) { //loop to run the length of the scoreData array
                const finalScore = document.createElement("h5"); //create h5 element
                hScoreSection.appendChild(finalScore); //add h5 element to hScoreSection
                finalScore.textContent = scoreData[i].name + " : " + scoreData[i].score; //set text content of h5 to the name and score in score data
            };

        } else { //
            const finalScore = document.createElement("h5"); //create h5 element
            hScoreSection.appendChild(finalScore); //add h5 element to hScoreSection
            finalScore.textContent = "There are no highscores yet"; //set text to h5 element
        };
    };
}