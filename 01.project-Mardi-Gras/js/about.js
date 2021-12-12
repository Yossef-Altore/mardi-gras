
// showeing the chosen subject when clicking on its title on the left
// when adding a question add this



let subject1 = document.getElementById(`subject1`);
let subject2 = document.getElementById(`subject2`);
let subject3 = document.getElementById(`subject3`);
let subject4 = document.getElementById(`subject4`);
let subject5 = document.getElementById(`subject5`);

document.getElementById("linkToSubject1").addEventListener('click',()=>{
    document.getElementById('explenationOnReloading').style.display = "none";
    subject1.style.display = "block";
    subject2.style.display = "none";
    subject3.style.display = "none";
    subject4.style.display = "none";
    subject5.style.display = "none";

});
document.getElementById("linkToSubject2").addEventListener('click',()=>{
    document.getElementById('explenationOnReloading').style.display = "none";
    subject2.style.display = "block";
    subject1.style.display = "none";
    subject3.style.display = "none";
    subject4.style.display = "none";
    subject5.style.display = "none";

});
document.getElementById("linkToSubject3").addEventListener('click',()=>{
    document.getElementById('explenationOnReloading').style.display = "none";
    subject3.style.display = "block";
    subject2.style.display = "none";
    subject1.style.display = "none";
    subject4.style.display = "none";
    subject5.style.display = "none";

});
document.getElementById("linkToSubject4").addEventListener('click',()=>{
    document.getElementById('explenationOnReloading').style.display = "none";
    subject4.style.display = "block";
    subject2.style.display = "none";
    subject3.style.display = "none";
    subject1.style.display = "none";
    subject5.style.display = "none";

});
document.getElementById("linkToSubject5").addEventListener('click',()=>{
    document.getElementById('explenationOnReloading').style.display = "none";
    subject5.style.display = "block";
    subject2.style.display = "none";
    subject3.style.display = "none";
    subject4.style.display = "none";
    subject1.style.display = "none";

});









