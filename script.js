const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
const closeBtn = document.querySelector('.close-button-mobile');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
});
