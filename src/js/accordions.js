import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function accordions() {
    const SPEED = 0.3;

    const openAccordion = (element) => {
        gsap.to(element, {
            height: 'auto',
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh(),
        });
    };
    const closeAccordion = (element) => {
        gsap.to(element, {
            height: 0,
            duration: SPEED,
            onComplete: () => ScrollTrigger.refresh(),
        });
    };

    document.addEventListener('click', (event) => {
        if (event.target.matches('.js-accordion-btn') || event.target.closest('.js-accordion-btn')) {
            const btn = event.target.matches('.js-accordion-btn') ? event.target : event.target.closest('.js-accordion-btn');
            const element = btn.closest('.js-accordion');
            const content = element.querySelector('.js-accordion-content');
            const elements = Array.from(document.querySelectorAll('.js-accordion'));

            event.preventDefault();

            if (element.hasAttribute('data-close-other')) {
                elements.forEach((otherElement) => {
                    if (otherElement !== element) {
                        if (otherElement.classList.contains('active')) {
                            const content = otherElement.querySelector('.js-accordion-content');
                            closeAccordion(content);
                            otherElement.classList.remove('active');
                        }
                    }
                });
            }

            if (element.classList.contains('active')) {
                closeAccordion(content);
            } else {
                openAccordion(content);
            }
            element.classList.toggle('active');
        }
    });
}
