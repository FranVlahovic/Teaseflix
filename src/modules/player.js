import imdb from '../assets/icons/imdb.svg';
import { movieCardsData } from './dom';

const videoIFrame = document.querySelector('.video-frame');

export const showPlayer = (videoUrl) => {
    const trailerContainer = document.querySelector('.movie-trailer-container');
    const iframe = trailerContainer.querySelector('.video-frame');

    if (trailerContainer && iframe) {
        trailerContainer.style.display = 'block';
        iframe.src = videoUrl;
    } else {
        console.error('Trailer container or iframe not found');
    }
};

export const closePlayer = () => {
    const trailerContainer = document.querySelector('.movie-trailer-container');
    const iframe = trailerContainer.querySelector('.video-frame');

    trailerContainer.style.display = 'none';
    iframe.src = '';
};

export const showInfo = (movieId) => {
    const movie = movieCardsData.find((m) => m.id === parseInt(movieId, 10));
    const movieInfoContainer = document.querySelector('.movie-info-container');

    if (movie) {
        movieInfoContainer.style.display = 'block';
        movieInfoContainer.innerHTML = `
        <div class="movie-info-card">
            <button class="close-info">X</button>
            <h1 class="movie-name">${movie.title}</h1>
            <img src="${movie.imgSrc}" alt="${movie.title} Cover" class="movie-cover">
            <div class="movie-details">
                <p class="movie-description">${movie.plot}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Stars:</strong> ${movie.stars}</p>
            </div>
            <a href="${movie.imdbLink}" class="imdb-link">
                <img src="${imdb}" alt="IMDb Icon">
            </a>
        </div>
    `;

        // Close button functionality
        const closeBtn = movieInfoContainer.querySelector('.close-info');
        closeBtn.addEventListener('click', () => {
            movieInfoContainer.style.display = 'none';
        });
    } else {
        console.error(`Movie with ID ${movieId} not found.`); // Movie not found
    }
};

export const loadVideo = (link) => {
    videoIFrame.src = link;
};
