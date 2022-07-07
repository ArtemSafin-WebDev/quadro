export default function cookies() {
    const cookies = document.querySelector('.js-cookies');
    const closeBtns = Array.from(document.querySelectorAll('.js-cookies-close'));

    if (cookies) {
        if (localStorage.getItem('cookies-accepted') !== 'yes') {
            cookies.classList.add('shown');
        }

        closeBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                cookies.classList.remove('shown');
                localStorage.setItem('cookies-accepted', 'yes');
            });
        });
    }
}
