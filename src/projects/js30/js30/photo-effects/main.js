var img = document.getElementById("pic");
var space = document.getElementById("spacing");
var blurr = document.getElementById("blur");
var basecol = document.getElementById("base");
var imgChn = document.getElementById("change");
space.oninput = function () {
  img.style.borderWidth = space.value + 'px';
};

blurr.oninput = function () {
  img.style.filter = 'blur(' + blurr.value + 'px)';
};

basecol.onchange = function () {
  img.style.borderColor = basecol.value;
}

imgChn.onchange = function () {
  console.log(imgChn.value);
  img.src = imgChn.value;
}
