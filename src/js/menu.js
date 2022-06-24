import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const burger = document.querySelector('.page-header__burger');
    const menu = document.querySelector('.page-header__menu');

    window.menuOpen = false;

    if (!burger || !menu) return;

    console.log('Hello menu')

    const openMenu = () => {
        if (window.menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu, {
            reserveScrollBarGap: true
        });
        window.menuOpen = true;
    };
    const closeMenu = () => {
        if (!window.menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        window.menuOpen = false;
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    burger.addEventListener('click', event => {
        event.preventDefault();
        if (!window.menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });
}
