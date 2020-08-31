const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
//alert(date); // current date and time

let hr = date.getHours(); // current hour
let min = date.getMinutes();// current minute
let sec = date.getSeconds(); // current seconds
//alert ("HouR " + hr  + " Minutes " + min + " seconds " + sec);

let hrPosition = (hr*360/12)+ (min*(360/60)/12);
let minPosition  = (min * 360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheclock(){

  hrPosition = hrPosition+(30/3600);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+(6);



  HOURHAND.style.transform = "rotate(" + hrPosition +"deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition +"deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition +"deg)";
}

/*The setInterval() method, offered on the Window and Worker interfaces,
repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
more details at https://goo.gl/zqQrex*/

var interval = setInterval(runTheclock,1000); //1000ms = 1 sec
