
(function() {
    // Buat elemen banner
    let banner = document.createElement("div");
    banner.id = "floating-banner";
    banner.innerHTML = `
        <a href="https://t.me/yuk69bot" target="_blank">
            <img src="aab.jpg" alt="Promo Spesial">
        </a>
        <button id="close-banner">X</button>
    `;

    // Tambahkan ke body
    document.body.appendChild(banner);

    // Styling banner
    let style = document.createElement("style");
    style.innerHTML = `
        #floating-banner {
            position: fixed;
            width: 80px;
            padding: 10px;
            background: white;
            border: 2px solid #ff9800;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            z-index: 12000;
            transition: transform 0.5s ease-in-out;
        }
        #floating-banner img {
            width: 100%;
            height: auto;
        }
        #close-banner {
            position: absolute;
            top: -10px;
            right: -10px;
            background: rgb(4, 18, 212);
            color: white;
            border: none;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
        }
            @media (max-width: 768px){
            #floating-banner {
            width: 70px;
            }
    `;
    document.head.appendChild(style);

    // Posisi awal
    let posX = Math.random() * (window.innerWidth - 240);
    let posY = Math.random() * (window.innerHeight - 140);
    banner.style.left = `${posX}px`;
    banner.style.top = `${posY}px`;

    // Fungsi untuk menggerakkan banner dengan animasi
    function moveBanner() {
        let maxX = window.innerWidth - banner.clientWidth - 20;
        let maxY = window.innerHeight - banner.clientHeight - 20;

        let targetX = Math.random() * maxX;
        let targetY = Math.random() * maxY;

        let speed = 2; // Kecepatan gerak
        function animate() {
            let dx = targetX - posX;
            let dy = targetY - posY;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 1) {
                setTimeout(moveBanner, 2000); // Tunggu 2 detik sebelum bergerak lagi
                return;
            }

            posX += (dx / distance) * speed;
            posY += (dy / distance) * speed;

            banner.style.left = `${posX}px`;
            banner.style.top = `${posY}px`;

            requestAnimationFrame(animate);
        }

        animate();
    }

    // Mulai pergerakan banner
    moveBanner();

    // Fungsi untuk menutup banner
    document.getElementById("close-banner").addEventListener("click", function() {
        banner.style.display = "none";
    });

})();
