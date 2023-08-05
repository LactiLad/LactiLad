var con = document.getElementById("consoleInput");

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
  if (e.key == "Escape") {
    document.getElementById("consoleArea").style.visibility = "hidden";
    document.removeEventListener("keydown", keyer);
    key = "";
  }if (e.key == "Backspace") {
    key = "";
    con.innerHTML = con.innerHTML.substring(0,con.innerHTML.length-1);
  }if (e.key == "Enter") {
    key = "";
    var div = document.createElement("div");
    div.class = "consoleLogUnit";
    div.innerHTML = conInput(con.innerHTML);
    document.getElementById("consoleLog").appendChild(div);
    con.innerHTML = "";
  }
  con.innerHTML += key;
  if (con.innerHTML.length == 0) {
    document.getElementById("inputIndicator").style.visibility = "visible";
  } else {
    document.getElementById("inputIndicator").style.visibility = "hidden";
  }
  console.log(e.key);
}

function conInput(input) {
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








