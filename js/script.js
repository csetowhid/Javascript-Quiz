const myBtn = document.querySelector(".myBtn button"); 
const rulesBox = document.querySelector(".rulesBox");
const exitButton = document.querySelector(".buttons .exitButton");
const continueButton = document.querySelector(".buttons .continueButton");
const questions = document.querySelector(".questions")

myBtn.onclick = () => {
    rulesBox.classList.add("activeInfo")
}
    
exitButton.onclick = () =>{
    rulesBox.classList.remove("activeInfo"); 
}

continueButton.onclick = ()=>{
    rulesBox.classList.remove("activeInfo"); 
    questions.classList.add("activeQuiz"); 
    showQuestions(0);
    startTimer(15)

    startTimerLine(0); 

}

function showQuestions(index){
    const que_text = document.querySelector('.text');
    let que_tag = "<span>" + questions[index].numb+ "." + questions[index].question + " </span>";
}