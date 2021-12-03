var el = `
    <div id="phobia" style="position:fixed;background: #232323;border: 1px #000 solid;right:50px;top:50px;z-index:1000;width:350px;height:500;">
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
        <button class="tablinks" id="GoldQuestBtn">Gold Quest</button>
        <button class="tablinks" id="FishingFrenzyBtn">Fishing Frenzy</button>
        <button class="tablinks" id="CryptoHackBtn">Crypto Hack</button>
        <button class="tablinks" id="TowerDefenseBtn">Tower Defense</button>
        <button class="tablinks" id="CafeBtn">Cafe</button>
        <button class="tablinks" id="FactoryBtn">Factory</button>
        <button class="tablinks" id="RacingBtn">Racing</button>
        <button class="tablinks" id="KingdomBtn">Kingdom</button>
        <button class="tablinks" id="TowerOfDoomBtn">Tower Of Doom</button>
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
      <div id="Gold Quest" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Gold Quest</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="GetGold">Set Gold</button>
          <button class="tablinks" id="ChestESP">Chest ESP</button>
        </div>
      </div>
      <div id="Fishing Frenzy" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Fishing Frenzy</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Script Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="SetWeight">Set Weight</button>
        </div>
      </div>
      <div id="Crypto Hack" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Crypto Hack</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="SetCrypto">Set Crypto</button>
          <button class="tablinks" id="GetPassword">Get Players Passwords</button>
        </div>
      </div>
      <div id="Tower Defense" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Tower Defense</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="SetCash">Set Cash</button>
          <button class="tablinks" id="KillEnemies">Kill All KillEnemies</button>
          <button class="tablinks" id="ChangeRound">Change round</button>
        </div>
      </div>
      <div id="Cafe" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Cafe</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="SetCashCafe">Set Cash</button>
          <button class="tablinks" id="InfiniteFoodLVL">Infinite Food LVL</button>
          <button class="tablinks" id="InfiniteStock">Infinite Stock</button>
        </div>
      </div>
      <div id="Factory" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Factory</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="SetCashFactory">Set Cash</button>
          <button class="tablinks" id="GetMegaBot">Get Mega Bot</button>
        </div>
      </div>
      <div id="Racing" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Racing</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Script Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="WinGame">Win Instantly</button>
        </div>
      </div>
      <div id="Kingdom" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Kingdom</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="ChoiceESP">Choice ESP</button>
          <button class="tablinks" id="MaxResources">Max Resources</button>
          <button class="tablinks" id="NoTaxes">No Taxes</button>
          <button class="tablinks" id="SetGuests">Set Guests</button>
          <button class="tablinks" id="SkipGuest">Skip Guest</button>
        </div>
      </div>
      <div id="TowerOfDoom" class="tabcontent">
        <h4 style="color: white;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Tower Of Doom</h4>
        <h6 style="color: grey;font-family: Arial;margin: 4px 0;position: initial; top:0; left:0;">Scripts Made by glizzz_y</h6>
        <div class="tab">
          <button class="tablinks" id="AddCoinsTOD">Set Coins</button>
          <button class="tablinks" id="LowerEnemyStats">Lower Enemy Stats</button>
          <button class="tablinks" id="LowerEnemyCharisma">Lower Enemy Charisma</button>
          <button class="tablinks" id="LowerEnemyStrength">Lower Enemy Strength</button>
          <button class="tablinks" id="LowerEnemyWisdom">Lower Enemy Wisdom</button>
        </div>
      </div>
    </div>`;
  document.body.innerHTML += el;
  document.getElementById('Close').addEventListener("click", function () {
    document.getElementById('phobia').remove();
  });
  // Home
    document.getElementById('HomeBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById('Home').style.display = "block";
      document.getElementById('HomeBtn').style.color = "#FFA500";
    });
    document.getElementById('AddTokens').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/addTokens.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById("BypassName").addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/bypassRandomName.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('AllCorrect').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/getEveryAnswerCorrect.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Gold Quest
    document.getElementById('GoldQuestBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById('Gold Quest').style.display = "block";
      document.getElementById('GoldQuestBtn').style.color = "#FFA500";
    });
    document.getElementById('GetGold').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/gold/getGold.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('ChestESP').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/gold/chest-ESP.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Fishing Frenzy
    document.getElementById('FishingFrenzyBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Fishing Frenzy").style.display = "block";
      document.getElementById('FishingFrenzyBtn').style.color = "#FFA500";
    });
    document.getElementById('SetWeight').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/fishing-frenzy/setWeight.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Crypto Hack
    document.getElementById('CryptoHackBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Crypto Hack").style.display = "block";
      document.getElementById('CryptoHackBtn').style.color = "#FFA500";
    });
    document.getElementById('SetCrypto').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crypto/getCrypto.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('GetPassword').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crypto/getOtherUsersPassword.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Tower Defense
    document.getElementById('TowerDefenseBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Tower Defense").style.display = "block";
      document.getElementById('TowerDefenseBtn').style.color = "#FFA500";
    });
    document.getElementById('SetCash').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/getCash.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('KillEnemies').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/clearEnemies.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('ChangeRound').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/changeGameRound.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Cafe
    document.getElementById('CafeBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Cafe").style.display = "block";
      document.getElementById('CafeBtn').style.color = "#FFA500";
    });
    document.getElementById('SetCashCafe').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/getCoins.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('InfiniteFoodLVL').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/infiniteFoodLevel.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('InfiniteStock').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/stockInfiniteFood.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Factory
    document.getElementById('FactoryBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Factory").style.display = "block";
      document.getElementById('FactoryBtn').style.color = "#FFA500";
    });
    document.getElementById('SetCashFactory').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/factory/getCash.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('GetMegaBot').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/factory/getMegaBot.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Racing
    document.getElementById('RacingBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Racing").style.display = "block";
      document.getElementById('RacingBtn').style.color = "#FFA500";
    });
    document.getElementById('WinGame').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/racing/instantWin.js").then((res) => res.text().then((t) => eval(t)));
    });
  // Kingdom
    document.getElementById('KingdomBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("Kingdom").style.display = "block";
      document.getElementById('KingdomBtn').style.color = "#FFA500";
    });
    document.getElementById('ChoiceESP').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/ChoiceESP.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('MaxResources').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/MaxResources.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('NoTaxes').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/NoTaxes.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('SetGuests').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/SetGuests.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('SkipGuest').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/SkipGuest.js").then((res) => res.text().then((t) => eval(t)));
    });
  // TowerOfDoom
    document.getElementById('TowerOfDoomBtn').addEventListener("click", function () {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "grey";
      }
      document.getElementById("TowerOfDoom").style.display = "block";
      document.getElementById('TowerOfDoomBtn').style.color = "#FFA500";
    });
    document.getElementById('LowerEnemyStats').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerAllEnemyStats.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('LowerEnemyCharisma').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyCharisma.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('LowerEnemyStrength').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyStrength.js").then((res) => res.text().then((t) => eval(t)));
    });
    document.getElementById('LowerEnemyWisdom').addEventListener("click", function () {
      fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyWisdom.js").then((res) => res.text().then((t) => eval(t)));
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
  document.getElementById('HomeBtn').click();
