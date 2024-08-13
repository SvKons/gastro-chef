document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    // Клик на меню-бургер
    burger.addEventListener('click', e => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Клик вне области меню
    body.addEventListener('click', e => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });

    // Клик внутри меню
    nav.addEventListener('click', e => {
        e.stopPropagation();
    });
});
