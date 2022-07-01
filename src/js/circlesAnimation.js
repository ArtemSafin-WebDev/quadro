import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { convertRemToPixels, IS_MOBILE } from './utils';

gsap.registerPlugin(ScrollTrigger);

export default function circlesAnimation() {
    ScrollTrigger.matchMedia({
        '(min-width: 641px)': function() {
            const circlesTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.about',
                    start: () => `top+=${convertRemToPixels(0)} bottom`,
                    endTrigger: '.about__work-with',
                    end: 'bottom top',
                    scrub: 1
                }
            });

            circlesTl.from('.about__work-with-card', {
                y: () => convertRemToPixels(10),
                duration: 1,
                stagger: 0.2
            });
        }
    });

    const projectsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about__projects',
            start: () => `top+=${convertRemToPixels(17)} bottom`,
            end: 'bottom top',
            markers: false
        }
    });

    projectsTl
        .from(
            '.about__projects-heading',
            {
                autoAlpha: 0,
                y: () => convertRemToPixels(3),
                duration: 0.4
            },
            0
        )
        .from(
            '.about__projects-slider',
            {
                autoAlpha: 0,
                duration: 0.6
            },
            0
        );
    const certsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about__certificates',
            start: () => `top+=${convertRemToPixels(17)} bottom`,
            end: 'bottom top',
            markers: false
        }
    });

    certsTl
        .from(
            '.about__certificates-heading',
            {
                autoAlpha: 0,
                y: () => convertRemToPixels(3),
                duration: 0.4
            },
            0
        )
        .from(
            '.about__certificates-slider',
            {
                autoAlpha: 0,
                duration: 0.6
            },
            0
        );

    const contactUsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-us',
            start: () => `top+=${convertRemToPixels(17)} bottom`,
            end: 'bottom top',
            markers: false
        }
    });

    contactUsTl
        .from(
            '.contact-us__heading',
            {
                autoAlpha: 0,
                y: () => convertRemToPixels(3),
                duration: 0.4
            },
            0
        )
        .from(
            '.contact-us__text',
            {
                autoAlpha: 0,
                duration: 0.4
            },
            0.2
        )
        .from(
            '.contact-us__form',
            {
                autoAlpha: 0,
                duration: 0.4
            },
            0.2
        );

    ScrollTrigger.create({
        trigger: '.dealer',
        start: 'top center',
        end: 'bottom top',
        markers: false,
        onEnter: () => {
            const dealer = document.querySelector('.dealer');
            if (dealer) dealer.classList.remove('dealer--dark');
        }
    });

    const dealerTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.dealer',
            start: () => `top+=${convertRemToPixels(17)} bottom`,
            end: 'bottom top',
            markers: false
        }
    });

    dealerTl
        .from(
            '.dealer__heading',
            {
                autoAlpha: 0,
                y: () => convertRemToPixels(3),
                duration: 0.4
            },
            0
        )
        .from(
            '.dealer__text',
            {
                autoAlpha: 0,
                duration: 0.6,
                y: () => convertRemToPixels(3)
            },
            0.3
        )
        .from(
            '.dealer__btn',
            {
                autoAlpha: 0,
                duration: 0.6,
                y: () => convertRemToPixels(3)
            },
            0.3
        )
        .from(
            '.dealer__list-item',
            {
                autoAlpha: 0,
                duration: 0.6,
                // stagger: 0.2,
                y: () => convertRemToPixels(3)
            },
            0.8
        );

    const cards = Array.from(document.querySelectorAll('.categories__card'));

    cards.forEach(card => {
        const title = card.querySelector('.categories__card-title');
        const icon = card.querySelector('.categories__card-icon')
        const categoriesCardsTl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'center bottom'
            }
        });

        categoriesCardsTl.from(title, {
            autoAlpha: 0,
            duration: 0.5,
            y: () => IS_MOBILE ? convertRemToPixels(1.5) : convertRemToPixels(3),
            delay: 0
        }).from(icon, {
            autoAlpha: 0,
            duration: 0.5,
        }, 0)
    });

    const categoriesTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.categories',
            start: () => `top+=${convertRemToPixels(17)} bottom`,
            end: 'bottom top',
            markers: false
        }
    });

    const titleDelay = IS_MOBILE ? 0.3 : 0.6;

    categoriesTl
        .from(
            '.categories__heading',
            {
                autoAlpha: 0,
                y: () => convertRemToPixels(3),
                duration: 0.4
            },
            0
        )
        .from(
            '.categories__wrapper',
            {
                autoAlpha: 0,
                duration: 0.7,
                y: () => convertRemToPixels(3)
            },
            0
        )
        // .from(
        //     '.categories__card-title',
        //     {
        //         autoAlpha: 0,
        //         duration: 0.7,
        //         y: () => convertRemToPixels(1.5)
        //     },
        //     titleDelay
        // )
        .from('.categories__partners', {
            autoAlpha: 0,
            duration: 0.4,
            y: () => convertRemToPixels(3)
        });
}
