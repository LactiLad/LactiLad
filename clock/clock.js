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

    var r = hh * 21.3333333333;
    var g = mm * 4.33898305085;
    var b = ss * 4.33898305085;
    
    if (s)
      b = 256-b;
    if (m)
      g = 256-g;
    if (h)
      r = 256-r;
    
    document.body.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    
    var vr = Math.round(r);
    var vg = Math.round(g);
    var vb = Math.round(b);
    vr = (vr < 10) ? "0" + vr : vr;
    vr = (vr < 100) ? "0" + vr : vr;
    vg = (vg < 10) ? "0" + vg : vg;
    vg = (vg < 100) ? "0" + vg : vg;
    vb = (vb < 10) ? "0" + vb : vb;
    vb = (vb < 100) ? "0" + vb : vb;
    document.getElementById("color").innerText = "rgb("+vr+", "+vg+", "+vb+")";//+s+m+h;

    r = 256-r;
    g = 256-g;
    b = 256-b;
    
    document.getElementById("clock").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("session").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("seconds").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("date").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("colon").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("color").style.color = "rgb("+r+", "+g+", "+b+")";
  }
  
  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime(clockStyle) }, 1000);
}