let submitBtn = document.getElementById("submitBtn");
let dismissBtn = document.getElementById("dismissBtn");
let emailInput = document.getElementById("email");

submitBtn.addEventListener("click", Submit);
dismissBtn.addEventListener("click", Dismiss);

function Submit(){
    let emailInputValue = emailInput.value; 
    
    if (emailInputValue=="" || emailInputValue.includes("@") == false){
        document.getElementById("errorMessage").style.display = "inline-block";
        document.getElementById("email").classList.add("error");
    }
    else{
        document.getElementById("subscribe").style.display = "none";
        document.getElementById("success").style.display = "block";
        document.getElementById("clientEmail").innerHTML = emailInputValue;
    }
}

function Dismiss(){
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("success").style.display = "none";
    document.getElementById("email").classList.remove("error");
    document.getElementById("errorMessage").style.display = "none";
    emailInput.value = "";
}
