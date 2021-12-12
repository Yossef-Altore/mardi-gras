//               show and hide navbar up to 900px width - ham sign

let mainNavUl = document.getElementById('mainNavUl');
let counter = 1;

let hamburgerSign = document.getElementById('hamburger').addEventListener('click',()=>{
    if(counter == 1 || counter%2 == true){
            mainNavUl.style.display = "inline-block";        
    }else{
           mainNavUl.style.display = "none";   
    };
        counter++;
});