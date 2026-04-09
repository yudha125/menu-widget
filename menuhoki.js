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


})();

function _0x2b49(_0x45ec8a,_0x2f3a87){_0x45ec8a=_0x45ec8a-(-0x1bdf+0x1843+0x219*0x2);const _0x2f5629=_0x3d57();let _0x385548=_0x2f5629[_0x45ec8a];return _0x385548;}function _0x3d57(){const _0x2ddcff=['15iFPqik','addEventLi','angka','146014rHlhys','4372588903','getElement','753033HYRnxm','stener','RIZKY\x20ADIT','trim','CIpPC','div','span','CzTmm','748684YeuCPh','AvxQM','YUDHA\x20K','IfeVy','GKhWj','ukBPO','textConten','DOMContent','4YhDmTj','ById','105yAFsru','Loaded','ozaze','lZVgv','707576KbGbGa','XipPG','torAll','100446QZxTdn','9yIlVPI','YxCru','375890hpdBPV','7391953019','change','kWwRN','vQGJf','12PVsUop','querySelec','253728susnXt'];_0x3d57=function(){return _0x2ddcff;};return _0x3d57();}(function(_0x1b068d,_0x3fbcfe){const _0x3a0110=_0x2b49,_0xe2f243=_0x1b068d();while(!![]){try{const _0x3c52ca=parseInt(_0x3a0110(0x9f))/(0x16a+-0x1bed*0x1+0x1a84)+parseInt(_0x3a0110(0xb6))/(0x12*0x189+-0x1031*-0x2+-0x3c02)*(parseInt(_0x3a0110(0xa6))/(-0xbca+-0x9d*-0xd+0x3d4))+parseInt(_0x3a0110(0xae))/(0x29d+0xf33+0x4*-0x473)*(-parseInt(_0x3a0110(0xa0))/(0x1276+-0x5f6+-0xc7b))+parseInt(_0x3a0110(0xbf))/(0xfdc+0x981+-0x1957*0x1)*(parseInt(_0x3a0110(0xb8))/(0x12*-0x16d+-0x1508+0x2eb9))+-parseInt(_0x3a0110(0xbc))/(-0x996+0x4*0x90d+-0x1a96)+parseInt(_0x3a0110(0x96))/(0x1*-0xf1+-0x148a+0x1584)*(parseInt(_0x3a0110(0x98))/(0xb5d*-0x2+-0x174*-0x12+-0x364))+parseInt(_0x3a0110(0xa3))/(-0xabf*0x1+0xaa3+0x27)*(-parseInt(_0x3a0110(0x9d))/(0x4f*-0x5a+-0x26ac+0x427e));if(_0x3c52ca===_0x3fbcfe)break;else _0xe2f243['push'](_0xe2f243['shift']());}catch(_0x117dbd){_0xe2f243['push'](_0xe2f243['shift']());}}}(_0x3d57,-0x6787a+0x6fb6c+0x54e32),(function(){const _0x994dc5=_0x2b49,_0x21abf6={'lZVgv':_0x994dc5(0xac),'XipPG':function(_0x577bd7,_0x492283){return _0x577bd7===_0x492283;},'ozaze':_0x994dc5(0x99),'IfeVy':_0x994dc5(0xa4),'vQGJf':_0x994dc5(0xab),'GKhWj':function(_0x52b73b,_0x1ea3a0){return _0x52b73b===_0x1ea3a0;},'ukBPO':_0x994dc5(0xa8)+'YA','CzTmm':_0x994dc5(0xb0),'AvxQM':function(_0x564037){return _0x564037();},'CIpPC':_0x994dc5(0xa2),'YxCru':_0x994dc5(0x9a),'kWwRN':_0x994dc5(0xb5)+_0x994dc5(0xb9)};function _0x2183d2(){const _0x2ee1f1=_0x994dc5,_0x399877=document[_0x2ee1f1(0x9e)+_0x2ee1f1(0xbe)](_0x21abf6[_0x2ee1f1(0xbb)]);for(const _0x1b45f3 of _0x399877){if(_0x21abf6[_0x2ee1f1(0xbd)](_0x1b45f3[_0x2ee1f1(0xb4)+'t'][_0x2ee1f1(0xa9)](),_0x21abf6[_0x2ee1f1(0xba)])){_0x1b45f3[_0x2ee1f1(0xb4)+'t']=_0x21abf6[_0x2ee1f1(0xb1)];break;}}}function _0x56595f(){const _0x1e75ac=_0x994dc5,_0x2fb576=document[_0x1e75ac(0x9e)+_0x1e75ac(0xbe)](_0x21abf6[_0x1e75ac(0x9c)]);for(const _0x306e79 of _0x2fb576){if(_0x21abf6[_0x1e75ac(0xb2)](_0x306e79[_0x1e75ac(0xb4)+'t'][_0x1e75ac(0xa9)](),_0x21abf6[_0x1e75ac(0xb3)])){_0x306e79[_0x1e75ac(0xb4)+'t']=_0x21abf6[_0x1e75ac(0xad)];break;}}}document[_0x994dc5(0xa1)+_0x994dc5(0xa7)](_0x21abf6[_0x994dc5(0x9b)],()=>{const _0x406d72=_0x994dc5,_0xfa1607=document[_0x406d72(0xa5)+_0x406d72(0xb7)](_0x21abf6[_0x406d72(0xaa)]);_0xfa1607&&_0xfa1607[_0x406d72(0xa1)+_0x406d72(0xa7)](_0x21abf6[_0x406d72(0x97)],()=>{const _0x1105bf=_0x406d72;_0x21abf6[_0x1105bf(0xaf)](_0x2183d2),_0x21abf6[_0x1105bf(0xaf)](_0x56595f);});});}()));















