import { primaryInput } from 'detect-it';

export function dealerCards() {
    const cards = Array.from(document.querySelectorAll('.dealer__card'));

    cards.forEach(card => {
        const btn = card.querySelector('.dealer__card-close');

        if (primaryInput === 'touch') {
            card.addEventListener('click', event => {
                event.preventDefault();
                card.classList.toggle('active');
            });
        } else {
            card.addEventListener('mouseenter', () => {
                card.classList.add('active');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('active');
            });

            btn.addEventListener('click', event => {
                event.preventDefault();
                card.classList.toggle('active');
            });
        }
    });
}
