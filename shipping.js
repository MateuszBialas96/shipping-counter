var myreset = [12, 00, 00]; // Reset - 12:00:00
const dupa = new Date();
let day = dupa.getDay();
const hour = dupa.getHours(); 
// Added myCountDownDiv variable to prevent jquery from walking the DOM o every update
var myCountDownDiv = document.getElementById('mycountdown');

var mycountdown = startCountdown();

function startCountdown() {
  var enddate = calculateEndDate();
  return setInterval(function() {
    tickTock(calculateStartDate(), enddate)
  }, 1000);
}

function calculateStartDate() {
  return new Date();
}

function calculateEndDate() {
  var enddate = new Date();
  enddate.setHours(myreset[0]);
  enddate.setMinutes(myreset[1]);
  enddate.setSeconds(myreset[2]);
  return enddate;
}

function tickTock(startdate, enddate) {
  var diff = enddate.getTime() - startdate.getTime();
  d = diff >= 0 ? diff : diff + 24 * 3600 * 1000;
  var h = Math.floor(d / 3600 / 1000);
  var m = Math.floor(d / 60 / 1000) - 60 * h;
  var s = Math.floor(d / 1000) - 3600 * h - 60 * m;
  if (day != 5 || day!=7 || hour < 11) {
    printCountdown(h, m, s);
	console.log(hour);
	console.log(day);
  }
}

function pluralize(word, count) {
  return (count > 1) ? word + ' ' : word + ' ';
}

function printCountdown(h, m, s) {

  var t = ' Zamów przez: ' + h + pluralize(' godzin', h) + m + pluralize(' minut', m) + ' i ' + s + pluralize(' sekund', s) + ' , aby wysyłka została zrealizowana tego samego dnia ! ';

  myCountDownDiv.innerText = t;
  // Usunięcie jquery
  //$('#mycountdown').html(t); 
}