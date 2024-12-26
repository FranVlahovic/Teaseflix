import matrix from '../assets/images/matrix.jpg';
import madmax from '../assets/images/madmax2.jpg';
import snowden from '../assets/images/snowden.jpg';
import gladiator from '../assets/images/gladiator.jpg';
import martian from '../assets/images/martian.jpg';
import playIcon from '../assets/icons/play.svg';
import infoIcon from '../assets/icons/information-outline.svg';
import { closePlayer, showPlayer, showInfo } from './player';

export const movieCardsData = [
    {
        id: 1,
        videoUrl:
            'https://www.youtube.com/embed/P5ieIbInFpg?si=7F4Hfr_DxRwAMt-m',
        title: 'Gladiator (2000)',
        category: 'Action / Adventure / Drama',
        director: 'Ridley Scott',
        stars: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen',
        plot: 'A betrayed Roman general rises as a gladiator to avenge his familys murder and restore honor to Rome, facing an emperors wrath.',
        imdbLink: 'https://www.imdb.com/title/tt0172495',
        imgSrc: gladiator,
    },
    {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/hEJnMQG9ev8',
        title: 'Mad Max: Fury Road (2015)',
        category: 'Action / Adventure',
        director: 'George Miller',
        stars: 'Tom Hardy, Charlize Theron, Nicholas Hoult',
        plot: 'In a post-apocalyptic wasteland, Max is captured by Immortan Joe army. He escapes with Furiosa, a warrior who has freed Joe wives. Together, they race across the desert, fighting Joe forces to reach a safe haven. Max and Furiosa try to defeat the tyrannical warlord and seek freedom.',
        imdbLink: 'https://www.imdb.com/title/tt1392190/?ref_=ttpl',
        imgSrc: madmax,
    },
    {
        id: 3,
        videoUrl:
            'https://www.youtube.com/embed/QlSAiI3xMh4?si=l5HZbbOSskibVjz_',
        title: 'Snowden (2016)',
        category: 'Action / Thriller',
        director: 'Oliver Stone',
        stars: 'Joseph Gordon-Levitt, Shailene Woodley, Melissa Leo',
        plot: 'Edward Snowden, a former NSA contractor, leaks classified documents revealing mass surveillance programs. Disillusioned by the governments overreach, he exposes the truth about illegal spying.',
        imdbLink: 'https://www.imdb.com/title/tt3774114',
        imgSrc: snowden,
    },
    {
        id: 4,
        videoUrl:
            'https://www.youtube.com/embed/Ue4PCI0NamI?si=mtc7rSDqUIVeckzy',
        title: 'The Martian (2015)',
        category: 'Adventure / Drama / Sci-Fi',
        director: 'Ridley Scott',
        stars: 'Matt Damon, Jessica Chastain, Kristen Wiig',
        plot: 'Stranded on Mars after a mission goes awry, an astronaut uses his ingenuity and spirit to survive while awaiting a rescue mission.',
        imdbLink: 'https://www.imdb.com/title/tt3659388',
        imgSrc: martian,
    },
    {
        id: 5,
        videoUrl:
            'https://www.youtube.com/embed/vKQi3bBA1y8?si=hSTmBZuFhhCQ6vdy',
        title: 'The Matrix (1999)',
        category: 'Action',
        director: 'The Wachowskis',
        stars: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        plot: 'Neo, a computer hacker, discovers that the world around him is an illusion controlled by machines. He joins a group of rebels led by Morpheus, who believes Neo is "the One" destined to free humanity.',
        imdbLink: 'https://www.imdb.com/title/tt0133093/',
        imgSrc: matrix,
    },
];

const createMovieCard = (movie) => `
    <div class="movie-card fade" id="${movie.id}">
        <img src="${movie.imgSrc}" alt="${movie.title} Cover" class="movie-cover">
        <div class="movie-container">
            <h1 class="movie-name">${movie.title}</h1>
            <h2 class="movie-category">${movie.category}</h2>
            <p class="movie-description">${movie.plot}</p>
            <div class="movie-buttons">
                <button class="movie-play" data-video-url="${movie.videoUrl}">
                    <img src=${playIcon} alt="">Play
                </button>
                <button class="movie-info">
                    <img src=${infoIcon} alt="">More Info
                </button>
            </div>
        </div>
    </div>
`;

export const renderMovieCards = () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.innerHTML = movieCardsData.map(createMovieCard).join('');

    // Add additional containers
    slideshowContainer.insertAdjacentHTML(
        'beforeend',
        `
        <div class="movie-trailer-container" style="display:none;">
            <button class="close-trailer">X</button>
            <iframe class="video-frame" width="1280" height="720" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
        <div class="movie-info-container" style="display:none;"></div>
        <div class="slideshow-commands">
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
        </div>
        <div class="dots">
            ${movieCardsData.map(() => `<span class="dot"></span>`).join('')}
        </div>
    `,
    );

    setupButtonListeners();
};

const setupButtonListeners = () => {
    document.querySelectorAll('.movie-play')?.forEach((btn) =>
        btn.addEventListener('click', (e) => {
            const videoUrl = e.target
                .closest('.movie-play')
                ?.getAttribute('data-video-url');
            if (videoUrl) showPlayer(videoUrl);
        }),
    );

    document.querySelectorAll('.movie-info')?.forEach((btn) =>
        btn.addEventListener('click', (e) => {
            const movieId = e.target.closest('.movie-card')?.id;
            if (movieId) showInfo(movieId);
        }),
    );

    document
        .querySelector('.close-trailer')
        ?.addEventListener('click', closePlayer);
};

export const renderMoviesList = () => {
    const moviesListContainer = document.createElement('div');
    moviesListContainer.classList.add('movies-list-container');

    movieCardsData.forEach((card) => {
        const movie = document.createElement('div');
        movie.classList.add('movie');

        movie.innerHTML = `
            <img src="${card.imgSrc}" alt="${card.title} Cover" class="movie-cover">
        `;

        moviesListContainer.appendChild(movie);
    });

    const mainContainer = document.getElementById('main'); // Adjust the selector to where you want it
    mainContainer.appendChild(moviesListContainer);
};

export const showNoContentPopup = () => {
    const noContent = document.getElementById('popup');
    noContent.style.display = 'flex';

    setTimeout(() => {
        noContent.style.display = 'none';
    }, 3000);
};
