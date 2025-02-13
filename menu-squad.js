(function () {
    const container = document.body;
    const multiAction = document.createElement('div');
    multiAction.className = 'multi-action';
    multiAction.style.position = 'fixed';
    multiAction.style.width = '80px';
    multiAction.style.height = '80px';
    multiAction.style.left = '3%';
    multiAction.style.bottom = '5%';
    multiAction.style.zIndex = "1000";

    // Tombol utama
    const actionButton = document.createElement('button');
    actionButton.className = 'action-button';
    actionButton.style.position = 'absolute';
    actionButton.style.width = '80px';
    actionButton.style.height = '80px';
    actionButton.style.borderRadius = '50%';
    actionButton.style.background = '#111c7a';
    actionButton.style.border = 'none';
    actionButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.16)';
    actionButton.style.transition = 'all .3s';

    // Tambahkan gambar pada tombol utama
    const mainImage = document.createElement('img');
    mainImage.src = ''https://yudha125.github.io/menu-widget/Image/SQUAD777.gif';
    mainImage.style.width = '100px';
    mainImage.style.bottom = '-10px';
    mainImage.style.left = '-10px';
    mainImage.style.position = 'absolute';
    actionButton.appendChild(mainImage);

    // Tambahkan tombol utama ke dalam multi-action
    multiAction.appendChild(actionButton);

    // Buat daftar tombol tambahan
    const actionsList = document.createElement('ul');
    actionsList.className = 'actions';
    actionsList.style.position = 'absolute';
    actionsList.style.margin = '0';
    actionsList.style.padding = '0';
    actionsList.style.listStyle = 'none';

    // Tambahkan elemen tombol tambahan
    const actions = [
        { href: 'https://t.me/Squad777official', img: 'https://yudha125.github.io/menu-widget/Image/tele.gif' },
        { href: 'https://t.ly/rtp-squad777', img: 'https://yudha125.github.io/menu-widget/Image/rtp.gif' },
        { href: 'https://api.whatsapp.com/send/?phone=6287718192707&text&type=phone_number&app_absent=0', img: 'https://yudha125.github.io/menu-widget/Image/wa.gif' },
        { href: 'https://www.facebook.com/share/g/15YseMVEj3/', img: 'https://yudha125.github.io/menu-widget/Image/fb.gif' }
    ];

    actions.forEach((action, index) => {
        const li = document.createElement('li');
        li.style.position = 'absolute';
        li.style.width = '80px';
        li.style.height = '80px';
        li.style.borderRadius = '50%';
        li.style.background = '#212121';
        li.style.transition = 'all .3s';
        li.style.transform = 'scale(0.3)';
        li.style.marginTop = `-${(index + 1) * 100}px`;
        li.style.opacity = '0';

        const a = document.createElement('a');
        a.href = action.href;
        a.target = '_blank'

        const img = document.createElement('img');
        img.src = action.img;
        img.style.width = '80px';

        a.appendChild(img);
        li.appendChild(a);
        actionsList.appendChild(li);
    });

    multiAction.appendChild(actionsList);
    container.appendChild(multiAction);

    // Event untuk toggle tombol utama
    actionButton.addEventListener('click', () => {
        const isActive = actionButton.classList.toggle('active');
        Array.from(actionsList.children).forEach((li, index) => {
            li.style.transform = isActive ? 'scale(1)' : 'scale(0.3)';
            li.style.opacity = isActive ? '1' : '0';
        });

        // Ubah gambar mainImage saat tombol ditekan
        mainImage.src = isActive
            ? 'https://images.emojiterra.com/google/noto-emoji/animated-emoji/274c.gif'
            : ''https://yudha125.github.io/menu-widget/Image/SQUAD777.gif';
    });
})();
