import { interpolate } from '/clock/node_modules/culori/src/index.js';
import { formatRgb } from '/clock/node_modules/culori/src/index.js';
import { formatHex8 } from '/clock/node_modules/culori/src/index.js';
import { convertOkhsvToOklab } from '/clock/node_modules/culori/src/index.js';
import { convertOklabToRgb } from '/clock/node_modules/culori/src/index.js';
currentTime("color");

var s = false;
var m = false;
var h = false;

function currentTime(clockStyle) {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let dy = date.getDate();
  let mh = date.getMonth();
  let yr = date.getFullYear();

  let session = "A";
  
  if (ss === 0) {//11:11.0
    s = (s) ? false : true;
    if (mm === 0) {//11:0.0
      m = (m) ? false : true;
      if (hh === 0) {//0.0.0
        h = (h) ? false : true;
      }
    }
  }
  if(hh === 0) {
    hh = 12;
  }
  if(hh > 12) {
    hh = hh - 12;
    session = "P";
  }

  hh = (hh < 10) ? "0" + hh : hh;//if less than ten add, else normal
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  dy = (dy < 10) ? "0" + dy : dy;
  mh = (mh < 10) ? "0" + mh : mh;
   
  let time = hh + ":" + mm + " " + session + "M";
  
  if (clockStyle === "boring") {
    time = session + " " + hh + " " + mm + " "+ ss + "\n" + mh + " " + dy + " " + yr;
  } else if (clockStyle === "color") {
    time = hh + " " + mm;
    document.getElementById("session").innerText = session + "M";
    document.getElementById("seconds").innerText = ss;
    document.getElementById("date").innerText = mh + " " + dy + " " + yr;
    
    var totalTime = (((date.getHours() * 60) + date.getMinutes()) * 60) + date.getSeconds() + date.getMilliseconds()/1000.0;

    var value = (Math.cos(2.0 * Math.PI * (totalTime/86400.0 + 0.5))/2.0 + 0.5);

    var color = convertOklabToRgb(convertOkhsvToOklab({mode: "hsv", h: totalTime, s: value, v: value, alpha: 1}));
    var invColor = {mode: "rgb", r: 1 - color.r, g: 1 - color.g, b: 1 - color.b, alpha: 1};
    var simColor = interpolate([color, invColor])(0.25);

    // console.log(totalTime);
    // console.log(value);

    document.body.style.backgroundColor = formatHex8(color);
    document.getElementById("color").innerText = formatRgb(color);
    document.getElementById("clock").style.color = formatHex8(invColor);
    document.getElementById("session").style.color = formatHex8(invColor);
    document.getElementById("seconds").style.color = formatHex8(invColor);
    document.getElementById("date").style.color = formatHex8(invColor);
    document.getElementById("colon").style.color = formatHex8(invColor);
    document.getElementById("color").style.color = formatHex8(simColor);
    document.getElementById("menuOpenButton").style.color = formatHex8(simColor);
  }
  
  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime(clockStyle) }, 100);//every 1/19th seconds
}

function openMenu() {
  document.getElementById("menu").style.visibility = "visible";
}