var keyMap = {
  65: "A",
  83: "S",
  68: "D",
  70: "F",
  71: "G",
  72: "H",
  74: "J",
  75: "K",
  76: "L"
}

var audioMap = {
  65: new Audio('sounds/clap.wav'),
  83: new Audio('sounds/hihat.wav'),
  68: new Audio('sounds/kick.wav'),
  70: new Audio('sounds/openhat.wav'),
  71: new Audio('sounds/boom.wav'),
  72: new Audio('sounds/ride.wav'),
  74: new Audio('sounds/snare.wav'),
  75: new Audio('sounds/tom.wav'),
  76: new Audio('sounds/tink.wav')
}


document.addEventListener('keydown', function (event) {
  if (event.keyCode in keyMap) {
    var d = document.getElementById(keyMap[event.keyCode]);
    d.className += " playing";
    audioMap[event.keyCode].play();
  }
})

document.addEventListener('keyup', function (event) {
  if (event.keyCode in keyMap) {
    var d = document.getElementById(keyMap[event.keyCode]);
    d.className = "key";
  }
})

