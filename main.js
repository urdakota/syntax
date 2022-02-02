let URL=window.location.hostname;
let support = ['blooket','edpuzzle','kahoot','gimkit'];
support.forEach(function(string,index){
 if(URL.toLowerCase().includes(string)){
  fetch(`https://raw.githubusercontent.com/urdakota/syntax/main/${string}/index.js`).then((res) => res.text().then((t) => eval(t)));
 }
})