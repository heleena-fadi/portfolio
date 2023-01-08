const iconsEl = document.getElementById('icons');

function toggleMobileMenu() {
    iconsEl.classList.toggle('open');
}

iconsEl.addEventListener('click', toggleMobileMenu);