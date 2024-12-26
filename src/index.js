import './styles.css';
import {
    moveSlide,
    showSlides,
    moveDots,
    returnToMainSlide,
    autoMoveSlide,
} from './modules/slideshow';
import {
    renderMovieCards,
    renderMoviesList,
    showNoContentPopup,
} from './modules/dom';

const slideIndex = 1;

const dropDownBtn = document.querySelector('.profile');
const dropDownIcon = document.querySelector('.settings-btn');
const dropDownMenu = document.querySelector('.dropdown');
const logoBtn = document.querySelector('.header-logo');
const homeBtn = document.querySelector('.home-tab');
const moviesBtn = document.querySelector('.movies-tab');
const popularBtn = document.querySelector('.popular-tab');
const myListBtn = document.querySelector('.mylist-tab');
const browseBtn = document.querySelector('.browse-tab');
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
    const noContentButtons = [moviesBtn, popularBtn, myListBtn, browseBtn];
    noContentButtons.forEach((btn) => {
        btn.addEventListener('click', showNoContentPopup);
    });

    logoBtn.addEventListener('click', returnToMainSlide);
    homeBtn.addEventListener('click', returnToMainSlide);
};

renderMovieCards();
openDropdown();
closeDropdown();
showSlides(slideIndex);
moveSlide();
moveDots();
// autoMoveSlide();
headerListeners();
