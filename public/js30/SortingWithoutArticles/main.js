const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


var compare = function(a, b) {
    aNew = removeArticles(a);
    bNew = removeArticles(b);
    
    if (aNew > bNew) return 1;
    if (aNew < bNew) return -1; 
  };
  
  function removeArticles(str) {
    words = str.split(" ");
    if(words.length <= 1) return str;
    if( words[0] == 'A' || words[0] == 'The' || words[0] == 'An' )
      return words.splice(1).join(" ");
    return str;
  }
  
  var sorted = bands.sort(compare);

  for(var i = 0; i<sorted.length; i++) {
      var html = '<li>'+ sorted[i] +'</li>';
      $("#bands").append(html);
  }
  console.log(sorted);
  