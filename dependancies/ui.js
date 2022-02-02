console.log("-> Writing it right now");
// inserting
 var doc = document;
 var bod = doc.body;

 // style
 bod += `<style> 
  * { font-family: Arial; box-sizing: border-box } 
  .holder {
   position: fixed;
   border: 2px solid #505050;
   overflow: hidden;
   background-color: #1E1E1E;
   height: 300px;
   transition: 0.4s;
   border-radius: 12px;
   width: 500px;
  }
  </style`

 // UI
  var holder = doc.createElement("div", {id: "syntax", class: "holder"});
  document.body.appendChild(holder);
  var title = doc.createElement("h3",{style: "color: #fcb03; margin: 4px 0px 0px 4px"});
  holder.appendChild(title);
   title.innerText = "Syn";
   var titlespan = doc.createElement("span",{style: "color: #a6a6a6"});
   titlespan.innerText = "tax";
   title.appendChild(titlespan);
// scripting
