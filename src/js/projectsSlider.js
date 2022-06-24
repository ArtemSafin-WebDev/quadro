import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function projectsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-projects-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.about__projects-slider-arrow--next'),
                prevEl: element.querySelector('.about__projects-slider-arrow--prev'),
            }
        });
    });
}
