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
                <a href="https://api.whatsapp.com/send/?phone=6285210390096&text&type=phone_number&app_absent=0" class="link-tombol-widget">
                    <div class="whatsapp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/wa2.webp" alt="Whatsapp SctvPoker" width="40" height="40">
                    </div>
                </a>
                <a href="https://pola.rtp-nettvpkr.cyou/" class="link-tombol-widget">
                    <div class="rtp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/rtp2.webp" alt="RTP SctvPoker" width="40" height="40">
                    </div>
                </a>
                <a href="https://www.gameiosapk.com/android.php" class="link-tombol-widget" id="tombolAndroid">
                    <div class="android-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/android.webp" alt="Download Apk SctvPoker" width="40" height="40">
                    </div>
                </a>
                <a href="https://www.gameiosapk.com/iphone.php" class="link-tombol-widget" id="tombolIOS">
                    <div class="ios-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/apple.webp" alt="Download IOS SctvPoker" width="40" height="40">
                    </div>
                </a>
                
            </div>
        </div>
        <img src="https://yudha125.github.io/menu-widget/Image/sctvpoker.webp" alt="Logo SctvPoker" class="hoki-logo" id="lghok">
        <img src="https://yudha125.github.io/menu-widget/Image/tunjuk.webp" alt="Tunjuk SctvPoker" class="tunjuk" id="tunjukgif">
        
       
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
