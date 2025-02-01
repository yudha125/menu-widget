function addDynamicContent(url1, url2, url3, url4) {
    console.log("URL 1:", url1);
    console.log("URL 2:", url2);
    console.log("URL 3:", url3);
    console.log("URL 4:", url4);

    // Debugging saat menambahkan elemen
    console.log("Menambahkan elemen multi-action...");
    if (
        url2 === 'https://pola.rtp-tvonepkr.shop' ||
        url2 === 'https://es.rtp-sctvpkr.cam/' ||
        url2 === 'https://id.rtp-metropkr.online/' ||
        url2 === 'https://pola.rtp-nettvpkr.cyou/' ||
        url2 === 'https://pro.rtp-pkhk.biz/'
    ) {
        (function () {
            const style = document.createElement('style');
            style.innerHTML = `
                .menu-download {
                    position: fixed;
                    width: 200px;
                    height: 100px;
                    border-radius: 50%;
                    bottom: 20%;
                    left: 8.5%;
                    transform: translateX(-50%);
                    cursor: pointer;
                    z-index:900;
                }
                
                .menu-download img {
                    width: 100%;
                    transition: all 1s ease;
                }
                @media (max-width: 768px) {
                    .menu-download {
                        position: fixed;
                        width: 150px;
                        height: auto;
                        border-radius: 50%;
                        bottom: 20%;
                        left: 20%;
                        transform: translateX(-50%);
                        cursor: pointer;
                        z-index:900;
                    }
                    .menu-download img {
                        width: 100%;
                        height: auto;
                        transition: all 1s ease;
                    }
                }
                .extra-imagesA {
                    display: none;
                    position: absolute;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%) translateY(20px);
                    opacity: 0;
                    transition: all 1s ease;
                    z-index: 10;
                    width:100px;
                }
                
                .extra-imagesA img {
                    margin-bottom: 10px;
                    transition: transform 5s ease-in-out;
                }
                
                .extra-imagesA.show {
                    display: block;
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            `;
            document.head.appendChild(style); // Menambahkan style ke dalam head

            const menuDiv = document.createElement('div');
            menuDiv.classList.add('menu-download');

            const imgA = document.createElement('img');
            imgA.src = 'Image/SAVE.gif';
            imgA.alt = 'Click Me';
            imgA.id = 'clickImage';
            menuDiv.appendChild(imgA);

            const extraImagesDiv = document.createElement('div');
            extraImagesDiv.classList.add('extra-imagesA');
            extraImagesDiv.id = 'extraImagesA';

            // Gambar pertama
            const img1 = document.createElement('img');
            img1.src = 'Image/FORANDROID.jpg';
            img1.alt = 'image1';
            const link1 = document.createElement('a');
            link1.href = "https://www.gameiosapk.com/android.php";
            link1.target = '_blank';
            link1.appendChild(img1);
            extraImagesDiv.appendChild(link1);

            // Gambar kedua
            const img2 = document.createElement('img');
            img2.src = 'Image/FOR_IOS.jpg';
            img2.alt = 'image2';
            const link2 = document.createElement('a');
            link2.href = "https://www.gameiosapk.com/iphone.php";
            link2.target = '_blank';
            link2.appendChild(img2);
            extraImagesDiv.appendChild(link2);

            menuDiv.appendChild(extraImagesDiv);
            document.body.appendChild(menuDiv);

            // Event listener untuk toggle
            imgA.addEventListener('click', function () {
                const extraImages = document.getElementById('extraImagesA');
                if (extraImages.classList.contains('show')) {
                    extraImages.classList.remove('show');
                } else {
                    extraImages.classList.add('show');
                }
            });

            // Tambahkan event listener untuk alert pada img1
            img1.addEventListener('click', function (event) {
                alert('INGIN BERMAIN DI MOBILE APK? TAMBAHKAN KODE @abq DIBELAKANG USERNAME UNTUK LOGIN DI MOBILE APK');
            });

            // Tambahkan event listener untuk alert pada img2
            img2.addEventListener('click', function (event) {
                alert('INGIN BERMAIN DI MOBILE APK? TAMBAHKAN KODE @abq DIBELAKANG USERNAME UNTUK LOGIN DI MOBILE APK');
            });
        })();

    };
    const style = document.createElement('style');
    style.innerHTML = `
                @media (max-width: 768px) {
                    .action-button{
                        width:90px;
                        height:90px;
                    }
                }
            `;
    document.head.appendChild(style);
    const container = document.body;
    const multiAction = document.createElement('div');
    multiAction.className = 'multi-action';
    multiAction.style.position = 'fixed';
    multiAction.style.width = '90px';
    multiAction.style.height = '90px';
    multiAction.style.left = '5%';
    multiAction.style.bottom = '8%';
    multiAction.style.zIndex = "1000";

    // Tombol utama
    const actionButton = document.createElement('button');
    actionButton.className = 'action-button';
    actionButton.style.position = 'absolute';
    actionButton.style.width = '120px';
    actionButton.style.height = '120px';
    actionButton.style.borderRadius = '50%';
    actionButton.style.background = 'radial-gradient(circle, rgba(252,252,252,1) 0%, rgba(10,94,119,1) 56%, rgba(4,11,61,1) 100%)';
    actionButton.style.border = 'none';
    actionButton.style.boxShadow = '2px 2px 10px rgb(5, 128, 26)';
    actionButton.style.transition = 'all .3s';
    actionButton.style.cursor = "pointer";

    const mainImage = document.createElement('img');
    if (url2 === 'https://pro.rtpyk-69.beauty/') {
        mainImage.src = 'Image/images/YUK69A.gif';
        mainImage.style.height = '90px';
        mainImage.style.maxWidth = '90px';
        mainImage.style.bottom = '-5px';
        mainImage.style.left = '50%';
        mainImage.style.transform = "translateX(-50%) translateY(-15%)"
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);

    } else if (url2 === 'https://t.ly/rtp-hoki777/') {
        mainImage.src = 'Image/images/HOKI.gif';
        mainImage.style.height = '90px';
        mainImage.style.maxWidth = '95px';
        mainImage.style.bottom = '15px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);

    } else if (url2 === 'https://es.pola-metrowin88.site/') {
        mainImage.src = 'Image/images/METROWIN88.gif';
        mainImage.style.width = '90px';
        mainImage.style.bottom = '10px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);

    } else if (url2 === 'https://pola.rtp-tvonepkr.shop') {
        mainImage.src = 'Image/images/TVONE.gif';
        mainImage.style.width = '90px';
        mainImage.style.maxHeight = '70px';
        mainImage.style.bottom = '30px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);
    } else if (url2 === 'https://es.rtp-sctvpkr.cam/') {
        mainImage.src = 'Image/images/SCTV.gif';
        mainImage.style.width = '90px';
        mainImage.style.maxHeight = '70px';
        mainImage.style.bottom = '30px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);
    } else if (url2 === 'https://id.rtp-metropkr.online/') {
        mainImage.src = 'Image/images/METROTVPOKER.gif';
        mainImage.style.width = '90px';
        mainImage.style.maxHeight = '80px';
        mainImage.style.bottom = '20px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);
    } else if (url2 === 'https://pola.rtp-nettvpkr.cyou/') {
        mainImage.src = 'Image/images/NETTV.gif';
        mainImage.style.width = '90px';
        mainImage.style.maxHeight = '80px';
        mainImage.style.bottom = '25px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);
    } else if (url2 === 'https://pro.rtp-pkhk.biz/') {
        mainImage.src = 'Image/images/POKERHOKIBET88.gif';
        mainImage.style.width = '90px';
        mainImage.style.maxHeight = '80px';
        mainImage.style.bottom = '25px';
        mainImage.style.left = '15px';
        mainImage.style.position = 'absolute';
        actionButton.appendChild(mainImage);
    }

    multiAction.appendChild(actionButton);

    const actionsList = document.createElement('ul');
    actionsList.className = 'actions';
    actionsList.style.position = 'absolute';
    actionsList.style.margin = '0';
    actionsList.style.padding = '0';
    actionsList.style.listStyle = 'none';

    const actions = [
        { href: url1, img: 'Image/images/tele.gif' },
        { href: url2, img: 'Image/images/rtp.gif' },
        { href: url3, img: 'Image/images/wa.gif' },
        { href: url4, img: 'Image/images/fb.gif' }
    ];


    let validIndex = 0; // Menghitung hanya elemen dengan href yang valid

    actions.forEach((action) => {
        if (action.href) { // Memastikan href tidak kosong
            const li = document.createElement('li');
            li.style.position = 'absolute';
            li.style.width = '80px';
            li.style.height = '80px';
            li.style.borderRadius = '50%';
            li.style.background = 'radial-gradient(circle, rgba(252, 252, 252, 1) 0%, rgba(50, 183, 222, 1) 56%, rgba(7, 29, 184, 1) 100%)';
            li.style.transition = 'all .3s';
            li.style.transform = 'scale(0)';
            li.style.marginTop = `-${(validIndex + 1) * 100}px`; // Gunakan validIndex
            li.style.left = "25px";
            li.style.opacity = '0';

            const a = document.createElement('a');
            a.href = action.href;
            a.target = "_blank";

            const img = document.createElement('img');
            img.src = action.img;
            img.style.width = '80px';

            a.appendChild(img);
            li.appendChild(a);
            actionsList.appendChild(li);

            validIndex++; 
        }
    });


    multiAction.appendChild(actionsList);
    container.appendChild(multiAction);

    actionButton.addEventListener('click', () => {
        const isActive = actionButton.classList.toggle('active');
        Array.from(actionsList.children).forEach((li, index) => {
            li.style.transform = isActive ? 'scale(1)' : 'scale(0)';
            li.style.opacity = isActive ? '1' : '0';
        });

        mainImage.src = isActive
            ? (() => {

                return 'https://images.emojiterra.com/google/noto-emoji/animated-emoji/274c.gif';
            })()
            : (() => {
                if (url2 === 'https://pro.rtpyk-69.beauty/') {
                    return 'Image/images/YUK69A.gif';
                } else if (url2 === 'https://t.ly/rtp-hoki777/') {
                    return 'Image/images/HOKI.gif';
                } else if (url2 === 'https://es.pola-metrowin88.site/') {
                    return 'Image/images/METROWIN88.gif';
                } else if (url2 === 'https://t.ly/rtp-squad777') {
                    return 'Image/images/SQUAD777.gif';
                } else if (url2 === 'https://pola.rtp-tvonepkr.shop') {
                    return 'Image/images/TVONE.gif';
                } else if (url2 === 'https://es.rtp-sctvpkr.cam/') {
                    return 'Image/images/SCTV.gif';
                } else if (url2 === 'https://id.rtp-metropkr.online/') {
                    return 'Image/images/METROTVPOKER.gif';
                } else if (url2 === 'https://pola.rtp-nettvpkr.cyou/') {
                    return 'Image/images/NETTV.gif';
                } else if (url2 === 'https://pro.rtp-pkhk.biz/') {
                    return 'Image/images/POKERHOKIBET88.gif';
                }
            })();
    });

}
