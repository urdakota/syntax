console.log("-> Writing it right now");
var UIconst = [];
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
 bod += `<div id="syntax" class = "holder"></div>`;
 var holder = doc.getElementById("syntax") 

 holder += `<h3 style="color: #fcba03; margin: 4px 0px 0px 4px">Syn<span style="color: #a6a6a6">tax</span></h3>`

// scripting
