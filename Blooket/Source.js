javascript: (async function () {
  var el = `
    <div id="phobia" style="draggable: true;position:fixed;background: #232323;border: 1px #000 solid;right:50px;top:50px;z-index:1000;width:350px;height:500;">
      <h4 style="color: white;font-family: Arial;margin: 4px 0;position: absolute; top:0; left:0;">Phobia.fun | Blooket | hide menu: p</h4>
      <button id="Close" style="background: #232323;border-style: none;color: red;position:absolute; top:0; right: 0;font-size: 21px;">X</button>
      <hr style="margin: 28px 0;background-color: black;color: black;height: 0px;border-style: none;width: 400">
      <style>
       .phobia {
         height: 500;
       }
       .tab {
        overflow: hidden;
        border: 0px solid #000000;
        background-color: #232323;
       }
       .tab button {
         background: #232323;
         border: 1px #000 solid;
         color: grey;
         float: left;
         margin: -29px -2;
         padding: 0px 4px;
         transition: 0.3s;
         font-size: medium;
        }
        .tabcontent {
          display: none;
          padding: 6px 12px;
          border: 1px solid #000;
          border-top: none;
        }
        tab button.active {
          background-color: #ccc;
        }
        .tab button:hover {
          color: #ddd;
        }
        body {font-family: Arial;}
      </style>
      <div class="tab">
        <button class="tablinks" id="HomeBtn"> Home</button>
        <button class="tablinks" id="GoldBtn">Gold Quest</button>
        <button class="tablinks" id="FishingBtn">Fishing Frenzy</button>
        <button class="tablinks" id="CryptoBtn">Crypto Hack</button>
        <button class="tablinks" id="TowerBtn">Tower Defense</button>
        <button class="tablinks" id="CafeBtn">Cafe</button>
        <button class="tablinks" id="FactoryBtn">Factory</button>
        <button class="tablinks" id="RacingBtn">Racing</button>
        <button class="tablinks" id="KingdomBtn">Kingdom</button>
        <button class="tablinks" id="DoomBtn">Tower Of Doom</button>
      </div>
      <div id="Home" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Home</h4>
        <h7 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Phobia Bookmarklet loaded!</h7>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">If you want to hide your cheats, press P</h6>
        <h5 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Phobia devs: </h5>
        <ul>
          <li style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">urDakota</li>
          <li style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Cloudy_Skies</li>
        </ul>
        <a href="https://discord.gg/33ZYhD8vFa" style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Join our discord!</a>
        <div class="tab">
          <button class="tablinks" id="AddTokens">Add Tokens</button>
          <button class="tablinks" id="BypassName">Bypass Name</button>
          <button class="tablinks" id="AllCorrect">All Answers Correct</button>
        </div>
      </div>
      <div id="Gold" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Gold Quest</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setGold">Set Gold</button>
          <button class="tablinks" id="ChestESP">Chest ESP</button>
        </div>
      </div>
      <div id="Fishing" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Fishing Frenzy</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Script Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setWeight">Set Weight</button>
        </div>
      </div>
      <div id="Crypto" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Crypto Hack</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setCrypto">Set Crypto</button>
          <button class="tablinks" id="getPasswords">Get Players Passwords</button>
        </div>
      </div>
      <div id="Tower" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Tower Defense</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setCashT">Set Cash</button>
          <button class="tablinks" id="killEnemies">Kill All KillEnemies</button>
          <button class="tablinks" id="setRound">Change round</button>
        </div>
      </div>
      <div id="Cafe" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Cafe</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setCashC">Set Cash</button>
          <button class="tablinks" id="infFood">Infinite Food LVL</button>
          <button class="tablinks" id="infStock">Infinite Stock</button>
        </div>
      </div>
      <div id="Factory" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Factory</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setCashF">Set Cash</button>
          <button class="tablinks" id="getMegaBot">Get Mega Bot</button>
        </div>
      </div>
      <div id="Racing" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Racing</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Script Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="winGame">Win Instantly</button>
        </div>
      </div>
      <div id="Kingdom" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Kingdom</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="choiceESP">Choice ESP</button>
          <button class="tablinks" id="maxResources">Max Resources</button>
          <button class="tablinks" id="noTaxes">No Taxes</button>
          <button class="tablinks" id="setGuests">Set Guests</button>
          <button class="tablinks" id="skipGuest">Skip Guest</button>
        </div>
      </div>
      <div id="Doom" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Tower Of Doom</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="setCashD">Set Coins</button>
          <button class="tablinks" id="lowerStats">Lower Enemy Stats</button>
          <button class="tablinks" id="lowerCharisma">Lower Enemy Charisma</button>
          <button class="tablinks" id="lowerStrength">Lower Enemy Strength</button>
          <button class="tablinks" id="lowerWisdom">Lower Enemy Wisdom</button>
        </div>
      </div>
    </div>`;
  document.body.innerHTML += el;
  document.getElementById('Close').addEventListener("click", function () {
    document.getElementById('phobia').remove();
  });
  
  let scripts = [
    'Home',
      ['AddTokens', 'BypassName', 'AllCorrect'],
    'Gold',
      ['setGold', 'ChestESP'],
    'Fishing',
      ['setWeight'],
    'Crypto',
      ['setCrypto', 'getPasswords'],
    'Tower',
      ['setCashT', 'killEnemies', 'setRound'],
    'Cafe',
      ['setCashC', 'infFood', 'infStock'],
    'Factory',
      ['setCashF', 'getMegaBot'],
    'Racing',
      ['winGame'],
    'Kingdom',
      ['setGuests', 'choiceESP', 'maxResources', 'noTaxes', 'skipGuest'],
    'Doom',
      ['setCashD', 'lowerStats', 'lowerCharisma', 'lowerStrength', 'lowerWisdom']
  ]
  scripts.forEach((element) => {
    if(Array.isArray(element) === false){
      index = scripts.indexOf(element);
      if(index >= 0 && index < scripts.length - 1){
        nextItem = scripts[index + 1]; 
        let btn = element + "Btn"; 
        document.getElementById(btn).addEventListener("click", function () {
          var i, tabcontent, tablinks; 
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
            
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.color = "grey";
          }
          document.getElementById(element).style.display = "block";
          document.getElementById(btn).style.color = "#FFA500";
        }); 
        nextItem.forEach((exe) => {
          document.getElementById(exe).addEventListener("click", function () {
            fetch("https://raw.githubusercontent.com/urdakota/phobia/main/Blooket/" + element + "/" + exe + ".js").then((res) => res.text().then((t) => eval(t)));
          });
        });
      };
    };
  });
  // Hide on P
    window.onkeyup = function (event) {
      if (event.keyCode == 80) {
        if(document.getElementById("phobia").style.visibility==="visible"){
          document.getElementById("phobia").style.visibility="hidden"
        } else {
          document.getElementById("phobia").style.visibility="visible";
        }
      }
  }
  // drag 
    var elmnt = (document.getElementById("phobia"));
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
  document.getElementById('HomeBtn').click();
  
}());


