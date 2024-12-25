import matrix from '../assets/images/matrix.jpg';
import madmax from '../assets/images/madmax2.jpg';
import snowden from '../assets/images/snowden.jpg';
import playIcon from '../assets/icons/play.svg';
import infoIcon from '../assets/icons/information-outline.svg';
import { closePlayer, showPlayer, showInfo } from './player';

export const movieCardsData = [
    {
        id: 1,
        videoUrl:
            'https://www.youtube.com/embed/vKQi3bBA1y8?si=hSTmBZuFhhCQ6vdy',
        title: 'The Matrix (1999)',
        director: 'The Wachowskis',
        stars: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        plot: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        imdbLink: 'https://www.imdb.com/title/tt0133093/',
        imgSrc: matrix,
    },
    {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/hEJnMQG9ev8',
        title: 'Mad Max: Fury Road (2015)',
        director: 'George Miller',
        stars: 'Tom Hardy, Charlize Theron, Nicholas Hoult',
        plot: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.',
        imdbLink: 'https://www.imdb.com/title/tt1392190/?ref_=ttpl',
        imgSrc: madmax,
    },
    {
        id: 3,
        videoUrl:
            'https://www.youtube.com/embed/QlSAiI3xMh4?si=l5HZbbOSskibVjz_',
        title: 'Snowden (2016)',
        director: 'Oliver Stone',
        stars: 'Joseph Gordon-Levitt, Shailene Woodley, Melissa Leo',
        plot: 'The NSA illegal surveillance techniques are leaked to the public by one of the agencys employees, Edward Snowden, in the form of thousands of classified documents distributed to the press.',
        imdbLink: 'https://www.imdb.com/title/tt3774114',
        imgSrc: snowden,
    },
];

export const renderMovieCards = () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.innerHTML = '';

    movieCardsData.forEach((movie) => {
        slideshowContainer.innerHTML += `
            <div class="movie-card fade" id="${movie.id}">
                <img src="${movie.imgSrc}" alt="${movie.title} Cover" class="movie-cover">
                <div class="movie-container">
                    <h1 class="movie-name">${movie.title}</h1>
                    <p class="movie-description">${movie.plot}</p>
                    <div class="movie-buttons">
                        <button class="movie-play" data-video-url="${movie.videoUrl}"><img src=${playIcon} alt="">Play</button>
                        <button class="movie-info"><img src=${infoIcon} alt="">More Info</button>
                    </div>
                </div>
            </div>
        `;
    });

    slideshowContainer.innerHTML += `
        <div class="movie-trailer-container" style="display:none;">
            <button class="close-trailer">X</button>
            <iframe class="video-frame" width="1280" height="720" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div class="movie-info-container" style="display:none;">
        </div>

        <div class="slideshow-commands">
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
        </div>
    `;

    const dotsHTML = movieCardsData
        .map(() => `<span class="dot"></span>`)
        .join('');

    slideshowContainer.innerHTML += `
        <div class="dots">${dotsHTML}</div>
    `;

    btnListeners();
};

const btnListeners = () => {
    const playBtns = document.querySelectorAll('.movie-play');
    const closeTrailerBtn = document.querySelector('.close-trailer');
    const infoBtns = document.querySelectorAll('.movie-info');

    playBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const videoUrl = event.target
                .closest('.movie-play')
                .getAttribute('data-video-url');
            showPlayer(videoUrl);
        });
    });

    infoBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const movieId = e.target.closest('.movie-card').id;
            showInfo(movieId);
        });
    });

    closeTrailerBtn.addEventListener('click', () => {
        closePlayer();
    });
};
