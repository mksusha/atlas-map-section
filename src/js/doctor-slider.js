document.addEventListener('DOMContentLoaded', () => {
    console.log('doctor-slider.js: DOMContentLoaded');

    if (typeof Swiper === 'undefined') {
        console.error('doctor-slider.js: Swiper is not loaded.');
        return;
    }

    let swiper;
    try {
        swiper = new Swiper('.doctor-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 22,
            grabCursor: true,
            loop: false,
        });
        console.log('doctor-slider.js: Swiper initialized', swiper);
    } catch (err) {
        console.error('doctor-slider.js: Error initializing Swiper', err);
        return;
    }

    const progressActive = document.querySelector('.doctor-slider__progress-active');
    const slides = document.querySelectorAll('.doctor-swiper .swiper-slide');

    const updateProgress = () => {
        if (!progressActive || !swiper || slides.length === 0) return;
        const idx = typeof swiper.realIndex === 'number' ? swiper.realIndex : (swiper.activeIndex || 0);
        const percent = ((idx + 1) / slides.length) * 100;
        progressActive.style.width = percent + '%';
    };

    if (swiper && typeof swiper.on === 'function') {
        swiper.on('slideChange', updateProgress);
    }
    updateProgress();

    const sliderContainer = document.querySelector('.doctor-swiper');
    if (!sliderContainer) {
        console.warn('doctor-slider.js: .doctor-swiper not found, skipping card toggle logic.');
        return;
    }

    // Debug helper: print target path on any click inside slider
    sliderContainer.addEventListener('click', (e) => {
        // quick debug: uncomment to see click target chain
        // console.log('DEBUG click target:', e.target, 'closest icon:', e.target.closest('.doctor-slider__icon-circle'), 'closest details-circle:', e.target.closest('.doctor-slider__details-circle'));
    }, { capture: true });

    // Делегирование: надежнее чем навешивать на каждый элемент
    sliderContainer.addEventListener('click', (e) => {
        const icon = e.target.closest('.doctor-slider__icon-circle');
        if (icon && sliderContainer.contains(icon)) {
            console.log('doctor-slider.js: icon clicked', icon);
            // find card
            const card = icon.closest('.doctor-slider__card');
            if (!card) {
                console.warn('doctor-slider.js: clicked icon has no parent .doctor-slider__card');
                return;
            }

            // Close all opened cards
            document.querySelectorAll('.doctor-slider__card.active').forEach(c => {
                if (c === card) return; // we'll toggle the clicked one separately
                c.classList.remove('active');
                const details = c.querySelector('.doctor-slider__details');
                if (details) details.classList.remove('active');
            });

            // Toggle current card (if already open — close it)
            const details = card.querySelector('.doctor-slider__details');
            const isActive = card.classList.contains('active');
            if (isActive) {
                card.classList.remove('active');
                if (details) details.classList.remove('active');
                console.log('doctor-slider.js: closed card');
            } else {
                card.classList.add('active');
                if (details) details.classList.add('active');
                console.log('doctor-slider.js: opened card');
            }

            e.stopPropagation();
            return;
        }

        const detailsCircle = e.target.closest('.doctor-slider__details-circle');
        if (detailsCircle && sliderContainer.contains(detailsCircle)) {
            console.log('doctor-slider.js: details-circle clicked', detailsCircle);
            const card = detailsCircle.closest('.doctor-slider__card');
            if (!card) return;
            card.classList.remove('active');
            const details = card.querySelector('.doctor-slider__details');
            if (details) details.classList.remove('active');
            e.stopPropagation();
            return;
        }
    });

    // Если слайд сменился — закрываем все открытые карточки
    if (swiper && typeof swiper.on === 'function') {
        swiper.on('slideChange', () => {
            const opened = document.querySelectorAll('.doctor-slider__card.active');
            if (opened.length) {
                console.log('doctor-slider.js: slideChange — closing opened cards:', opened.length);
                opened.forEach(c => {
                    c.classList.remove('active');
                    const details = c.querySelector('.doctor-slider__details');
                    if (details) details.classList.remove('active');
                });
            }
            updateProgress();
        });
    }

    console.log('doctor-slider.js: slides count =', slides.length);
    console.log('doctor-slider.js: icon circles =', document.querySelectorAll('.doctor-slider__icon-circle').length);
    console.log('doctor-slider.js: details circles =', document.querySelectorAll('.doctor-slider__details-circle').length);
});
// JS
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper === 'undefined') return;

    const swiper = new Swiper('.team-card-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
    });

    const progressBar = document.querySelector('.team-card-slider__progress-active');

    // Обновление прогресс-бара
    const updateProgress = () => {
        if (!progressBar) return;
        const totalSlides = swiper.slides.length;
        const currentIndex = swiper.realIndex || swiper.activeIndex || 0;
        const percent = ((currentIndex + 1) / totalSlides) * 100;
        progressBar.style.width = percent + '%';
    };

    swiper.on('slideChange', updateProgress);
    updateProgress();

    const sliderContainer = document.querySelector('.team-card-swiper');

    // Функция плавного закрытия карточки
    const closeCard = (card) => {
        const details = card.querySelector('.team-card-slider__details');
        if (details) {
            details.style.transform = 'scale(0.95)';
            details.style.opacity = '0';
        }

        setTimeout(() => {
            card.classList.remove('active');
            if (details) {
                details.style.transform = '';
                details.style.opacity = '';
            }
        }, 0); // время совпадает с CSS transition
    };

    sliderContainer.addEventListener('click', (e) => {
        const icon = e.target.closest('.team-card-slider__icon-circle');
        const detailsCircle = e.target.closest('.team-card-slider__details-circle');

        if (icon) {
            const card = icon.closest('.team-card-slider__card');
            if (!card) return;

            // Закрываем все открытые карточки кроме текущей
            document.querySelectorAll('.team-card-slider__card.active').forEach(c => {
                if (c !== card) closeCard(c);
            });

            // Переключаем текущую карточку
            if (card.classList.contains('active')) {
                closeCard(card);
            } else {
                card.classList.add('active');
                const details = card.querySelector('.team-card-slider__details');
                if (details) {
                    details.style.transform = 'scale(1)';
                    details.style.opacity = '1';
                }
            }

            e.stopPropagation();
        }

        if (detailsCircle) {
            const card = detailsCircle.closest('.team-card-slider__card');
            if (!card) return;
            closeCard(card);
            e.stopPropagation();
        }
    });

    // Закрываем все активные карточки при смене слайда
    swiper.on('slideChange', () => {
        document.querySelectorAll('.team-card-slider__card.active').forEach(c => closeCard(c));
        updateProgress();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let reviewsSwiper = null;

    const initSwiper = () => {
        if (window.innerWidth <= 900 && !reviewsSwiper) {
            reviewsSwiper = new Swiper('.reviews-swiper', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                grabCursor: true,
            });
            console.log('Reviews swiper initialized');
        } else if (window.innerWidth > 900 && reviewsSwiper) {
            reviewsSwiper.destroy(true, true);
            reviewsSwiper = null;
            console.log('Reviews swiper destroyed');
        }
    };

    initSwiper();
    window.addEventListener('resize', initSwiper);
});
