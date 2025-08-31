const question=document.getElementById("question");
const answers=document.querySelectorAll(".answer");
const progress=document.querySelector(".progress");
const nextBtn=document.getElementById("next-btn");
const quizContainer = document.querySelector(".quiz"); 

let questions=[];
let index = 0;
let score = 0;

async function getQuestions() {
  const url ="https://opentdb.com/api.php?amount=5&category=21&difficulty=medium";
  const res=await fetch(url);
  const data=await res.json();
  questions=data.results;
  display();
}


function display() {

    if (index >= questions.length) {
    showResult();
    return;
  }

  progress.innerText = `Question ${index + 1} of ${questions.length}`;

   const q = questions[index];
   question.innerText = q.question;
   let options = [...q.incorrect_answers, q.correct_answer];
   options = options.sort(() => Math.random() - 0.5);
   
    answers.forEach((option, i) => {
        option.nextElementSibling.innerText = options[i];
        option.value = options[i];
        option.checked = false;
    });
    
}


// check selected answer
function checkAnswer() {
  const selected = document.querySelector(".answer:checked");
  if (!selected) return; // no option selected

  if (selected.value === questions[index].correct_answer) {
    score++;
  }
  index++;
  display();
}

function showResult() {
  // Hide the quiz
  quizContainer.innerHTML = `
    <div class="result-screen">
      <h2>🎉 Quiz Completed!</h2>
      <p>Your Score: <strong>${score}</strong> / ${questions.length}</p>
    </div>
  `;
}

// Event listener for next button
nextBtn.addEventListener("click", checkAnswer);

// Call function when page loads
window.onload = getQuestions;
