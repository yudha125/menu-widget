
document.addEventListener("DOMContentLoaded", function () {


    const style = document.createElement("style");
    let cssText = `
        body {
        background-image: url('https://yudha125.github.io/menu-widget/foreground/slider/BGTOTOTAROT_12.webp') !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        background-attachment: fixed !important;
        background-position: center !important;
    }
    #myModal{
        width:100% !important;
        height:100% !important;
        display:flex !important;
        
        z-index:999999999999999;
    }
    .modal-dialog{
        height:100% !important;
    }
    .modal-body{
        position:absolut;
        width:100% !important;
        height:100% !important;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        display:flex;
        justify-content:center;
        align-item:center;
    }
    .modal-body img{
        position:relative;
    }
    .modal-open .modal {
        overflow-x: hidden;
        overflow-y: hidden !important;
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
        transform: translate3d(0,-2px, 0);
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
        z-index: 1000 !important;
    }
    
    .navbar-fixed-top .container {
        background: rgba(0, 0, 0, 0) !important;
    
    }
    
    #liscroll {
        margin: 5px 0px 5px 0px !important;
    }
    


    .button-main.button-absolute:hover {
        background: linear-gradient(179deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 27%, rgba(22, 93, 107, 1) 100%);
        color: white;
    }
    
    .form-control-abunawas::placeholder {
        color: rgba(87, 87, 99, 1)!important; /* Ganti sesuai warna yang diinginkan */
        opacity: 1; /* Supaya warna tidak transparan */
    }
    
    .popup-report {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000001;
            width: 100%;
            height: 100%;
            background-image: url("https://yudha125.github.io/menu-widget/foreground/slider/BGTOTOTAROT_12.webp");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
    
        #popupreport.open{
            display: block;
        }
    
        .popup-report .popup-content {
            position: fixed;
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
            z-index:99999999;
        }
    
        .popup-report .close-popup {
            position: absolute;
            top: 0px;
            right: 0px;
            font-size: 24px;
            color: rgb(255, 255, 255);
            cursor: pointer;
            background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%);
            padding: 5px 10px;
            border-radius: 50%;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
            z-index:999999999
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
            z-index:1000;
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
    
        #formReport .input-group-abunawas {
            display: flex;
            align-items: stretch;
            width: 100%;
        }
    
        #formReport .input-group-abunawas-text {
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
    
        #formReport .form-control-abunawas,
        #formReport .form-select,
        #formReport textarea {
            border: 1px solid #ccc;
            padding: 10px 15px;
            border-radius: 0 6px 6px 0;
            width: 100%;
            font-size: 14px;
            color:black !important;
            font-family: Arial, Helvetica, sans-serif !important;
        }
    
        #formReport textarea {
            resize: vertical;
            min-height: 120px;
    
        }
    
        #formReport .input-group-abunawas input[type="file"] {
            border-radius: 6px 0 0 6px;
        }
    
        #formReport .input-group-abunawas label.input-group-abunawas-text {
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
        #formReport input,
        #formReport select{
        color:black !important;
        font-family: Arial, Helvetica, sans-serif !important;
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
    
    `
    if (!isMobileDevice()) {
        cssText += `    
    .results {
        background: linear-gradient(0deg, rgb(16, 29, 31) 0%, rgb(22, 22, 31) 50%, rgb(68, 80, 107) 100%)!important;
        box-shadow: 4px 4px 10px rgba(26, 229, 243, 0.919)!important;
    }
    .results {
        height: 263px;
    }
    .results-number{
        padding: 2px;
        font-size: 13px!important;
    }
    .item.bank {
        position: relative;
        background-size: 170px 90px;
        background-position: center;
        background-repeat: no-repeat; 
        height: 90px;
        border: none;
        background-color: rgba(250, 250, 250, 0);
    
    }
    .item.bank .online {
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .item.bank .offline {
        position: absolute;
        z-index: 10;
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
        box-shadow:-2px 2px 5px rgba(26, 229, 243, 1);
    }
    .container-img-bottom-frame{
        margin-top:-20px;
    }
    .owl-theme.bankscroll{
    margin-top:-40px;
    }
    .splasher {
        position: fixed;
        left: 10px;
        bottom: 60px;
        z-index: 1000;
        width: 350px;
    }

    `
    } else {
        cssText += `
    
    #loginBtnHeader{
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
    }
    .buttonWrap.buttons.button-blue.contactSubmitButton{
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
    }
    .buttonWrap.buttong.button-green.contactSubmitButton{
        background: linear-gradient(0deg, rgb(16, 56, 28) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
    }
    
    .inner-wrap .panel-blue{
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100%);
        max-height:360px;
        padding-bottom:20px;
        haight:360;
    }
    .panel-blue #slider-hasil{
        height:186px;
        overflow-y:auto;
        padding-bottom: 10px;
        line-height: 1.5;

        
    }
       
    .item.slides {
        margin-top: auto;
        margin-bottom: auto;
    }
    
       
    #result-slideshow {
        max-height: 172px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    

    .modal-header.close {
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
    opacity: 1!important;
    }
    
    .modal-header.close span {
    font-size: 20px;
    color: white;
    font-weight: bold;
    line-height: 1; /* Tambahan ini membantu agar vertikal pas */
    }

    #setuju.btn.btn-theme{

    }
    div.row-legend.text-center.btn.btn-theme{
        min-width: 180px;
        margin-top: 50px;
    }
    `}
    if (isMobileDevice()) {
        cssText += `
    footer,.footer{
    position:fixed;
    bottom:0;
    width:100%;
    height:40px;
    left:50%;
    transform: translateX(-50%);
    z-index:2000;
    }
    .splasher {
        position: fixed;
        left: 10px;
        bottom: 60px;
        z-index: 1000;
        width: 200px;
    }

    `};
    style.textContent = cssText;
    document.head.appendChild(style);
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    document.head.appendChild(link1);

    const navItem = document.querySelectorAll(".navbar-fixed-top .container");
    if (navItem) {
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
    }
    if (!isMobileDevice()) {
        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'custom-banner';
        bannerDiv.style.margin = '20px 0';
        bannerDiv.innerHTML = `
    <img src="https://yudha125.github.io/menu-widget/foreground/giftpanjang.gif" alt="Banner Iklan"
    style="width:100%; max-width:840px; display:block; margin:0 auto;">
        `;

        // Cari parent container
        const slider = document.getElementById('slider');
        const parent = slider.parentNode;
        // Sisipkan setelah slider
        if (slider && parent) {
            parent.insertBefore(bannerDiv, document.getElementById('latest-results'));
        }


        const slideCarousel = document.querySelectorAll(".slider .item");
        if (slideCarousel) {
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
        }
    }
    const splasher = document.createElement("img");
    splasher.className = "splasher";
    splasher.src = "https://yudha125.github.io/menu-widget/foreground/kotak_gpg.gif";
    splasher.alt = "Splasher TotoTarot";
    document.body.appendChild(splasher);
    const latestResults = document.getElementById("latest-results");
    if (latestResults) {
        // Buat elemen frame atas
        const topFrame = document.createElement("div");
        topFrame.innerHTML = `<img src="https://yudha125.github.io/menu-widget/foreground/border.webp" alt="border banner" style="width: 100%; height: 20px;"> `;
        topFrame.className = "container-img-top-frame";

        // Clone elemen frame atas untuk dijadikan bottom frame
        const bottomFrame = topFrame.cloneNode(true);
        bottomFrame.className = "container-img-bottom-frame"; // <-class ini diberikan ke bottomFrame

        // Sisipkan ke DOM
        latestResults.parentNode.insertBefore(topFrame, latestResults);
        latestResults.parentNode.insertBefore(bottomFrame, latestResults.nextSibling);
    }

    const bankImages = document.querySelectorAll('.owl-carousel.bankscroll .item.bank');
    const newBankImages = [
        'BCA.webp', 'BNI.webp', 'BRI.webp', 'DANA.webp',
        'GOPAY.webp', 'MANDIRI.webp', 'OVO.webp', 'PULSA.webp','SHOPEEPAY.webp'
    ];
    
    if (bankImages) {
        bankImages.forEach((item, index) => {
            if (newBankImages[index]) { // Cek apakah ada gambar di index tersebut
                const oldImg = item.querySelector('img');
                if (oldImg) oldImg.remove(); // Hapus gambar lama jika ada
    
                const newImg = document.createElement('img');
                newImg.src = 'https://yudha125.github.io/menu-widget/foreground/bank/' + newBankImages[index];
                newImg.alt = newBankImages[index].replace('.gif', '');
                newImg.width = 78;
                newImg.height = 24;
    
                item.appendChild(newImg); // Sisipkan gambar baru
            }
        });
    }
    const items = document.querySelectorAll('#latest-results .owl-carousel .item.slides');
    const newImages = [
        "12D.webp", "24D.webp", "billiard.webp", "cambodia.webp", "fatpanda.webp", "gongball.webp",
        "habanero.webp", "hongkong.webp", "idnslot.webp", "kingkong.webp", "microgaming.webp", "oglok.webp",
        "pgsoft.webp", "playstar.webp", "pokerdice.webp", "pragmatic.webp", "redwhite.webp", "singapurpools.webp",
        "suwit.webp", "sydneypools.webp", "toptrend.webp", "totomacau.webp"
    ];
    if (items) {
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
    }
    const popupreport = document.createElement("div");
    popupreport.className = "popup-report";
    popupreport.id = "popupreport";
    popupreport.innerHTML = `
    
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

        <div class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fas fa-user"></i></span>
            <input type="text" placeholder="MASUKKAN USERNAME" class="form-control-abunawas" name="usernametototarot"
                id="username">
        </div>
        <div class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fab fa-whatsapp"></i></span>
            <input type="text" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')"
                placeholder="WHATSAPP AKTIF (cth: 0812364896)" class="form-control-abunawas" name="whatsapp" id="wa">
        </div>
        <div class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fas fa-calendar-week"></i></span>
            <input type="date" placeholder="Tanggal Terjadi Kendala" class="form-control-abunawas" name="tanggalkendala"
                id="dateresult">
        </div>
        <div class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fas fa-exclamation-triangle"></i></span>
            <input type="text" placeholder="Singkat Kendala" class="form-control-abunawas" name="kendala" id="kendala">
        </div>
        <div class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fas fa-globe"></i></span>
            <select name="namasitus" class="form-select text-capitalize" aria-label="Default select example">
                <option value="">Nama Situs</option>
                <option value="tototarot">TOTOTAROT</option>
            </select>
        </div>
        <div style="height:150px;" class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fas fa-comments"></i></span>
            <textarea class="form-control-abunawas" id="isipesan" name="isipesan"></textarea>
        </div>
        <div class="input-group-abunawas">
            <span class="input-group-abunawas-text"><i class="fas fa-vote-yea"></i></span>
            <select name="tingkatkendala" id="saran" class="form-select">
                <option value="normal">Normal</option>
                <option value="sedang">Sedang</option>
                <option value="tinggi">Tinggi</option>
            </select>
        </div>

        <div class="input-group-abunawas">
            <input type="file" class="form-control-abunawas" name="uploadfile" id="gambar">
            <label class="input-group-abunawas-text" for="gambar"><i class="fas fa-image"></i></label>
        </div>
        <input type="hidden" name="secure_token" value="abc123secure">
        <div class="card-footer">
            <div class="d-grid">
                <button type="submit" id="sendReport" class="button-send-report">Kirim</button>
            </div>
        </div>
    </form>
</div>
    `
    document.body.appendChild(popupreport);
    // Buat tombol
    const buttonMain = document.createElement("a");
    buttonMain.className = "button-main button-absolute";
    buttonMain.href = "#";
    buttonMain.textContent = "☎️ Laporan Masalah";
    buttonMain.style.position = "fixed";
    if (isMobileDevice()) {
        buttonMain.style.bottom = "40px";
    } else {
        buttonMain.style.bottom = "0";
    }
    buttonMain.style.left = "10%";
    buttonMain.style.zIndex = "100000";
    buttonMain.style.height = "45px";
    buttonMain.style.width = "200px";
    buttonMain.style.background = "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(23, 23, 68) 50%, rgb(81, 105, 167) 100% 100%)";
    buttonMain.style.border = "none";
    buttonMain.style.display = "flex";
    buttonMain.style.alignItems = "center";
    buttonMain.style.justifyContent = "center";
    buttonMain.style.textAlign = "center";
    buttonMain.style.color = "white";
    buttonMain.style.fontSize = "16px";
    buttonMain.style.borderRadius = "10px 10px 0 0";
    buttonMain.style.fontWeight = "bold";
    buttonMain.style.textDecoration = "none";
    buttonMain.onclick = function () {
        const popup = document.querySelector('.popup-report');
        popup.classList.add('open');
    };
    document.body.appendChild(buttonMain);

    // Ganti behavior submit form
    const form = document.getElementById("formReport");
    const statusBox = document.querySelector(".info-status-report");

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            statusBox.innerText = '⏳ Mengirim laporan...';
            statusBox.style.display = 'block';

            fetch('https://pokhok.info/rpt/rpt.php', {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    statusBox.innerText = data.message;
                    setTimeout(() => statusBox.style.display = 'none', 5000);
                    if (data.success) {
                        form.reset();
                    }
                })
                .catch(err => {
                    statusBox.innerText = '❌ Gagal koneksi ke server.';
                    setTimeout(() => statusBox.style.display = 'none', 5000);
                });
        });

    }

});
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}
window.addEventListener("scroll", function () {
    const y = window.scrollY;
    const frame = document.querySelector("img#frame");

    if (!frame) return;

    if (y < 300) {
        frame.style.height = (120 - (y * 0.133)) + "px"; // dari 120 ke 80
        frame.style.top = (-3 * (y / 300)) + "px"; // dari 0 ke-40
    } else {
        frame.style.height = "80px";
        frame.style.top = "-3px";
    }

});





(function () {
    const menuWid = document.createElement('div');
    menuWid.className = "widget-menu-fixed";
    menuWid.innerHTML = `
    <style>
    .widget-menu-fixed {
    position: fixed;
    bottom: 240px;
    left: 150px;
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
                <a href="https://t.me/tototarot_ofc" class="link-tombol-widget">
                    <div class="telegram-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/tele2.webp" alt="" width="40" height="40">
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=6287864990292&text&type=phone_number&app_absent=0" class="link-tombol-widget">
                    <div class="whatsapp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/wa2.webp" alt="" width="40" height="40">
                    </div>
                </a>
                <a href="https://t.ly/rtpTotoTarot" class="link-tombol-widget">
                    <div class="rtp-button widget-tombol">
                        <img src="https://yudha125.github.io/menu-widget/Image/rtp2.webp" alt="" width="40" height="40">
                    </div>
                </a>
            </div>
        </div>
        
        <img src="https://yudha125.github.io/menu-widget/Image/TotoTarot.webp" alt="Logo TotoTarot" class="hoki-logo" id="lghok">
        <img src="https://yudha125.github.io/menu-widget/Image/tunjuk.webp" alt="" class="tunjuk" id="tunjukgif">
    `;
    document.body.appendChild(menuWid);
})();













