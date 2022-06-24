export function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

export function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const IS_MOBILE = window.matchMedia('(max-width: 640px)').matches;
export const IS_TABLET = window.matchMedia('(max-width: 1024px)').matches;
