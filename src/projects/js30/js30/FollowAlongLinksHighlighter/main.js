const highlight = $(".highlight")[0];
console.log(highlight);

function highlightLink() {
    console.log(this);
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  }


$(document).ready(function(){
    $("a").mouseenter(highlightLink);
});