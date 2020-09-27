//test

function checkPswd() { 
    var confirmPassword = "20"; 
    var password = document.getElementById("pswd").value; 
    if (password == confirmPassword) { 
        window.location.href="page.html";
        alert("Passwords matched");
    } 
    else{ 
        alert("Passwords do not match."); 
    } 
} 


