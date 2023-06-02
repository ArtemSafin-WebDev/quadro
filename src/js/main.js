import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { dealerCards } from './dealerCards';
import projectsSlider from './projectsSlider';
import imagesLoaded from 'imagesloaded';
import certificatesSlider from './certificatesSlider';
import fancybox from './fancybox';
import fileUpload from './fileUpload';
import partners from './partners';
import fixedFooter from './fixedFooter';
import circlesAnimation from './circlesAnimation';
import fixedHeader from './fixedHeader';
import cookies from './cookies';
import productSlider from './productSlider';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    detectTouch();
    setScrollbarWidth();
    masks();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();
    dealerCards();
    projectsSlider();
    fancybox();
    fileUpload();
    fixedFooter();
    circlesAnimation();
    fixedHeader();
    cookies();
    productSlider();

    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        const imgLoaded = imagesLoaded(document.querySelector('.page-content'));

        imgLoaded.on('always', () => {
            certificatesSlider();
            partners();
            ScrollTrigger.refresh();
        });
    }
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
