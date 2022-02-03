console.log("-> Writing it right now");
var bruh = [];
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
  .list {
   float: left;
   border: 2px solid #505050;
   overflow: hidden;
   background-color: #1E1E1E;
   transition: 0.4s;
   border-radius: 12px;
   margin: 0px 0px 0px -12px;
   width: 115px;
   height: 300px;
 }
    .list button {
      display: block;
      background-color: #1E1E1E;
      color: grey;
      padding: 4px 16px;
      width: 100%;
      border: 0px solid #2d2d2d;
      border-radius: 0px;
      outline: none;
      text-align: center;
      cursor: pointer;
      transition: 0.3s;
    }
    .list button:hover {
      color: #ddd;
      background-color: #2d2d2d;
    }
 .list button.active {
      color: #ff9100;
      background-color: #1E1E1E;
 }
    .tabcontent {
      float: right;
      padding: 0px 12px;
      width: 393px;
      border-left: none;
      height: 300px;
      overflow: hidden
    }
    .tablinks {
    
    }
</style`

 // UI
  var holder = doc.createElement("div");
  document.body.appendChild(holder);
  holder.setAttributeNode(createatt("id","syntax"));
  holder.setAttributeNode(createatt("class","holder"));
  var title = doc.createElement("h3");
    holder.appendChild(title);
    title.setAttributeNode(createatt("style","color:#fc9d03; margin:4px 0px 0px 4px"));
    title.innerText = "Syn";
    var titlespan = doc.createElement("span");
     titlespan.innerText = "tax ";
     title.appendChild(titlespan);
     titlespan.setAttributeNode(createatt("style","color:#a6a6a6"));
    var titlespantwo = doc.createElement("span");
     titlespantwo.innerText = "P";
     title.appendChild(titlespantwo);
     titlespantwo.setAttributeNode(createatt("style","color:#d7d7d7"));
  var close = doc.createElement("h3");
    holder.appendChild(close);
    close.setAttributeNode(createatt("id","close"));
    close.setAttributeNode(createatt("style","color:#eb4034; margin: -24px 8px 0px 0px; float: right"));
    close.setAttributeNode(createatt("onclick","document.getElementById('syntax').style.display = 'none';"));
    close.innerText = "X";
  var mini = doc.createElement("h3");
    holder.appendChild(mini);
    mini.setAttributeNode(createatt("id","minimize"));
    mini.setAttributeNode(createatt("style","color:#eb4034; margin: -24px 28px 0px 0px; float: right"));
    mini.setAttributeNode(createatt("onclick","minimize();"));
    mini.innerText = "─";
  var list = doc.createElement("div");
    holder.appendChild(list);
    list.setAttributeNode(createatt("id","listing"));
    list.setAttributeNode(createatt("class","list"));
    
// scripting
  function createatt(att,val){
   let at = document.createAttribute(att);
   at.value=val;
   return at;
  }
  function minimize() {
      if (document.getElementById("syntax").style.height === "32px") {
        document.getElementById("syntax").style.height = "300px";
        document.getElementById("syntax").style.width = "500px";
        document.getElementById("minimize").innerHTML = "─";
      } else {
        document.getElementById("syntax").style.height = "32px";
        document.getElementById("syntax").style.width = "156px";
        document.getElementById("minimize").innerHTML = "+";
      }
  }
  function openTab(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
  }
  document.addEventListener("keydown", function() {
      var k = event.keyCode || event.which;
      if (k === 80) {
        if (document.getElementById("syntax").style.display === "none") {
        document.getElementById("syntax").style.display = "block";
      } else {
        document.getElementById("syntax").style.display = "none";
      	}
      }
  });
    
  bruh.tab = function(name){
    let tabtbl = [];
    let btn = doc.createElement("button");
     list.appendChild(btn);
     btn.setAttributeNode(createatt("id",name + "Btn"));
     btn.setAttributeNode(createatt("class","tablinks"));
     btn.setAttributeNode(createatt("onclick",`openTab(event,${name})`));
     btn.innerText = name;
    let tab = doc.createElement("div");
      holder.appendChild(tab);
      tab.setAttributeNode(createatt("id",name));
      tab.setAttributeNode(createatt("class","tabcontent"));
      
    return tabtbl;
  };
  
 let HomeTab = bruh.tab("Homer");
 let creamTab = bruh.tab("Cream");