const videoIFrame = document.querySelector('.video-frame');
const movieInfo = document.querySelector('.movie-info-container');

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

export const loadVideo = (link) => {
    videoIFrame.src = link;
};
