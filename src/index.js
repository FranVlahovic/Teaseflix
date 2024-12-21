import './styles.css';
import { closePlayer, showPlayer, loadVideo } from './modules/player';

const dropDownBtn = document.querySelector('.profile');
const dropDownIcon = document.querySelector('.settings-btn');
const dropDownMenu = document.querySelector('.dropdown');
const playBtn = document.querySelectorAll('.movie-play');
const closeTrailerBtn = document.querySelector('.close-trailer');

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

const btnListeners = () => {
    playBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            showPlayer();
        });
    });

    closeTrailerBtn.addEventListener('click', () => {
        closePlayer();
    });
};

openDropdown();
closeDropdown();
btnListeners();
