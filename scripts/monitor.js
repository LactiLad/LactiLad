var monitor = document.getElementById('monitor');
var screen = document.getElementById('screen');
var page = document.getElementById('page');
var doc = document.body.getBoundingClientRect();

//16:10
function displayWindowSize() {
  var newWidth = window.innerHeight * (16/10);//pixels needed to make 16:10 ratio with height
  var newHeight = window.innerWidth * (10/16);
  var letterBox
  if (newWidth < window.innerWidth) {//horizontal, shrink sides to fit image
    letterBox = ((window.innerWidth-newWidth)/2);
    //console.log("horizontal");
    monitor.style.left = letterBox+"px";
    monitor.style.right = letterBox+"px"; 
    
    var border = (8/384) * newWidth;
    if (document.getElementById('screen')) {
      screen.style.left = border+"px";
      screen.style.right = border+"px";
      screen.style.top = ((8/240) * window.innerHeight)+"px";
      screen.style.bottom = ((16/240) * window.innerHeight)+"px";
    } else {
      page.style.left = border+"px";
      page.style.right = border+"px";
      page.style.top = ((8/240) * window.innerHeight)+"px";
      page.style.bottom = ((16/240) * window.innerHeight)+"px";
    }
  } else {//verticle, shrink top to fit image
    letterBox = ((window.innerHeight-newHeight)/2);
    //console.log("verticle");
    monitor.style.top = letterBox+"px";
    monitor.style.bottom = letterBox+"px";
    
    var border = (8/384) * window.innerWidth;
    if (document.getElementById('screen')) {
      screen.style.left = border+"px";
      screen.style.right = border+"px";
      screen.style.top = ((8/240) * newHeight)+"px";
      screen.style.bottom = ((16/240) * newHeight)+"px";   
    } else {
      page.style.left = border+"px";
      page.style.right = border+"px";
      page.style.top = ((8/240) * newHeight)+"px";
      page.style.bottom = ((16/240) * newHeight)+"px";  
    }
  }
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();

