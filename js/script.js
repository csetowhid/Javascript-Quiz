const myBtn = document.querySelector(".myBtn button"); 
const rulesBox = document.querySelector(".rulesBox");
const exitButton = document.querySelector(".buttons .exitButton");
const continueButton = document.querySelector(".buttons .continueButton");
const Questions = document.querySelector(".Questions")

myBtn.onclick = () => {
    rulesBox.classList.add("activeInfo")
}
    
exitButton.onclick = () =>{
    rulesBox.classList.remove("activeInfo"); 
}

continueButton.onclick = ()=>{
    rulesBox.classList.remove("activeInfo"); 
    Questions.classList.add("activeQuiz"); 
    showQuestions(0);
    // startTimer(15)

    // startTimerLine(0); 

}
let que_count = 0;
const nextBtn = document.querySelector(".nextBtn");

nextBtn.onclick = ()=> {
    if(que_count <questions.length - 1){
        que_count++
        showQuestions(que_count);
    }else{
        alert("You Have Completd Your Task");
    }
}
function showQuestions(index){
    const que_text = document.querySelector('.text');
    const option_list = document.querySelector('.myOptions');
    let option_tag = '<div class="options">'+ questions[index].options[0]+ '</div>'
                   + '<div class="options">'+ questions[index].options[1]+ '</div>'
                   + '<div class="options">'+ questions[index].options[2]+ '</div>'
                   + '<div class="options">'+ questions[index].options[3]+ '</div>';



    let que_tag = "<span>" + questions[index].numb+ "." + questions[index].question + " </span>";
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

}