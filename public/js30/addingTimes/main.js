const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

console.log(timeNodes);

var total_time = 0;

for(var i = 0; i<timeNodes.length; i++) {
    var time = timeNodes[i].attributes[0].nodeValue;
    time = time.split(":").map(parseFloat);
    total_time = total_time + time[0]*60 + time[1];
}

console.log(total_time);
var hrs = Math.floor(total_time/3600);
total_time = total_time%3600;
var mins = Math.floor(total_time/60);
total_time = total_time%60;

console.log("total time is " + hrs + " : " + mins + " : " + total_time);

var html = "Total time is " + hrs + " hrs : " + mins + " mins : " + total_time + " secs ";

$("#total").append(html);