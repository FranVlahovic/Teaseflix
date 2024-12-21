const movieTrailerContainer = document.querySelector(
    '.movie-trailer-container',
);

export const showPlayer = () => {
    movieTrailerContainer.style.display = 'block';
};

export const closePlayer = () => {
    movieTrailerContainer.style.display = 'none';
};

export const loadVideo = (link) => {
    movieTrailerContainer.innerHTML = `
        <button class="close-trailer">X</button>
        <iframe width="1280" height="720" src="${link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
};
