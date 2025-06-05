document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.textContent = `
         body {
        background-image: url('asas.jpg') !important;
        background-size: cover !important;
        cursor: url('cursor64.png'), auto !important;
    }

    a {
        cursor: url('cursor64tangan.png'), auto !important;
    }

    div {
        cursor: url('cursor64.png'), auto;
    }

    button {
        cursor: url('cursor64tangan.png'), auto !important;
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
        box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.719);
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
        box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.719) !important;
    }
  `;
    document.head.appendChild(style);

    const slideItems = document.querySelectorAll(".item.slides");
    slideItems.forEach(function (item) {
        const img = item.querySelector("img");
        if (img) {
            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";
            wrapper.style.display = "inline-block";
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            const frame = document.createElement("img");
            frame.src = "aaaaaaaa.png";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "0";
            frame.style.width = "100%";
            frame.style.height = "100%";
            frame.style.pointerEvents = "none";
            wrapper.appendChild(frame);
        }
    });

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
            frame.src = "frame3.png";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "50%";
            frame.style.transform = "translateX(-50%)";
            frame.style.width = "119%";
            frame.style.height = "120px";
            frame.style.pointerEvents = "none";
            frame.style.zIndex = "-1";
            frame.classList.add("skrollable");

            wrapper.appendChild(frame);
        }
    });

    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'custom-banner';
    bannerDiv.style.margin = '20px 0';
    bannerDiv.innerHTML = `
    <img src="giftpanjang.gif" alt="Banner Iklan" style="width:100%; max-width:840px; display:block; margin:0 auto;">
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
            frame.src = "frame5.png";
            frame.style.position = "absolute";
            frame.style.top = "0";
            frame.style.left = "0";
            frame.style.width = "100%";
            frame.style.height = "100%";
            frame.style.pointerEvents = "none";
            wrapper.appendChild(frame);
        }
    });

    const latestResults = document.getElementById("latest-results");
    if (latestResults) {
        // Buat elemen frame atas
        const topFrame = document.createElement("div");
        topFrame.className = "container-img";
        topFrame.innerHTML = `<img src="border.png" alt="" style="width: 100%; height: 20px;">`;
        const bottomFrame = topFrame.cloneNode(true);
        latestResults.parentNode.insertBefore(topFrame, latestResults);
        latestResults.parentNode.insertBefore(bottomFrame, latestResults.nextSibling);
    }
    const imgSisi1 = document.createElement('img');
    imgSisi1.src = 'sisi.png'; // Ganti dengan path gambar kamu
    imgSisi1.alt = 'Floating Banner';
    imgSisi1.id = 'floating-banner2'; // Tambahkan ID untuk styling jika diperlukan

    // Tambahkan style position absolute dan lainnya
    imgSisi1.style.position = 'fixed';
    imgSisi1.style.top = '0';        // Sesuaikan posisi vertikal
    imgSisi1.style.left = '0';      // Bisa diganti ke 'left' jika perlu
    imgSisi1.style.width = '150px';     // Atur ukuran sesuai kebutuhan
    imgSisi1.style.zIndex = '9999';
    imgSisi1.style.cursor = 'pointer';

    document.body.appendChild(imgSisi1);
    const imgSisi2 = document.createElement('img');
    imgSisi2.src = 'sisi.png'; // Ganti dengan path gambar kamu
    imgSisi2.alt = 'Floating Banner';
    imgSisi2.id = 'floating-banner2'; // Tambahkan ID untuk styling jika diperlukan

    // Tambahkan style position absolute dan lainnya
    imgSisi2.style.position = 'fixed';
    imgSisi2.style.top = '0';        // Sesuaikan posisi vertikal
    imgSisi2.style.right = '0';      // Bisa diganti ke 'left' jika perlu
    imgSisi2.style.width = '150px';     // Atur ukuran sesuai kebutuhan
    imgSisi2.style.zIndex = '9999';
    imgSisi2.style.cursor = 'pointer';

    document.body.appendChild(imgSisi2);
    // const sectionTop = document.querySelectorAll("section.margin-top");
    // const kontainerTambahan = document.createElement("div");
    // kontainerTambahan.className = "container container-plus-1";
    // kontainerTambahan.style.margin = "0 auto";
    // kontainerTambahan.style.background = " rgba(0, 0, 0, 0.85)";
    // kontainerTambahan.style.padding = "0 20px 15px 20px";
    // kontainerTambahan.innerHTML = `
    //     <div class="row">
    //     <div class="col-md-12" style="

    //     ">
    //         <h2>Tambahan</h2>
    //         <p>Ini adalah konten tambahan yang ditambahkan ke halaman.</p>
    //     </div>
    // </div>
    // `;

    // sectionTop.forEach(function (section) {
    //     section.appendChild(kontainerTambahan);
    // });
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
