window.onscroll = function() {
    myFunction();
};
var p = 1000;
function myFunction() {
  if (document.body.scrollTop > p || document.documentElement.scrollTop > p) {
    document.getElementById("myP0").className ="mark";
    document.getElementById("right-side-0").className ="mark";
  }
  else {
    document.getElementById("myP0").className ="no_mark";
    document.getElementById("right-side-0").className ="no_mark";
  }

  if(document.body.scrollTop > 2*p || document.documentElement.scrollTop > 2*p){
    document.getElementById("myP1").className = "mark";
    document.getElementById("right-side-1").className ="mark";
    document.getElementById("myP0").className ="no_mark";
    document.getElementById("right-side-0").className ="no_mark";
  }
  else {
    document.getElementById("myP1").className ="no_mark";
    document.getElementById("right-side-1").className ="no_mark";
  }

  if(document.body.scrollTop > 3*p || document.documentElement.scrollTop > 3*p){
    document.getElementById("myP2").className = "mark";
    document.getElementById("right-side-2").className = "mark";
    document.getElementById("myP1").className ="no_mark";
    document.getElementById("right-side-1").className ="no_mark";
  }
  else {
    document.getElementById("myP2").className ="no_mark";
    document.getElementById("right-side-2").className = "no_mark";
  }
  if(document.body.scrollTop > 4*p || document.documentElement.scrollTop > 4*p){
    document.getElementById("myP3").className = "mark";
    document.getElementById("right-side-3").className = "mark";
    document.getElementById("myP2").className ="no_mark";
    document.getElementById("right-side-2").className ="no_mark";
  }
  else {
    document.getElementById("myP3").className ="no_mark";
    document.getElementById("right-side-3").className = "no_mark";
  }

  if(document.body.scrollTop > 5*p || document.documentElement.scrollTop > 5*p){
    document.getElementById("myP4").className = "mark";
    document.getElementById("right-side-4").className = "mark";
    document.getElementById("myP3").className ="no_mark";
    document.getElementById("right-side-3").className ="no_mark";
  }
  else {
    document.getElementById("myP4").className ="no_mark";
    document.getElementById("right-side-4").className = "no_mark";
  }
}


