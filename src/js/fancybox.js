import { Fancybox } from '@fancyapps/ui';

export default function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        placeFocusBack: false
    });
}