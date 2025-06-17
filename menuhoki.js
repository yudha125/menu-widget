(function () {
    const menuWid = document.createElement('div');
    menuWid.className = "widget-menu-fixed";
    menuWid.innerHTML = `
    <style>
    .widget-menu-fixed {
    position: fixed;
    bottom: 130px;
    left: 100px;
    z-index: 99999;
}

@media screen and (max-width: 600px) {
    .widget-menu-fixed {
        left: 30px;
        bottom: 100px;
    }
}

body {
    background: rgb(2, 2, 44);
}

.burger {
    width: 20px;
    height: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    background: beige;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgb(255, 6, 243);
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

.burger:not(.active) {
    animation: pulse 1.5s infinite;
}

.burger span {
    height: 4px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.5s ease;
    /* animation: pulse 1.5s infinite; */
}

.burger:not(.active) span {
    animation: pulse 1.5s infinite;
}

/* Optional: Burger animation to "X" when active */
.burger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.burger.active span:nth-child(2) {
    opacity: 0;
}

.burger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

.cont-widget {
    height: 60px;
    width: 60px;
    background: rgba(51, 51, 51, 0);
    border-radius: 15px;
    transition: height 0.4s ease, background 0.3s ease;
    overflow: hidden;
    display: block;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 0;
    /* default gap 0 */
    backdrop-filter: blur(5px);

}

.cont-widget.active {
    height: 400px;
    background: rgba(51, 51, 51, 1);
    gap: 20px;
}

.telegram-button,
.whatsapp-button,
.rtp-button,
.fb-button {
    height: 40px;
    width: 40px;
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
    </style>
    <div class="cont-widget" id="containerWidget">
            <div class="burger"
                onclick="this.classList.toggle('active');document.getElementById('containerWidget').classList.toggle('active');document.getElementById('tunjukgif').classList.toggle('active');document.getElementById('lghok').classList.toggle('active');">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="https://t.me/infogacorhoki777" class="link-tombol-widget">
                <div class="telegram-button widget-tombol">
                    <img src="tele2.png" alt="" width="40" height="40">
                </div>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=855764526797&text&type=phone_number&app_absent=0" class="link-tombol-widget">
                <div class="whatsapp-button widget-tombol">
                    <img src="wa2.png" alt="" width="40" height="40">
                </div>
            </a>
            <a href="https://t.ly/rtp-hoki777/" class="link-tombol-widget">
                <div class="rtp-button widget-tombol">
                    <img src="rtp2.png" alt="" width="40" height="40">
                </div>
            </a>
            <a href="https://www.facebook.com/groups/officialgruphoki777/" class="link-tombol-widget">
                <div class="fb-button widget-tombol">
                    <img src="fb2.png" alt="" width="40" height="40">
                </div>
            </a>

        </div>
        <img src="hoki.webp" alt="Logo Hoki777" class="hoki-logo" id="lghok">
        <img src="tunjuk.webp" alt="" class="tunjuk" id="tunjukgif">
    `;
    document.body.appendChild(menuWid);
})();
