const menuButton = document.getElementById('menuButton');
const menuClose = document.getElementById('menuClose');
const primaryMenu = document.getElementById('primaryMenu');
const header = document.querySelector('.site-header');

function toggleMenu(open) {
    const isOpen = open === true || (open === undefined && !primaryMenu.classList.contains('open'));
    primaryMenu.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen);
}

menuButton.addEventListener('click', () => toggleMenu(true));
menuClose.addEventListener('click', () => toggleMenu(false));

document.querySelectorAll('.menu-list a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', event => {
        event.preventDefault();
        const thankYou = document.getElementById('thankYouMessage');
        if (!thankYou) return;
        thankYou.style.display = 'block';
        enquiryForm.reset();
        window.scrollTo({ top: thankYou.offsetTop - 80, behavior: 'smooth' });
    });
}
