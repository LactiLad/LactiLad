document.getElementById("x").addEventListener("click", function () {
  var block = document.getElementById('block');
  block.style.zIndex = 10;
  block.style.backgroundColor = "black";
});

function clear() {
  document.getElementById("game").style.border = "dashed black";
  document.getElementById("video").style.border = "dashed black";
  document.getElementById("modeling").style.border = "dashed black";
  document.getElementById("web").style.border = "dashed black";
  
  document.getElementById("game").style.borderWidth = "5px";
  document.getElementById("video").style.borderWidth = "5px";
  document.getElementById("modeling").style.borderWidth = "5px";
  document.getElementById("web").style.borderWidth = "5px";

  document.getElementById("game").style.filter = "invert(0)";
  document.getElementById("video").style.filter = "invert(0)";
  document.getElementById("modeling").style.filter = "invert(0)";
  document.getElementById("web").style.filter = "invert(0)";
  
  document.getElementById("modelingText").style.visibility='hidden';
  document.getElementById("videoText").style.visibility='hidden';
  document.getElementById("webText").style.visibility='hidden';
  document.getElementById("gameText").style.visibility='hidden'
}
function replaceGame() {
  clear();
  document.getElementById("game").style.border = "solid white";
  document.getElementById("game").style.filter = "invert(1)";
  document.getElementById("gameText").style.visibility='visible'
}
function replaceVideo() {
  clear();
  document.getElementById("video").style.border = "solid white";
  document.getElementById("video").style.filter = "invert(1)";
  document.getElementById("videoText").style.visibility='visible'
}
function replaceModeling() {
  clear();
  document.getElementById("modeling").style.border = "solid white";
  document.getElementById("modeling").style.filter = "invert(1)";
  document.getElementById("modelingText").style.visibility='visible'
}
function replaceWeb() {
  clear();
  document.getElementById("web").style.border = "solid white";
  document.getElementById("web").style.filter = "invert(1)";
  document.getElementById("webText").style.visibility='visible'
}
replaceGame();