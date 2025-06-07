document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.textContent = `
    .button-main.button-absolute {
        height: 45px;
        width: 200px;
        border-radius: 10px 10px 0px 0px;
        font-size: 16px;
        border: none;
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%);
        color: white;
        font-weight: bold;
        position: fixed;
        bottom: 0;
        left: 5%;
        z-index: 10000;
        text-decoration: none;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .button-main.button-absolute:hover {
        background: linear-gradient(179deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 27%, rgba(22, 93, 107, 1) 100%);
        color: white;
    }

    .icon-button {
        font-size: 20px;
    }

    .popup-report {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10001;
        width: 100%;
        height: 100%;
        background-image: url("https://yudha125.github.io/menu-widget/foreground/slider/BGTOTOTAROT_12.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .popup-report.open {
        display: block;
    }

    .popup-report .popup-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 600px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 4px 4px 8px rgb(15, 177, 177);
        display: flex;
        flex-direction: column;
    }

    .popup-report .close-popup {
        position: absolute;
        top: -30px;
        right: -20px;
        font-size: 24px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%);
        padding: 5px 10px;
        border-radius: 50%;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    }

    .popup-report .info-status-report {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 17px;
        color: rgb(7, 64, 82);
        font-weight: bold;
        text-align: center;
        background-color: aquamarine;
        padding: 10px;
        border-radius: 10px;
        display: none;
    }

    .popup-report .popup-content .logo {
        display: flex;
        justify-content: center;
        background-color: black;

    }

    .popup-report .popup-content .logo img {
        width: 300px;
        height: auto;

    }



    #formReport {
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    #formReport .input-group {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    #formReport .input-group-text {
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%);
        color: #ffffff;
        font-weight: bold;
        border-radius: 6px 0 0 6px;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 45px;
    }

    #formReport .form-control,
    #formReport .form-select,
    #formReport textarea {
        border: 1px solid #ccc;
        padding: 10px 15px;
        border-radius: 0 6px 6px 0;
        width: 100%;
        font-size: 14px;
    }

    #formReport textarea {
        resize: vertical;
        min-height: 120px;
    }

    #formReport .input-group input[type="file"] {
        border-radius: 6px 0 0 6px;
    }

    #formReport .input-group label.input-group-text {
        border-radius: 0 6px 6px 0;
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%);
        font-weight: bold;
        cursor: pointer;
    }

    #formReport #text-berjalan {
        background-color: rgba(0, 128, 128, 0.15);
        padding: 8px 10px;
        border-radius: 8px;
        margin-bottom: 10px;
        position: relative;
    }

    #formReport .closeteks {
        position: absolute;
        top: 4px;
        right: 6px;
        color: red;
        font-size: 18px;
        cursor: pointer;
    }

    #sendReport {
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%);
        color: #ffffff;
        font-weight: bold;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    @media (max-width: 600px) {
        #formReport {
            padding: 15px;
        }

        #formReport .input-group-text {
            font-size: 12px;
            padding: 8px;
        }

        #formReport .form-control,
        #formReport .form-select {
            font-size: 13px;
        }
    }
         body {
    background-image: url('https://yudha125.github.io/menu-widget/foreground/slider/BGTOTOTAROT_12.webp') !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
}

.navbar-header .navbar-collapse.collapse {}

.news-head {
    background: linear-gradient(0deg, rgb(16, 29, 31) 0%, rgb(22, 22, 31) 50%, rgb(68, 80, 107) 100%) !important;

}

.news-body {
    background: linear-gradient(0deg, rgb(16, 29, 31) 0%, rgb(22, 22, 31) 50%, rgb(68, 80, 107) 100%) !important;
}

.btn-theme.login {
    background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
    color: white !important;
}

ul.nav.menu.sidebar-nav li a {
    list-style-type: none !important;
    border-bottom: none !important;
}

ul.nav.menu.sidebar-nav li a {
    background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
    color: white !important;
    border-radius: 10px !important;
    padding: 10px !important;
    text-decoration: none !important;
    margin: 5px 0px 5px 0px !important;
    font-family: Lato, Arial, sans-serif !important;
    box-shadow: 4px 4px 10px rgba(26, 229, 243, 0.9);
}

ul.nav.menu.sidebar-nav li a:hover {
    background: linear-gradient(0deg, rgb(2, 54, 97) 0%, rgb(6, 6, 14) 50%, rgb(54, 63, 85) 100%);
    font-weight: bold !important;
}

#slider {
    margin-top: 15px;
    margin-bottom: 10px;
}

#latest-results {
    margin-top: 5px !important;
    margin-bottom: 0px;
}

#latest-result .sidebar-button {
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 100% !important;
    padding: 0px !important;
    color: white !important;
    border-radius: 4px !important;
    text-decoration: none !important;

}

.sidebar-button .btn.btn-theme {
    font-family: Lato, Arial, sans-serif;
    text-transform: uppercase;
    height: 50px !important;
    width: 100% !important;
    --border-radius: 4px;
    border-radius: 20px !important;
    --border-width: 5px;
    appearance: none;
    position: relative;
    border: 0;
    background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
    font-size: 18px;
    font-weight: 200;
    color: #fff;
    z-index: 2;
    border-radius: 5px;
}

.sidebar-button .btn.btn-theme:hover::after {
    animation-play-state: paused;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -2px, 0);
}

.sidebar-button .btn.btn-theme::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(#45f07e,
            #17ee04,
            #55ff12,
            rgb(75, 255, 59),
            rgb(34, 255, 5),
            #2eff4a,
            #14eb00);
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 1000ms infinite;
    animation-play-state: running;
}

@keyframes rotate-hue {
    to {
        filter: hue-rotate(1turn);
    }
}

section .container {
    background: rgb(0, 0, 0, 1) !important;
}

.navbar-fixed-top {
    background: rgba(0, 0, 0, 0) !important;
}

.navbar-fixed-top .container {
    background: rgba(0, 0, 0, 0) !important;

}

#liscroll {
    margin: 5px 0px 5px 0px !important;
}

.results {
    background: linear-gradient(0deg, rgb(16, 29, 31) 0%, rgb(22, 22, 31) 50%, rgb(68, 80, 107) 100%) !important;
    box-shadow: 4px 4px 10px rgba(26, 229, 243, 0.919) !important;
}



.item.bank {
    position: relative;
    /* background-image: url('https://yudha125.github.io/menu-widget/foreground/bank/GOPAY.gif');
    background-size: 170px 90px;
    background-position: center;
    background-repeat: no-repeat; */
    height: 90px;
    border: none;
    background-color: rgba(250, 250, 250, 0);

}

.item.bank .online {
    position: absolute;
    z-index: 10;
    /* top: 50%; */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

}

.item.bank .offline {
    position: absolute;
    z-index: 10;
    /* top: 50%; */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.item.bank img {
    position: absolute;
    width: 150px;
    height: 90px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    box-shadow: -2px 2px 5px rgba(26, 229, 243, 1);
}

.container-img {
    margin-top: auto;
}

.item.slides {
    margin-top: auto;
    margin-bottom: auto;
}
.results-number{
    padding: 2px;
    font-size: 13px !important;
    }
    .results {
    height: 263px;
}
#result-slideshow {
    max-height: 172px; 
    overflow-y: auto; 
    overflow-x: hidden; 
}
.container-img-bottom-frame{
margin-top:-20px;
}
.owl-theme.bankscroll{
    margin-top:-40px;
}
.modal-header .close {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(18, 166, 172, 1);
    width: 35px;
    height: 35px;
    border-radius: 50%; /* Lebih rapi pakai 50% daripada 25px */
    padding: 0;
    border: none;
    cursor: pointer;
    opacity: 1 !important;
}

.modal-header .close span {
    font-size: 20px;
    color: white;
    font-weight: bold;
    line-height: 1; /* Tambahan ini membantu agar vertikal pas */
}

#setuju.btn.btn-theme{

}
div.row-legend.text-center .btn.btn-theme{
min-width: 180px;
margin-top:50px;
}
@media only screen and (max-width: 600px){

}

  `;
    document.head.appendChild(style);

    const navItem = document.querySelectorAll(".navbar-fixed-top .container");
    navItem.forEach(function (item) {
        const navhead = item.querySelector(".navbar-header");
        const navhead2 = item.querySelector(".navbar-collapse.collapse");
        if (navhead && navhead2) {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "block";
            item.appendChild(wrapper);
            wrapper.appendChild(navhead);
            wrapper.appendChild(navhead2);
            const frame = document.createElement("img");
            frame.id = "frame";
            frame.src = "https://yudha125.github.io/menu-widget/foreground/frame3.webp";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "50%";
            frame.style.transform = "translateX(-50%)";
            frame.style.width = "119%";
            frame.style.height = "120px";
            frame.style.pointerEvents = "none";
            frame.style.zIndex = "-1";
            frame.classList.add("skrollable");
            frame.alt = "Header-fixed";

            wrapper.appendChild(frame);
        }
    });

    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'custom-banner';
    bannerDiv.style.margin = '20px 0';
    bannerDiv.innerHTML = `
    <img src="https://yudha125.github.io/menu-widget/foreground/giftpanjang.gif" alt="Banner Iklan" style="width:100%; max-width:840px; display:block; margin:0 auto;">
    `;

    // Cari parent container
    const slider = document.getElementById('slider');
    const parent = slider.parentNode;

    // Sisipkan setelah slider
    if (slider && parent) {
        parent.insertBefore(bannerDiv, document.getElementById('latest-results'));
    }


    const slideCarousel = document.querySelectorAll(".slider .item");
    slideCarousel.forEach(function (item) {
        const img = item.querySelector("img");
        if (img) {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "inline-block";

            // Pindahkan gambar ke dalam wrapper
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            const frame = document.createElement("img");
            frame.src = "https://yudha125.github.io/menu-widget/foreground/frame5.webp";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "0";
            frame.style.width = "100%";
            frame.style.height = "100%";
            frame.style.pointerEvents = "none";
            frame.alt = "frame-iklan";
            wrapper.appendChild(frame);
        }
    });

    const latestResults = document.getElementById("latest-results");
    if (latestResults) {
        // Buat elemen frame atas
        const topFrame = document.createElement("div");
        topFrame.innerHTML = `<img src="https://yudha125.github.io/menu-widget/foreground/border.webp" alt="border banner" style="width: 100%; height: 20px;">`;
        topFrame.className = "container-img-top-frame";

        // Clone elemen frame atas untuk dijadikan bottom frame
        const bottomFrame = topFrame.cloneNode(true);
        bottomFrame.className = "container-img-bottom-frame"; // <- class ini diberikan ke bottomFrame

        // Sisipkan ke DOM
        latestResults.parentNode.insertBefore(topFrame, latestResults);
        latestResults.parentNode.insertBefore(bottomFrame, latestResults.nextSibling);
    }

    const bankImages = document.querySelectorAll('.owl-carousel.bankscroll .item.bank');
    const newBankImages = [
        'BCA.gif',
        'BNI.gif',
        'BRI.gif',
        'DANA.gif',
        'GOPAY.gif',
        'MANDIRI.gif',
        'OVO.gif',
        'PULSA.gif'
    ];
    bankImages.forEach((item, index) => {
        const oldImg = item.querySelector('img');
        if (oldImg) oldImg.remove(); // Hapus gambar lama jika ada

        const newImg = document.createElement('img');
        newImg.src = 'https://yudha125.github.io/menu-widget/foreground/bank/' + newBankImages[index]; // Ubah path jika perlu
        newImg.alt = newBankImages[index].replace('.gif', '');
        newImg.width = 78;
        newImg.height = 24;

        item.appendChild(newImg); // Sisipkan gambar baru
    });
    const items = document.querySelectorAll('#latest-results .owl-carousel .item.slides');
    const newImages = [
        "12D.webp", "24D.webp", "billiard.webp", "cambodia.webp", "fatpanda.webp", "gongball.webp",
        "habanero.webp", "hongkong.webp", "idnslot.webp", "kingkong.webp", "microgaming.webp", "oglok.webp",
        "pgsoft.webp", "playstar.webp", "pokerdice.webp", "pragmatic.webp", "redwhite.webp", "singapurpools.webp",
        "suwit.webp", "sydneypools.webp", "toptrend.webp", "totomacau.webp"
    ];

    // Hapus elemen setelah ke-22
    for (let i = 22; i < items.length; i++) {
        items[i].remove();
    }

    // Ganti src pada 22 gambar pertama
    for (let i = 0; i < newImages.length && i < items.length; i++) {
        const img = items[i].querySelector('img');
        if (img) {
            img.src = "https://yudha125.github.io/menu-widget/foreground/sliderEx/" + newImages[i];
        }
    }
    const buttonMain = document.createElement("a");
    buttonMain.className = "button-main button-absolute";
    buttonMain.href = "#";
    buttonMain.innerHTML = `☎️ Laporan Masalah`;

    buttonMain.onclick = function () {
        const popup = document.querySelector('.popup-report');
        if (popup) popup.classList.add('open');
    };

    document.querySelector("body").appendChild(buttonMain);
    const poprep = document.createElement("div");
    poprep.className = "popup-report";
    poprep.innerHTML = `
    <div class="popup-content">
        <div class="close-popup" onclick="this.parentElement.parentElement.classList.remove('open');">X</div>
        <div class="info-status-report"></div>
        <div class="logo">
            <a href="https://tototarot.net/" target="_blank">
                <img width="300" class="d-block mx-auto" src="https://tototarot.net/assets/img/cgn/logo.png"
                    alt="logo keluhan">
            </a>

        </div>
        <form id="formReport">

            <div id="text-berjalan" class="position-relative" style="display: none;">
                <i onclick="closeTeks()" class="fas fa-times-circle closeteks"></i>
                <marquee class="teks-berjalan app-theme-text border-teks mb-2" scrollamount="4" direction="left">
                    <span class="badge bg-danger">2025-01-11 15:40:50</span> []
                </marquee>
            </div>

            <div class="input-group">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
                <input type="text" placeholder="Username" class="form-control" name="username" id="username">
            </div>
            <div class="input-group">
                <span class="input-group-text"><i class="fab fa-whatsapp"></i></span>
                <input type="text" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')"
                    placeholder="Nomor WA aktif (cth: 0812364896)" class="form-control" name="wa" id="wa">
            </div>
            <div class="input-group">
                <span class="input-group-text"><i class="fas fa-calendar-week"></i></span>
                <input type="text" placeholder="Tanggal Kendala"
                    onkeyup="this.value = this.value.replace(/[^0-9-]/g, '')" class="form-control" name="tanggalkendala"
                    id="dateresult">
            </div>
            <div class="input-group">
                <span class="input-group-text"><i class="fas fa-exclamation-triangle"></i></span>
                <input type="text" placeholder="Kendala" class="form-control" name="kendala" id="kendala">
            </div>
            <div class="input-group">
                <span class="input-group-text"><i class="fas fa-globe"></i></span>
                <select name="bokendala" class="form-select text-capitalize" aria-label="Default select example">
                    <option value="">Pilih Situs BO</option>
                    <option value="tototarot">TOTOTAROT</option>
                </select>
            </div>
            <div style="height:150px;" class="input-group">
                <span class="input-group-text"><i class="fas fa-comments"></i></span>
                <textarea class="form-control" id="isipesan" name="isipesan"></textarea>
            </div>
            <div class="input-group">
                <span class="input-group-text"><i class="fas fa-vote-yea"></i></span>
                <select name="saran" id="saran" class="form-select">
                    <option value="normal">Normal</option>
                    <option value="sedang">Sedang</option>
                    <option value="tinggi">Tinggi</option>
                </select>
            </div>
            <div class="input-group">
                <input type="file" class="form-control" name="uploadfile" id="gambar">
                <label class="input-group-text" for="gambar"><i class="fas fa-image"></i></label>
            </div>
            <div class="card-footer">
                <div class="d-grid">
                    <button type="submit" id="sendReport" class="button-send-report">Kirim</button>
                </div>
            </div>
            <input type="hidden" name="secure_token" value="abc123secure">
        </form>
    </div>
    `;
    const body = document.querySelector("body");
    body.appendChild(poprep);
});

window.addEventListener("scroll", function () {
    const y = window.scrollY;
    const frame = document.querySelector("img#frame");

    if (!frame) return;

    if (y < 300) {
        frame.style.height = (120 - (y * 0.133)) + "px"; // dari 120 ke 80
        frame.style.top = (-3 * (y / 300)) + "px"; // dari 0 ke -40
    } else {
        frame.style.height = "80px";
        frame.style.top = "-3px";
    }
});

document.getElementById('formReport').addEventListener('submit', function (e) {
    e.preventDefault(); // Biar tidak reload

    const form = document.getElementById('formReport');
    const formData = new FormData(form);
    const statusBox = document.querySelector('.info-status-report');

    // Tampilkan status: loading
    statusBox.innerText = '⏳ Mengirim laporan...';
    statusBox.style.display = 'block';

    fetch('https://pokhok.info/rpt/rpt.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then(response => {
            statusBox.innerText = '✅ Laporan berhasil dikirim!';

            // Sembunyikan setelah 5 detik
            setTimeout(() => {
                statusBox.style.display = 'none';
            }, 5000);

            // Opsional: reset form
            form.reset();
        })
        .catch(error => {
            statusBox.innerText = '❌ Gagal mengirim laporan. Coba lagi!';

            // Sembunyikan setelah 5 detik
            setTimeout(() => {
                statusBox.style.display = 'none';
            }, 5000);
        });
});

function openreport() {
    const elemen = document.querySelector(".popup-report");
    if (elemen) {
        elemen.classList.add("open");
    }
}

