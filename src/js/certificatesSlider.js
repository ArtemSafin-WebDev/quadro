import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function certificatesSlider() {
    const elements = Array.from(document.querySelectorAll('.js-certificates-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 500,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.about__certificates-slider-arrow--next'),
                prevEl: element.querySelector('.about__certificates-slider-arrow--prev'),
            }
        });
    });
}
