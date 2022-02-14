console.log("-> Writing it right now");
window.syntaxui = [];
// inserting
 var doc = document;
 var bod = doc.body;

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
   * { font-family: Arial; box-sizing: border-box; -webkit-touch-callout: none; user-select: none  } 
   .holder {
      position: fixed;
      border: 2px solid #505050;
      overflow: hidden;
      background-color: #1E1E1E;
      height: 300px;
      transition: height 1s, width 1s;
      border-radius: 12px;
      width: 500px;
      animation: fadeEffect 0.4s
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
     background-color: #2e2e2e;
   } 
   .list button.active {
     color: #ff9100;
     background-color: #474747;
   }
   .tabcontent {
     float: right;
     padding: 0px 6px;
     width: 393px;
     margin: -16px 0px 0px -12px;
     display: none;
     border-left: none;
     height: 300px;
     overflow: hidden;
     animation: fadeEffect 0.4s
   }
   @keyframes fadeEffect {
     from {opacity: 0;}
     to {opacity: 1;}
   }`
document.getElementsByTagName('head')[0].appendChild(style);
 // UI
  var holder = doc.createElement("div");
  document.body.appendChild(holder);
  holder.setAttributeNode(createatt("id","syntax"));
  holder.setAttributeNode(createatt("class","holder"));
  var title = doc.createElement("h3");
    holder.appendChild(title);
    title.setAttributeNode(createatt("id","syntaxtitle"))
    title.setAttributeNode(createatt("style","color:#fc9d03; margin:4px 0px 0px 4px"));
    title.innerText = "Syn";
    var titlespan = doc.createElement("span");
     titlespan.innerText = "tax ";
     title.appendChild(titlespan);
     titlespan.setAttributeNode(createatt("style","color:#a6a6a6"));
  var close = doc.createElement("h3");
    holder.appendChild(close);
    close.setAttributeNode(createatt("id","close"));
    close.setAttributeNode(createatt("style","color:#eb4034; margin: -24px 8px 0px 0px; float: right"));
    close.setAttributeNode(createatt("onclick","document.getElementById('syntax').style.display = 'none';"));
    close.innerText = "X";
  var mini = doc.createElement("h3");
    holder.appendChild(mini);
    mini.setAttributeNode(createatt("id","minimize"));
    mini.setAttributeNode(createatt("style","color:#d7d7d7; margin: -24px 28px 0px 0px; float: right"));
    mini.innerText = "P ";
    mini.onclick = function(){
      if (holder.style.height === "30px") {
        holder.style.height = "300px";
        holder.style.width = "500px";
        titlespantwo.innerText = "─";
      } else {
        holder.style.height = "30px";
        holder.style.width = "156px";
        titlespantwo.innerText = "+";
      }
    }
    var titlespantwo = doc.createElement("span");
     titlespantwo.innerText = "─";
     mini.appendChild(titlespantwo);
     titlespantwo.setAttributeNode(createatt("style","color:#eb4034"));
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
  
  holder.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
    
    function mouseMoveHandler(e) {
      holder.style.top = (e.clientY - offsetY) + 'px';
      holder.style.left = (e.clientX - offsetX) + 'px';
    }

    function reset() {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
  });
    
  // syntaxui
   syntaxui.tab = function(name){
    let tabtbl = [];
    let btn = doc.createElement("button");
     list.appendChild(btn);
     btn.setAttributeNode(createatt("id",name + "Btn"));
     btn.setAttributeNode(createatt("class","tablinks"));
     btn.onclick = function(){
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      tab.style.display = "block";
      btn.className += " active";
     }
     btn.innerText = name;
    let tab = doc.createElement("div");
      holder.appendChild(tab);
      tab.setAttributeNode(createatt("id",name));
      tab.setAttributeNode(createatt("class","tabcontent"));
      let tabtitle = doc.createElement("h3");
        tab.appendChild(tabtitle);
        tabtitle.setAttributeNode(createatt("id",name + "title"));
        tabtitle.setAttributeNode(createatt("style","color:d7d7d7"));
        tabtitle.textContent = name;
      let tabholder = doc.createElement("div");
        tab.appendChild(tabholder);
        tabholder.setAttributeNode(createatt("id",name+"holder"));
        tabholder.setAttributeNode(createatt("class","tabcontent"));
    tabtbl.button = function(name,callback){
      let btntbl = [];
      return btntbl;
    }
    tabtbl.toggle = function(name,callback){
      let tgltbl = [];
      return tgltbl;
    }
    tabtbl.button = function(name,callback){
      let btntbl = [];
      return btntbl;
    }
    return tabtbl;
   };
