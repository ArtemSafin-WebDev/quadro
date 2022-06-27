import { debounce } from 'lodash';

export default function fixedHeader() {
    const checkHeader = () => {
        if (window.pageYOffset > 0) {
            document.body.classList.add('fixed-header');
        } else {
            document.body.classList.remove('fixed-header');
        }
    };
    window.addEventListener('scroll', () => {
        checkHeader();
    });

    window.addEventListener('resize', debounce(checkHeader, 300));
}
