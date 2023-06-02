import { Swiper, Navigation, EffectFade, Thumbs, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Thumbs, Pagination]);

export default function productSlider() {
    const elements = Array.from(document.querySelectorAll('.js-product-slider'));

    elements.forEach(element => {
        const thumbsContainer = element.querySelector('.product__slider-thumbs .swiper');

        const mainContainer = element.querySelector('.product__slider-main .swiper');
        const mobile = matchMedia('(max-width: 640px)').matches;

        const mainSliderOptions = {
            watchOverflow: true,
            speed: 700,
            threshold: 5,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.product__slider-arrow--next'),
                prevEl: element.querySelector('.product__slider-arrow--prev')
            },
            thumbs: {}
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            spaceBetween: 5,
            slidesPerView: 5,
            threshold: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: mobile ? 'horizontal' : 'vertical',
            centerInsufficientSlides: false,
            breakpoints: {
                641: {
                    spaceBetween: 12,
                    slidesPerView: 'auto'
                }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
