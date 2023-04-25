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

  const sSection = document.getElementById("start-section");
  const qSection = document.getElementById("question-section");
  const aSection = document.getElementById("answer-section");
  const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);

let currentQuestionNumber = 0;

function startQuiz(){
    startButton.style.display = "none";
    const cQuestionObj = questions[currentQuestionNumber]
    const qDiv = document.createElement("div");
    qSection.appendChild(qDiv);
    const qH1 = document.createElement("h1");
    qDiv.appendChild(qH1);
    qH1.textContent = cQuestionObj.question;
    for(i=0;i<cQuestionObj.answers.length;i++) {
    const aBtn = document.createElement("button");
    qH1.appendChild(aBtn);
    aBtn.textContent = cQuestionObj.answers[i];
    aBtn.addEventListener("click", answerButtonLister);
    };
    
}

function answerButtonLister(e){
    console.log(e.target);
    if(e.target.textContent == "c. both a and b") {
        console.log("you are correct")
        const correctAnswer = document.createElement("h3");
        aSection.appendChild(correctAnswer);
        correctAnswer.textContent = "You got it right!"

    } else {
        console.log("that's incorrect");
        const incorrectAnswer = document.createElement("h3");
        aSection.appendChild(incorrectAnswer);
        incorrectAnswer.textContent = "You got it wrong!"
    }
    nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    aSection.appendChild(nextButton);
    nextButton.addEventListener("click", nextQuestion);
}

function nextQuestion(){
    
}


// function beginQuiz(){

//     for(questionIndex=0;questionIndex<questions.length;questionIndex++) {
//         console.log(questions[questionIndex]);
//         console.log(questions[questionIndex].question);
//         console.log(questions[questionIndex].answers);
//         console.log(questions[questionIndex].correct);
//         let correctAnswer = questions[questionIndex].correct;
//         let answerArray = questions[questionIndex].answers;
//         const question = document.createElement("div");
//         qSection.appendChild(question);
//         question.innerHTML = questions[questionIndex].question;
        
//         for(answerIndex=0;answerIndex<answerArray.length;answerIndex++){
//             const answers = document.createElement("button");
//             question.appendChild(answers);
//             answers.innerHTML = answerArray[answerIndex];
//             console.log(answerArray[answerIndex]);
//         }
//     }
// }