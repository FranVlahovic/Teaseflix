import imdb from '../assets/icons/imdb.svg';
import { movieCardsData } from './dom';

const getMovieById = (id) =>
    movieCardsData.find((movie) => movie.id === parseInt(id, 10));

const toggleVisibility = (element, show) => {
    if (element) element.style.display = show ? 'block' : 'none';
};

export const showPlayer = (videoUrl) => {
    const trailerContainer = document.querySelector('.movie-trailer-container');
    const iframe = trailerContainer?.querySelector('.video-frame');

    if (trailerContainer && iframe) {
        toggleVisibility(trailerContainer, true);
        iframe.src = videoUrl;
    }
};

export const closePlayer = () => {
    const trailerContainer = document.querySelector('.movie-trailer-container');
    const iframe = trailerContainer?.querySelector('.video-frame');

    if (trailerContainer && iframe) {
        toggleVisibility(trailerContainer, false);
        iframe.src = '';
    }
};

export const showInfo = (movieId) => {
    const movie = getMovieById(movieId);
    const movieInfoContainer = document.querySelector('.movie-info-container');

    if (movie && movieInfoContainer) {
        movieInfoContainer.innerHTML = `
            <div class="movie-info-card">
                <button class="close-info">X</button>
                <h1 class="movie-name">${movie.title}</h1>
                <img src="${movie.imgSrc}" alt="${movie.title} Cover" class="movie-cover">
                <div class="movie-details">
                    <p class="movie-description">${movie.plot}</p>
                    <p><strong>Category:</strong> ${movie.category}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Stars:</strong> ${movie.stars}</p>
                </div>
                <a href="${movie.imdbLink}" class="imdb-link" target="_blank">
                    <img src="${imdb}" alt="IMDb Icon">
                </a>
            </div>
        `;
        toggleVisibility(movieInfoContainer, true);

        movieInfoContainer
            .querySelector('.close-info')
            ?.addEventListener('click', () => {
                toggleVisibility(movieInfoContainer, false);
            });
    }
};
