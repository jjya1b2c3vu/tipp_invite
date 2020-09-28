//test

function checkPswd() { 
    var confirmPassword = "20"; 
    var password = document.getElementById("pswd").value; 
    if (password == confirmPassword) { 
        alert("Passwords matched");
        window.location.href="tipp_invite/page.html";
    } 
    else{ 
        alert("Passwords do not match."); 
    } 
} 


