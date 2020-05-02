function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}


function checkSlide() {
    $('.slide-in').each(function(index) {
        //console.log($(this).height());
        const slideInAt = (window.scrollY + window.innerHeight) - $(this).height() / 2;
        const imageBottom = $(this).offset().top; + $(this).height();
        const isHalfShown = slideInAt > $(this).offset().top;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));