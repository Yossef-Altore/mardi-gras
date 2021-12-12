

//                      open and close funders popup
function closeAndOpen(num){
    document.querySelector('#allCardsContainer > div:nth-child('+num+') > img').addEventListener('click',() =>{
        // open popup on clickinh on funder photo in index
        let showPop = document.querySelector('#allPopups .all-popups-wrapper:nth-of-type('+num+')');
        document.querySelector('#allPopups').style.display = "block";
        document.querySelector('#allPopups').style.position = "fixed";
        showPop.style.display = "block";
        showPop.style.position = "fixed";
    });
    //                 close popup by clicking on X
    document.querySelector('#allPopups > div:nth-child('+num+') > button').addEventListener('click',() =>{
        let showPop = document.querySelector('#allPopups .all-popups-wrapper:nth-of-type('+num+')');
        showPop.style.display = "none";
        window.scrollTo(0, 0);
        document.querySelector('#allPopups').style.display = "none";
    });
};
closeAndOpen(1);
closeAndOpen(2);
closeAndOpen(3);
closeAndOpen(4);
closeAndOpen(5);
closeAndOpen(6);
closeAndOpen(7);
closeAndOpen(8);


//                  time countDown on index 
//                  Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2022 06:00:00").getTime();

//                Update the count down every 1 second
var x = setInterval(function() {

  //                Get today's date and time
  var now = new Date().getTime();  
  //                Find the distance between now and the count down date
  var distance = countDownDate - now;   
  //                Time calculations for days, hours, minutes and seconds
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(hours<10){
      hours = "0"+hours;
  }
  if(minutes<10){
      minutes = "0"+minutes;
  }
  if(seconds<10){
      seconds = "0"+seconds;
  }    
  //                Output the result in an element
  document.querySelector("#countDays").innerHTML = days;
  document.querySelector("#countHours").innerHTML = hours;
  document.querySelector("#countMin").innerHTML = minutes;
  document.querySelector("#countSec").innerHTML = seconds;   
  //                If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDownTimer1").innerHTML = "EXPIRED";
  }
}, 1000);




