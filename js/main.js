//test

function checkPswd() { 
    var confirmPassword = "20"; 
    var password = document.getElementById("pswd").value; 
    if (password == confirmPassword) { 
        window.location.replace("http://www.daum.net");
        //location.href="page2.html"; 
        //location.replace("page2.html");
    } 
    else{ 
        alert("Passwords do not match."); 
    } 
} 


