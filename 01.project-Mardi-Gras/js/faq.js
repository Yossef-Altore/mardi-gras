

// FAQ show answer when clicking on question

let QuestionCounter = document.querySelector('.innerContainer').childElementCount;

for(let i = 1;i<=QuestionCounter;i++){

    document.querySelector(`#ques${i}`).addEventListener('click',()=>{
        let answer = document.getElementById(`answer${i}`);
        let answerDisplay = window.getComputedStyle(answer,null).getPropertyValue("display");
        let sign = document.querySelector('#sign'+i);
        let answerText = document.getElementById('small'+i); 
        if(answerDisplay == "none"){
            answer.style.display = "block";
            sign.style.transform = 'rotate(45deg)';
            answerText.style.display = 'block';
        }else if(answerDisplay == "block"){
            answer.style.display = "none";
            sign.style.transform = 'rotate(90deg)';
        };
    });
};


