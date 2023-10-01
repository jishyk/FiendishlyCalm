// Guide quiz that executes when the user clicks on the 'Guide' button instead of a Category button. Steps the user through a series of questions and takes them to the appropriate mediation category.

// Fetch method to return a random technique from the derived category.
const getTechnique = async (catId) => {

    await fetch(`/technique/${catId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(`GET request for Category ${catId} sent`);
};


const runQuiz = () => {
    
    const quizContainer = document.getElementById("quiz-elements"); 
    const questionField = document.createElement("h4");
    const answerList = document.createElement("ul");
    const answer1Field = document.createElement("li");
    const answer2Field = document.createElement("li");
    const answer3Field = document.createElement("li");
    const answer4Field = document.createElement("li");
        
    const question001 = {
        questionDisplayed: "What best describes where you are today?",
        answerDisplayed1: "Honestly, it's been a rough day.",
        answerDisplayed2: "It's been a bit hectic, but I'm managing.",
        answerDisplayed3: "Not too bad, just a typical day.",
        answerDisplayed4: "It's going well, thanks for asking.",
    };
    
    const question002 = {
        questionDisplayed: "Pick a color...",
        answerDisplayed1: "Red",
        answerDisplayed2: "Blue",
        answerDisplayed3: "Green",
        answerDisplayed4: "Yellow",
    };
    
    const question003 = {
        questionDisplayed: "Pick a name for a puppy...",
        answerDisplayed1: "Bella",
        answerDisplayed2: "Rocky",
        answerDisplayed3: "Gizmo",
        answerDisplayed4: "Biscuit",
    };
    
    const question004 = {
        questionDisplayed: "Which of these sounds the best, right about now?",
        answerDisplayed1: "Cooking or Baking",
        answerDisplayed2: "Reading or Listening to Music",
        answerDisplayed3: "Painting, Drawing, Journaling",
        answerDisplayed4: "Walking in Nature",
    };
    
    const question005 = {
        questionDisplayed: "When you close your eyes, you would more likely see...",
        answerDisplayed1: "vast stretches of arid, sun-scorched sand dunes",
        answerDisplayed2: "the tranquil, azure shallows of an island lagoon",
        answerDisplayed3: "towering peaks, breathtaking vistas, crisp air",
        answerDisplayed4: "a hushed, winter wonderland of black-barked trees dusted with pristine white snow",
    };
    
    // Array variable containing the question bank objects.
    const questionBank = [question001, question002, question003, question004, question005];
     
        
    let answerArray = [];
    
    const recordAnswer = (answer) => {
    answerArray.push(answer);
    }

    for (let i=0; i < questionBank.length; i++) {

        quizContainer.appendChild(questionField);
        quizContainer.appendChild(answerList);
        quizContainer.appendChild(answer1Field);
        quizContainer.appendChild(answer2Field);
        quizContainer.appendChild(answer3Field);
        quizContainer.appendChild(answer4Field);

    questionField.textContent = questionBank[i].questionDisplayed;
        answer1Field.textContent = questionBank[i].answerDisplayed1;
        answer2Field.textContent = questionBank[i].answerDisplayed2;
        answer3Field.textContent = questionBank[i].answerDisplayed3;
        answer4Field.textContent = questionBank[i].answerDisplayed4;
        
        // Configure the event listeners on the answers to execute the correct function when the right and wrong answers are selected
        answer1Field.addEventListener("click", () => recordAnswer(1));
        answer2Field.addEventListener("click", () => recordAnswer(2));
        answer3Field.addEventListener("click", () => recordAnswer(3));
        answer4Field.addEventListener("click", () => recordAnswer(4));
    };
    
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

    getTechnique(catValue);
    
};

console.log("made it to the js file");
runQuiz();