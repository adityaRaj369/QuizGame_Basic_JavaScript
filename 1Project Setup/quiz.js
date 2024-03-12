const quesJSON = [
  {
    "correctAnswer": "Class",
    "options": ["Class", "Object", "Method", "Variable"],
    "question": "In Java, what is a blueprint for creating objects that encapsulates data and behavior?"
  },
  {
    "correctAnswer": "Java",
    "options": ["C++", "Python", "Java", "JavaScript"],
    "question": "Which programming language is often used for object-oriented programming and is platform-independent?"
  },
  {
    "correctAnswer": "Inheritance",
    "options": ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    "question": "Which OOP concept allows a class to inherit properties and behaviors from another class?"
  },
  {
    "correctAnswer": "Array",
    "options": ["Linked List", "Array", "Queue", "Stack"],
    "question": "Which data structure is used to store elements with a contiguous memory location?"
  },
  {
    "correctAnswer": "Binary Search",
    "options": ["Linear Search", "Binary Search", "Bubble Sort", "Merge Sort"],
    "question": "What is the name of the algorithm used to efficiently find an element in a sorted array?"
  },
  {
    "correctAnswer": "Big O Notation",
    "options": ["Bubble Sort", "Binary Search", "Big O Notation", "Merge Sort"],
    "question": "What is commonly used to describe the efficiency of an algorithm in terms of its time complexity?"
  }
];

let score = 0;
let currQues = 0;


const quesEl = document.getElementById("question");
// Fetch all elements 
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl=document.getElementById("Next")
function showQuestion() {
  // Destructure the needed things
  const { correctAnswer, options, question } = quesJSON[currQues];
  quesEl.textContent = question;
  const shuffledOpts = shuffleOptions(options);

  // Populate the divs with the option 
  optionEl.innerHTML = ''; // Clear previous options

  shuffledOpts.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt.trim(); // Trim extra spaces
    optionEl.appendChild(btn);

    // Event handling for button
    btn.addEventListener("click", () => {
      if (opt.trim() === correctAnswer.trim()) {
        score++;
      } else {
        score = score - 0.25;
      }
      console.log(score);
      scoreEl.textContent = 'Score: ' + score;
      if (currQues < quesJSON.length - 1) {
        currQues++;
        showQuestion(); // Move to the next question
      } else {
        quesEl.textContent = "Quiz Completed!!";
        optionEl.innerHTML = ''; // Clear options
      }
    });
  });
}

//shuffle the options  it will take options array as input
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

// Call the function to start the quiz
showQuestion();
