import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function anchorLinks() {
    const pageHeader = document.querySelector('.page-header');
    const offset = pageHeader ? pageHeader.offsetHeight : 80;
    // const offset = 30;
    const DURATION = 1.4;
    const scrollByHash = hash => {
        const elementToScroll = document.querySelector(hash);
        if (elementToScroll && !elementToScroll.matches('.js-modal')) {
            if (window.menuOpen && typeof window.closeMenu === 'function') {
                window.closeMenu();
            } else if (window.activeModal && typeof window.closeModal === 'function') {
                window.closeModal(window.activeModal);
            }

            gsap.to(window, {
                duration: DURATION,
                ease: 'power2.out',
                scrollTo: {
                    y: elementToScroll,
                    autoKill: false,
                    offsetY: offset
                }
            });
        } else {
            console.error('No element to scroll');
        }
    };
    document.addEventListener('click', event => {
        if (event.target.matches('a') || event.target.closest('a')) {
            const link = event.target.matches('a') ? event.target : event.target.closest('a');
            const hash = link.hash;

            // console.log('Hash', hash);

            const url = new URL(link.href);
            const pageUrl = new URL(window.location);

            if (pageUrl.pathname !== url.pathname) return;

            if (hash) {
                event.preventDefault();
                scrollByHash(hash);
            }
        }
    });

    if (window.location.hash) {
        scrollByHash(window.location.hash);
    }
}
