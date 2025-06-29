let day = "";
switch (new Date().getDay()) { 
    // getDay() returns 0-6 (Sun-Sat)
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(day);


let bar = "";
let date = new Date().getDate();

switch (date) {
  case 1:
    bar = "First day of the month";
    break;
  case 15:
    bar = "Middle of the month";
    break;
  case 31:
    bar = "Last day (if 31-day month)";
    break;
  default:
    bar = "Just another day";
}

console.log(bar);

let x = "0";
let text = "";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text);//No value found
