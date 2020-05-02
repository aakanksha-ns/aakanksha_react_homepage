setInterval(setCurrentTime, 1000);


var sec_hand = document.getElementById("sec");
var min_hand = document.getElementById("min");
var hr_hand = document.getElementById("hr");

function setCurrentTime() {
  var today = new Date();
  var hrs = today.getHours();
  var sec = today.getSeconds();
  var min = today.getMinutes();
  sec_hand.style.transform = 'rotate(' + (90 + 6 * sec) + 'deg)';
  min_hand.style.transform = 'rotate(' + (90 + 6 * min) + 'deg)';
  hr_hand.style.transform = 'rotate(' + (90 + 30 * hrs) + 'deg)';
}
