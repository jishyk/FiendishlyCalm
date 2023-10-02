// Guide quiz that executes when the user clicks on the 'Guide' button instead of a Category button. Steps the user through a series of questions and takes them to the appropriate mediation category.

// Fetch method to return a random technique from the derived category.
const getTechnique = async (catId) => {
    console.log(`made it here getTechnique`);
    await fetch(`/api/guide/${catId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            // refresh the history page
            window.location.href = `/api/guide/${catId}`;
        } else {
            console.log("Redirect error.");
        }
    })
    .catch(error => {
        console.log(error);
    })
};
    


const runQuiz = () => {

    const quizContainer = document.getElementById("quiz-elements");
    const questionField = document.createElement("h4");
    const answerList = document.createElement("ul");
    const answer1Field = document.createElement("li");
    const answer2Field = document.createElement("li");
    const answer3Field = document.createElement("li");
    const answer4Field = document.createElement("li");

    quizContainer.appendChild(questionField);
    quizContainer.appendChild(answerList);
    quizContainer.appendChild(answer1Field);
    quizContainer.appendChild(answer2Field);
    quizContainer.appendChild(answer3Field);
    quizContainer.appendChild(answer4Field);


    const questionBank = [
        {
            questionDisplayed: "What best describes where you are today?",
            answerDisplayed1: "Honestly, it's been a rough day.",
            answerDisplayed2: "It's been a bit hectic, but I'm managing.",
            answerDisplayed3: "Not too bad, just a typical day.",
            answerDisplayed4: "It's going well, thanks for asking.",
        },
        {
            questionDisplayed: "Pick a color...",
            answerDisplayed1: "Red",
            answerDisplayed2: "Blue",
            answerDisplayed3: "Green",
            answerDisplayed4: "Yellow",
        },
        {
            questionDisplayed: "Pick a name for a puppy...",
            answerDisplayed1: "Bella",
            answerDisplayed2: "Rocky",
            answerDisplayed3: "Gizmo",
            answerDisplayed4: "Biscuit",
        },
        {
            questionDisplayed: "Which of these sounds the best, right about now?",
            answerDisplayed1: "Cooking or Baking",
            answerDisplayed2: "Reading or Listening to Music",
            answerDisplayed3: "Painting, Drawing, Journaling",
            answerDisplayed4: "Walking in Nature",
        },
        {
            questionDisplayed: "When you close your eyes, you would more likely see...",
            answerDisplayed1: "Vast stretches of arid, sun-scorched sand dunes",
            answerDisplayed2: "The tranquil, azure shallows of an island lagoon",
            answerDisplayed3: "Towering peaks, breathtaking vistas, crisp air",
            answerDisplayed4: "A hushed, winter wonderland of black-barked trees dusted with pristine white snow",
        },
    ]

    var currentQuestionIndex = 0
    var answerArray = [];

    const displayQuestion = () => {
        questionField.textContent = questionBank[currentQuestionIndex].questionDisplayed;
        answer1Field.textContent = questionBank[currentQuestionIndex].answerDisplayed1;
        answer2Field.textContent = questionBank[currentQuestionIndex].answerDisplayed2;
        answer3Field.textContent = questionBank[currentQuestionIndex].answerDisplayed3;
        answer4Field.textContent = questionBank[currentQuestionIndex].answerDisplayed4;
    }

    const recordAnswer = (answer) => {
        answerArray.push(answer);
        currentQuestionIndex++;
        if (currentQuestionIndex < questionBank.length) {
        displayQuestion();
        } else {
            let catValue = 0;
            const finalResult = answerArray[0] + answerArray[1] + answerArray[2] + answerArray[3] + answerArray[4];
    
            if (finalResult >= 16) {
                catValue = 2;
            } else if (finalResult >= 12) {
                catValue = 3;
            } else if (finalResult >= 8) {
                catValue = 1;
            } else if (finalResult >= 4) {
                catValue = 0;
            } else {
                catValue = 4;
            };
    
            console.log(catValue);
            getTechnique(catValue);
            return;
        }
    }

        // Configure the event listeners on the answers to execute the correct function when the right and wrong answers are selected
        answer1Field.addEventListener("click", () => recordAnswer(1));
        answer2Field.addEventListener("click", () => recordAnswer(2));
        answer3Field.addEventListener("click", () => recordAnswer(3));
        answer4Field.addEventListener("click", () => recordAnswer(4));

    
    
    displayQuestion();
    
};

console.log("made it to the js file");
runQuiz();