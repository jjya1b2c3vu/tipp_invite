window.onscroll = function() {
    myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myP0").className ="mark";
  }
//   else if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
//     document.getElementById("myP1").className = "mark";
//   }
//   else if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
//     document.getElementById("myP2").className = "mark";
//   }
//   else if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
//     document.getElementById("myP3").className = "mark";
//   }
//   else if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
//     document.getElementById("myP4").className = "mark";
//   }
//   if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
//     document.getElementById("myP0").className = "";
//   }
//   else if(document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
//     document.getElementById("myP1").className = "";
//   }
//   else if(document.body.scrollTop < 150 || document.documentElement.scrollTop < 150){
//     document.getElementById("myP2").className = "";
//   }
//   else if(document.body.scrollTop < 200 || document.documentElement.scrollTop < 200){
//     document.getElementById("myP3").className = "";
//   }
//   else if(document.body.scrollTop < 250 || document.documentElement.scrollTop < 250){
//     document.getElementById("myP4").className = "";
//   }
  else {
     document.getElementById("myP0").className ="no_mark";
  }
}