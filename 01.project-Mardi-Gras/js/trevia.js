let winningAudio = document.getElementById('winningAudio');
let losingAudio = document.getElementById('losingAudio');
let winPoints = document.getElementById('winPoints');
let losPoints = document.getElementById('losPoints');
let allAnswers = document.querySelectorAll('input[type="radio"]');



document.getElementById('checkAnswer').addEventListener('click',()=>{
        let counter= 0;
        let trueAnswers = document.querySelectorAll(".truAns");
        for(i=0;i<trueAnswers.length;i++){
            if(trueAnswers[i].checked == true){
                counter++
            }
        }
        if(counter > 5){
            winPoints.innerHTML = `${counter}`
            document.getElementById('afterWinning').style.display = "block";
            winningAudio.play();
            setTimeout(function(){
                document.getElementById('afterWinning').style.display = "none";
                winningAudio.pause();
                for(y=0;y<allAnswers.length;y++){
                    if(allAnswers[y].checked == true){
                        allAnswers[y].checked = false;
                    }
                }
            },5000);
            
        }
        if(counter <= 5){
            losPoints.innerHTML = `${counter}`
            document.getElementById('afterLosing').style.display = "block";
            losingAudio.play();
            setTimeout(function(){
                document.getElementById('afterLosing').style.display = "none";
                losingAudio.pause();
                for(y=0;y<allAnswers.length;y++){
                    if(allAnswers[y].checked == true){
                        allAnswers[y].checked = false;
                    }
                }
            },3000);
        };
});

