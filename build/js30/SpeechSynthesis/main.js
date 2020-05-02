const msg = new SpeechSynthesisUtterance();
let voices = [];
const options = document.querySelectorAll('[type="range"], [name="text"]');
const stopButton = document.querySelector('#stop');
voicesDropdown = $('[name="voice"]');

$(document).ready(function() {
    msg.text = $('[name="text"]').val();
    console.log(msg.text);
    
    function populateVoices() {
        voices = this.getVoices();
        voicesDropdown.html(  voices
          .filter(voice => voice.lang.includes('en'))
          .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
          .join(''));
    }

    function setVoice() {
       msg.voice = voices.find(voice => voice.name === this.value);
       toggle();
    }

    function speak() {
        speechSynthesis.speak(msg);
    }

    function stop() {
        speechSynthesis.cancel();
    }

    function toggle() {
        stop();
        speak();
    }

    function setOption() {
        console.log(this.name, this.value);
        msg[this.name] = this.value;
        toggle();
      }
    

    speechSynthesis.addEventListener('voiceschanged', populateVoices);
    voicesDropdown.change(setVoice);
    $("#speak").click(speak);
    $("#stop").click(stop);
    options.forEach(option => option.addEventListener('change', setOption));
})
