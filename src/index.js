import './styles.css';
import {
    moveSlide,
    showSlides,
    moveDots,
    returnToMainSlide,
    autoMoveSlide,
} from './modules/slideshow';
import { renderMovieCards, renderMoviesList } from './modules/dom';

const slideIndex = 1;
const originalMainContent = '';

const dropDownBtn = document.querySelector('.profile');
const dropDownIcon = document.querySelector('.settings-btn');
const dropDownMenu = document.querySelector('.dropdown');
const logoBtn = document.querySelector('.header-logo');
const homeBtn = document.querySelector('.home-tab');
const moviesBtn = document.querySelector('.movies-tab');
const mainContainer = document.getElementById('main');

const showDropdown = () => {
    dropDownMenu.classList.add('show');
    dropDownIcon.style.transform = 'rotate(180deg)';
};

const hideDropdown = () => {
    dropDownMenu.classList.remove('show');
    dropDownIcon.style.transform = 'rotate(0deg)';
};

const openDropdown = () => {
    dropDownBtn.addEventListener('mouseenter', () => {
        showDropdown();
    });
    dropDownMenu.addEventListener('mouseenter', () => {
        showDropdown();
    });
};

const closeDropdown = () => {
    dropDownBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (
                !dropDownBtn.matches(':hover') &&
                !dropDownMenu.matches(':hover')
            ) {
                hideDropdown();
            }
        }, 500);
    });
    dropDownMenu.addEventListener('mouseleave', () => {
        hideDropdown();
    });
};

const headerListeners = () => {
    logoBtn.addEventListener('click', () => {
        returnToMainSlide();
    });
    homeBtn.addEventListener('click', () => {
        returnToMainSlide();
    });
    // moviesBtn.addEventListener('click', () => {
    //     mainContainer.innerHTML = '';
    //     renderMoviesList();
    // });
};

renderMovieCards();
openDropdown();
closeDropdown();
showSlides(slideIndex);
moveSlide();
moveDots();
// autoMoveSlide();
headerListeners();
