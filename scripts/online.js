var dd = document.getElementById("dropDown");
var ddm = document.getElementById("dropDownMenu");
dd.addEventListener("mousedown", showMenu, false);
document.addEventListener("keydown", keyer, false);
var platforms = document.getElementsByClassName("platform");
var distanceScrolled = 0;

function showMenu() {
  ddm.style.visibility = "visible";
  dd.style.visibility = "hidden";
  ddm.addEventListener("mouseleave", removeMenu, false);
  ddm.addEventListener("mousewheel", moveMenu, false);
  ddm.addEventListener("mousedown", removeMenu, false);
  /*for (var i = 0; i < platforms.length; i++) {
    var plat = document.getElementById(document.getElementById(platforms[i].id));
    plat.addEventListener("mouseleave", removeMenu, false);
    if (dd.tag == plat.id) {
      document.getElementById("dropDownMenu").style.transform = "translate(0, "+(i*plat.style.width)+"px )";
    }
  }*/
}

function removeMenu() {
  ddm.style.visibility = "hidden";
  dd.style.visibility = "visible";
  dd.tag = platforms[platforms.length - 1 - distanceScrolled].id;
  dd.style.backgroundImage = "url(\"o"+dd.tag+".png\")";
  console.log(platforms[platforms.length - 1 - distanceScrolled].id);
  
  ddm.removeEventListener("mousewheel", moveMenu);
  ddm.removeEventListener("mouseleave", removeMenu);
  ddm.removeEventListener("mousedown", removeMenu);
}

function moveMenu(e) {
  if (e.deltaY < 0) distanceScrolled++;
  if (e.deltaY > 0) distanceScrolled--;
  
  if (distanceScrolled > platforms.length-1) distanceScrolled = platforms.length-1;
  if (distanceScrolled < 0) distanceScrolled = 0;
  
  ddm.style.transform = "translate(0, "+((distanceScrolled*100)-(7.75*(distanceScrolled+1)))+"% )";
}

var inp = document.getElementById("oinput");

function keyer(e){
  var key = e.key;
  if (e.altKey) key = "";
  if (e.ctrlKey) key = "";
  if (e.metaKey) key = "";
  if (e.shiftKey) key = "";
  if (e.key == "ArrowLeft") key = "";
  if (e.key == "ArrowRight") key = "";
  if (e.key == "ArrowUp") key = "";
  if (e.key == "ArrowDown") key = "";
  if (e.key == "Tab") key = "";
  if (e.key == "CapsLock") key = "";
  if (e.key == "Escape") key = "";
  if (e.key == "Backspace") {
    key = "";
    inp.innerHTML = inp.innerHTML.substring(0,inp.innerHTML.length-1);
  } if (e.key == "Enter") {
    key = "";
    //oInput(inp.innerHTML);
    inp.innerHTML = "";
  }
  inp.innerHTML += key;
  console.log(e.key);
}

function oInput(input) {
  if (input.includes("clock")) {//hello snooper quit looking at my code... its embarrasing :(
    if (input.includes("color")) {
      window.location.pathname = "/clock/color";
      return "loading to cannon.cafe.clock.color";
    }
    window.location.pathname = "/clock";
    return "loading to cannon.cafe.clock";
  } else if (input.includes("hey") && input.includes("hi")) {
    return "\"" + input + "\" is still under construction :(<br>come back later!";
  }
  return "unknown command: \"" + input + "\"";
}

