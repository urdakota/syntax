javascript: (function() {
    var el = '
    <div id="phobia" style="position:fixed;background: #232323;border: 1px #000 solid;right:50px;top:50px;z-index:1000;width:350px;height:500;">
      <h4 style="color: white;margin: 5px 5;position: fixed;font-family: Arial;">Phobia | Blooket</h4>
      <button id="Close" style="background: #232323;border-style: none;color: red;margin: -0px 329;position: fixed;font-size: 22px;">X</button>
      <hr style="margin: 28px 0;background-color: black;color: black;height: 1px;border-style: none;">
      <div>
        <button id="BTN1" style="background: #232323;border: 1px #000 solid;color: gray;margin: -29px -1;position: fixed;font-size: medium;">Home</button>
        <button id="BTN2" style="background: #232323;border: 1px #000 solid;color: gray;margin: -29px 49;position: fixed;font-size: medium;">Gold Quest</button>
        <button id="BTN3" style="background: #232323;border: 1px #000 solid;color: gray;margin: -29px 136;position: fixed;font-size: medium;">Fishing Frenzy</button>
        <button id="BTN4" background:="" style="background: #232323;border: 1px #000 solid;color: gray;margin: -29px 246;position: fixed;font-size: medium;width: 105;">Crypto Hack</button>
        <button id="BTN5" style="background: #232323;border: 1px #000 solid;color: gray;margin: -7px -1;position: fixed;font-size: medium;">Tower Defense</button>
        <button style="background: #232323;border: 1px #000 solid;color: gray;margin: -7px 113;position: fixed;font-size: medium;" id="BTN6">Cafe</button>
        <button id="BTN7" style="background: #232323;border: 1px #000 solid;color: gray;margin: -7px 153;position: fixed;font-size: medium;">Factory</button>
        <button id="BTN8" style="background: #232323;border: 1px #000 solid;color: gray;margin: -7px 213;position: fixed;font-size: medium;">Racing</button>
        <button id="BTN9" background:="" style="background: #232323;border: 1px #000 solid;color: gray;margin: -7px 269;position: fixed;font-size: medium;width: 82;">Kingdom</button>
        <button id="BTN10" style="background: #232323;border: 1px #000 solid;color: gray;margin: 15px -1;position: fixed;font-size: medium;">Tower Of Doom</button>
        <button id="BTN11" style="background: #232323;border: 1px #000 solid;color: gray;margin: 15px 119;position: fixed;font-size: medium;">Classic</button>
        <button id="BTN12" style="background: #232323;border: 1px #000 solid;color: gray;margin: 15px 175;position: fixed;font-size: medium;">Credits</button>
        <div>
         <br>
         <hr style="display: block; margin: 19px 0; background-color: black; height: 1px; border-style: none; /*e;">
        </div>
      </div>
    </div>';
    document.body.innerHTML += el;
    document.getElementById('Close').addEventListener("click", function () {
        document.getElementById('phobia').remove();
    });
}());
