import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { debounce } from 'lodash';
import { IS_MOBILE } from './utils';

gsap.registerPlugin(ScrollTrigger);

export default function fixedFooter() {
    const pageFooter = document.querySelector('.page-footer');

    const pageFooterInner = document.querySelector('.page-footer__inner');
    if (!pageFooter) return;

    let previousWidth = 0;

    const setFixedFooter = () => {
        gsap.set(pageFooter, {
            clearProps: 'all'
        });
        gsap.set(pageFooterInner, {
            clearProps: 'all'
        });

        gsap.set(pageFooter, {
            height: pageFooter.offsetHeight
        });

        gsap.set(pageFooterInner, {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 'auto'
        });

        // ScrollTrigger.refresh();
    };

    setFixedFooter();
    window.addEventListener(
        'resize',
        debounce(() => {
            if (previousWidth === document.documentElement.clientWidth) return;
            previousWidth = document.documentElement.clientWidth;
            setFixedFooter();
        }, 300)
    );
}
