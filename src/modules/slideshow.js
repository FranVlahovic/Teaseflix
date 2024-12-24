let slideIndex = 1;

const currentSlide = (n) => {
    showSlides((slideIndex = n));
};

const plusSlides = (n) => {
    showSlides((slideIndex += n));
};

export const showSlides = (n) => {
    const slides = document.querySelectorAll('.movie-card');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    dots.forEach((dot) => {
        dot.className = dot.className.replace(' active', '');
    });

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
};

export const moveSlide = () => {
    const nextSlide = document.querySelector('.next');
    const prevSlide = document.querySelector('.prev');

    nextSlide.addEventListener('click', () => {
        plusSlides(1);
    });

    prevSlide.addEventListener('click', () => {
        plusSlides(-1);
    });
};

export const moveDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });
};
