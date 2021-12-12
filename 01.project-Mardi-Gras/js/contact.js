
let fName = document.getElementById('inputFname');
let lName = document.getElementById('inputLname');
let email = document.getElementById('inputEmail');
let fnameError = document.getElementById('fnameError');
let lnameError = document.getElementById('lnameError');
let EmailError = document.getElementById('EmailError');


document.querySelector("form").addEventListener('submit', prevent);
    
function prevent(e) {
    if(fName.value == ""){
        e.preventDefault();
        fnameError.innerHTML = `<h3 style="color:red">PLEASE FILL YOUR FIRST NAME</h3>`;
    }
    else{
        fnameError.innerHTML = "";
    }
    if(lName.value == ""){
        e.preventDefault();
        lnameError.innerHTML = `<h3 style="color:red">PLEASE FILL YOUR LAST NAME</h3>`;
    }
    else{
        lnameError.innerHTML = "";
    }
    if(email.value == ""){
        e.preventDefault();
        EmailError.innerHTML = `<h3 style="color:red">PLEASE FILL VALID EMAIL</h3>`;
    }else {
        
    
        if(email.value.indexOf(".") == -1){
            e.preventDefault();
            EmailError.innerHTML = `<h3 style="color:red">VALID EMAIL MUST CONTAIN " . "</h3>`;
        }else{
            if(email.value.indexOf("@") == -1){
                e.preventDefault();
                EmailError.innerHTML = `<h3 style="color:red">VALID EMAIL MUST CONTAIN " @ "</h3>`;
            }else{
                EmailError.innerHTML= "";
            }
        }
    
    }
}