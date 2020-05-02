const pressed = new Array;
const secretCode = "aksh";

function seqCheck(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("") === secretCode) {
    cornify_add();
    $(initial).empty();
  }
}

window.addEventListener('keydown', seqCheck);