const display = document.getElementById("screen");
const computer = document.getElementById("monitor");
const box = document.getElementById("box");
var bleft = 0;
var bright = 0;
var btop = 0;
var bbottom = 0;
var p1 = [0,0];
var p2 = [0,0];
var nclick = 0;
var cclick = 0;

display.addEventListener("mousedown", updateBox, false);
display.addEventListener("mouseup", removeBox, false);
display.addEventListener("mouseleave", removeBox, false);
document.getElementById("notepadX").addEventListener("mousedown", removeNote, false);
document.getElementById("consoleX").addEventListener("mousedown", removeCon, false);

var buttons = document.getElementsByClassName("a");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var block = document.getElementById("block");
    block.style.zIndex = 10;
    block.style.backgroundColor = "black";
  });
}
function updateBox(e) {
  p1 = [e.pageX, e.pageY];
  p2 = [e.pageX, e.pageY];

  document.getElementById("notepadSelection").style.visibility = "hidden";
  document.getElementById("consoleSelection").style.visibility = "hidden";
  display.addEventListener("mousemove", moveBox, false);
  //console.log("down");
}
function moveBox(e) {
  box.style.visibility='visible';
  //console.log("move");
  p2 = [e.pageX, e.pageY];
  //console.log(p1 + "|" + p2);

  if (p1[0] < p2[0]) {//   ->
    if (p1[1] < p2[1]) {// \|/
      btop = p1[1];
      bleft = p1[0];
      bright = p2[0];
      bbottom = p2[1];
    } else {//             /|\
      btop = p2[1];
      bleft = p1[0];
      bright = p2[0];
      bbottom = p1[1];  
    }
  } else {//               <-
    if (p1[1] < p2[1]) {// \|/
      btop = p1[1];
      bleft = p2[0];
      bright = p1[0];
      bbottom = p2[1];
    } else {//             /|\
      btop = p2[1];
      bleft = p2[0];
      bright = p1[0];
      bbottom = p1[1];  
    }
  }

  box.style.left = bleft - monitor.offsetLeft - display.offsetLeft +"px";
  box.style.top = btop - monitor.offsetTop - display.offsetTop+"px";
  box.style.right = display.clientWidth - bright + monitor.offsetLeft + display.offsetLeft+"px";
  box.style.bottom = display.clientHeight - bbottom + monitor.offsetTop + display.offsetTop+"px";
  
  var note = document.getElementById("notepadSelection");
  var con = document.getElementById("consoleSelection");
  if (rectRect(box.offsetLeft,  box.offsetTop, box.clientWidth, box.clientHeight, note.offsetLeft,  note.offsetTop, note.clientWidth, note.clientHeight)) {//box, notepad
      note.style.visibility = "visible";
  }
  if (rectRect(box.offsetLeft,  box.offsetTop, box.clientWidth, box.clientHeight, con.offsetLeft,  con.offsetTop, con.clientWidth, con.clientHeight)) {//box, notepad
      con.style.visibility = "visible";
  }
}
function removeBox() {
  //console.log("up");
  display.removeEventListener("mousemove", moveBox);
  box.style.visibility='hidden';
}

function openNotepad() {
  nclick++;
  
  
  if (nclick == 1) {
    //document.getElementById("notepad").style.cursor = "url(\"pointer.png\") 28 4, pointer";
    document.getElementById("notepadSelection").style.visibility = "visible";
  }
  if (nclick >= 2) {
    document.getElementById("notepadArea").style.visibility = "visible";
  }
  let t = setTimeout(function(){ resetSecondNote() }, 750);
}
function resetSecondNote() {
  nclick = 0;
  //document.getElementById("notepad").style.cursor = "url(\"cursor.png\") 4 4, default";
}

function openConsole() {
  cclick++;
  
  
  if (cclick == 1) {
    //document.getElementById("console").style.cursor = "url(\"pointer.png\") 28 4, pointer";
    document.getElementById("consoleSelection").style.visibility = "visible";
  }
  if (cclick >= 2) {
    document.getElementById("consoleArea").style.visibility = "visible";
    document.addEventListener("keydown", keyer, false);
  }
  let t = setTimeout(function(){ resetSecondCon() }, 750);
}
function resetSecondCon() {
  cclick = 0;
  //document.getElementById("console").style.cursor = "url(\"cursor.png\") 4 4, default";
}

function rectRect(r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) {

  // are the sides of one rectangle touching the other?

  if (r1x + r1w >= r2x &&    // r1 right edge past r2 left
      r1x <= r2x + r2w &&    // r1 left edge past r2 right
      r1y + r1h >= r2y &&    // r1 top edge past r2 bottom
      r1y <= r2y + r2h) {    // r1 bottom edge past r2 top
        return true;
  }
  return false;
}

function removeNote() {
  document.getElementById("notepadArea").style.visibility = "hidden";
}

function removeCon() {
  document.getElementById("consoleArea").style.visibility = "hidden";
  document.removeEventListener("keydown", keyer);
}





