document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.textContent = `


    .button-main.button-absolute:hover {
        background: linear-gradient(179deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 27%, rgba(22, 93, 107, 1) 100%);
        color: white;
    }

    .form-control-abunawas::placeholder {
        color: rgba(87, 87, 99, 1) !important; /* Ganti sesuai warna yang diinginkan */
        opacity: 1; /* Supaya warna tidak transparan */
    }

    .popup-report {
        display: none;
        position: absolute;
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
        z-index:99999999;
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

    @media (max-width: 600px) {
        #formReport {
            padding: 15px;
        }

        #formReport .input-group-abunawas-text {
            font-size: 12px;
            padding: 8px;
        }

        #formReport .form-control-abunawas,
        #formReport .form-select {
            font-size: 13px;
        }
    }
    `
    document.head.appendChild(style);
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
                    <input type="text" placeholder="Username" class="form-control-abunawas" name="username" id="username">
                </div>
                <div class="input-group-abunawas">
                    <span class="input-group-abunawas-text"><i class="fab fa-whatsapp"></i></span>
                    <input type="text" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')"
                        placeholder="Nomor WA aktif (cth: 0812364896)" class="form-control-abunawas" name="wa" id="wa">
                </div>
                <div class="input-group-abunawas">
                    <span class="input-group-abunawas-text"><i class="fas fa-calendar-week"></i></span>
                    <input type="text" placeholder="Tanggal Kendala"
                        onkeyup="this.value = this.value.replace(/[^0-9-]/g, '')" class="form-control-abunawas" name="tanggalkendala"
                        id="dateresult">
                </div>
                <div class="input-group-abunawas">
                    <span class="input-group-abunawas-text"><i class="fas fa-exclamation-triangle"></i></span>
                    <input type="text" placeholder="Kendala" class="form-control-abunawas" name="kendala" id="kendala">
                </div>
                <div class="input-group-abunawas">
                    <span class="input-group-abunawas-text"><i class="fas fa-globe"></i></span>
                    <select name="bokendala" class="form-select text-capitalize" aria-label="Default select example">
                        <option value="">SITUS</option>
                        <option value="tototarot">TOTOTAROT</option>
                    </select>
                </div>
                <div style="height:150px;" class="input-group-abunawas">
                    <span class="input-group-abunawas-text"><i class="fas fa-comments"></i></span>
                    <textarea class="form-control-abunawas" id="isipesan" name="isipesan"></textarea>
                </div>
                <div class="input-group-abunawas">
                    <span class="input-group-abunawas-text"><i class="fas fa-vote-yea"></i></span>
                    <select name="saran" id="saran" class="form-select">
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
    buttonMain.style.bottom = "0";
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

