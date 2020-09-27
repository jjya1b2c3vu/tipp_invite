window.onscroll = function() {
    myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myP0").className ="mark";
    document.getElementById("right-side-0").className ="mark";
  }
  else {
    document.getElementById("myP0").className ="no_mark";
    document.getElementById("right-side-0").className ="no_mark";
  }

  if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
    document.getElementById("myP1").className = "mark";
    document.getElementById("right-side-1").className ="mark";
    document.getElementById("myP0").className ="no_mark";
    document.getElementById("right-side-0").className ="no_mark";
  }
  else {
    document.getElementById("myP1").className ="no_mark";
    document.getElementById("right-side-1").className ="no_mark";
  }

  if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
    document.getElementById("myP2").className = "mark";
    document.getElementById("right-side-2").className = "mark";
    document.getElementById("myP1").className ="no_mark";
    document.getElementById("right-side-1").className ="no_mark";
  }
  else {
    document.getElementById("myP2").className ="no_mark";
    document.getElementById("right-side-2").className = "no_mark";
  }
  if(document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100){
    document.getElementById("myP3").className = "mark";
    document.getElementById("right-side-3").className = "mark";
    document.getElementById("myP2").className ="no_mark";
    document.getElementById("right-side-2").className ="no_mark";
  }
  else {
    document.getElementById("myP3").className ="no_mark";
    document.getElementById("right-side-3").className = "no_mark";
  }

  if(document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900){
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