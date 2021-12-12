for(let i = 1;i<=22;i++){
    document.querySelector(`.item-${i}`).addEventListener('click',()=>{
        
        document.getElementById('bigImage').style.display = "flex"
        document.getElementById('theChosenBigImage').src = "images/"+i+".jpg";
        window.x = i;
    });
}


document.getElementById('prev').addEventListener('click',()=>{
    if(x==1){
        x=23;
    }
    document.getElementById('theChosenBigImage').src = "images/"+(x-1)+".jpg";
    x--
});


document.getElementById('next').addEventListener('click',()=>{           
    document.getElementById('theChosenBigImage').src = "images/"+(x+1)+".jpg";
    x++
    if(x==22){
        x=0
    }
});



document.querySelector('#hideBigImage').addEventListener('click',()=>{
     document.getElementById('bigImage').style.display = "none";
});