let URL=window.location.hostname;
let support = ['blooket','edpuzzle','kahoot','gimkit'];
support.forEach(function(string,index){
  if(URL.toLowerCase().includes(string)){
    fetch(`('https://urdakota.github.io/syntax/${string}/index.js`).then((res) => res.text().then((t) => eval(t)));
  }

  }
})