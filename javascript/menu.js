const btn = document.querySelector('.header-menu-button');
const footer = document.querySelector('.footer');
const footerTop = document.querySelector('.footer-top');
const main = document.querySelector('main');

btn.addEventListener('click', () => {
    if (!btn.className.includes('open')) {
        window.scrollTo({
            top: 0,
        })
    }
    btn.classList.toggle('open')
    footer.classList.toggle('open')
    footerTop.classList.toggle('open')
    main.classList.toggle('hide')
})