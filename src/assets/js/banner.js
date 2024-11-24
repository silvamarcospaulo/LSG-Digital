const botaoFechar = document.getElementById('fecharBanner');
const banner = document.getElementById('banner');

function showBanner() {
    banner.style.display = 'flex';
}

botaoFechar.addEventListener('click', () => {
    banner.style.display = 'none';
    setTimeout(showBanner, 60000);
});
