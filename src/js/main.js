// import './doctor-slider.js';
document.addEventListener("DOMContentLoaded", () => {
    const tabDocs = document.getElementById("tab-docs");
    const tabPatients = document.getElementById("tab-patients");
    const underlineContainer = document.querySelector(".services__tabs-underline");
    const contentDocs = document.getElementById("services-for-docs");
    const contentPatients = document.getElementById("services-for-patients");

        contentDocs.hidden = false;
    contentPatients.hidden = true;
    tabDocs.classList.add("services__tab--active");
    tabPatients.classList.remove("services__tab--active");
    underlineContainer.classList.remove("patients-active");

    function activateTab(tabName) {
        if (tabName === "docs") {
            tabDocs.classList.add("services__tab--active");
            tabPatients.classList.remove("services__tab--active");
            contentDocs.hidden = false;
            contentPatients.hidden = true;
            underlineContainer.classList.remove("patients-active");
        } else {
            tabPatients.classList.add("services__tab--active");
            tabDocs.classList.remove("services__tab--active");
            contentDocs.hidden = true;
            contentPatients.hidden = false;
            underlineContainer.classList.add("patients-active");
        }
    }

    tabDocs.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab("docs");
    });

    tabPatients.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab("patients");
    });
});
document.addEventListener("DOMContentLoaded", () => {
        const tabDocs = document.getElementById("tab-docs");
    const tabPatients = document.getElementById("tab-patients");
    const underlineContainer = document.querySelector(".support__tabs-underline");
    const contentDocs = document.getElementById("faq-for-docs");
    const contentPatients = document.getElementById("faq-for-patients");

    function activateTab(tabName) {
        if (tabName === "docs") {
            tabDocs.classList.add("support__tab--active");
            tabPatients.classList.remove("support__tab--active");
            contentDocs.hidden = false;
            contentPatients.hidden = true;
            underlineContainer.classList.remove("patients-active");
        } else {
            tabPatients.classList.add("support__tab--active");
            tabDocs.classList.remove("support__tab--active");
            contentDocs.hidden = true;
            contentPatients.hidden = false;
            underlineContainer.classList.add("patients-active");
        }
    }

    tabDocs.addEventListener("click", () => activateTab("docs"));
    tabPatients.addEventListener("click", () => activateTab("patients"));

        const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggleCircle = item.querySelector(".faq-toggle-circle");

        answer.style.display = "none";

        question.addEventListener("click", () => {
            const isOpen = answer.style.display === "block";
            answer.style.display = isOpen ? "none" : "block";
            toggleCircle.classList.toggle("open", !isOpen);
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const wrappers = document.querySelectorAll('.image-wrapper, .image-wrapper-mobile');

    wrappers.forEach(wrapper => {
        const images = wrapper.querySelectorAll('.research-image');
        const dots = wrapper.querySelectorAll('.dot');
        const nextButton = wrapper.querySelector('.slider-next');
        let currentIndex = 0;

                function updateSlider(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            images[index].classList.add('active');
            dots[index]?.classList.add('active');
        }

                if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider(currentIndex);
            });
        }

                dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateSlider(currentIndex);
            });
        });

        updateSlider(currentIndex);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const tabs = [
        { button: "tab-orthopedists", content: "content-orthopedists" },
        { button: "tab-orthodontists", content: "content-orthodontists" },
        { button: "tab-surgeons", content: "content-surgeons" }
    ];

    const underline = document.querySelector(".underline-active");

    function updateUnderline(activeBtn) {
        if (window.innerWidth <= 1000) {
                        underline.style.width = `${activeBtn.offsetWidth}px`;
            underline.style.left = `${activeBtn.offsetLeft}px`;
        } else {
                        underline.style.width = "33.333%";
            const index = tabs.findIndex(t => t.button === activeBtn.id);
            underline.style.left = `${index * 33.333}%`;
        }
    }

        const initialActiveTab = document.querySelector(".solutions__tab--active");
    if (initialActiveTab) updateUnderline(initialActiveTab);

    tabs.forEach(tab => {
        const btn = document.getElementById(tab.button);
        const content = document.getElementById(tab.content);

        btn.addEventListener("click", () => {
            tabs.forEach(t => {
                document.getElementById(t.button).classList.remove("solutions__tab--active");
                document.getElementById(t.content).hidden = true;
            });

            btn.classList.add("solutions__tab--active");
            content.hidden = false;

            updateUnderline(btn);
        });
    });

        window.addEventListener("resize", () => {
        const activeTab = document.querySelector(".solutions__tab--active");
        if (activeTab) updateUnderline(activeTab);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const diagTabs = [
        { button: "tab-tens", content: "content-tens" },
        { button: "tab-axio", content: "content-axio" },
        { button: "tab-condylo", content: "content-condylo" },
    ];

        const underline = document.querySelector(".diagnostics__tabs-underline .underline-active");

    diagTabs.forEach((tab, index) => {
        const btn = document.getElementById(tab.button);
        const content = document.getElementById(tab.content);

        btn.addEventListener("click", () => {
                        diagTabs.forEach(t => {
                document.getElementById(t.button).classList.remove("diagnostics__tab--active");
                document.getElementById(t.content).hidden = true;
            });

                        btn.classList.add("diagnostics__tab--active");
            content.hidden = false;

                        underline.style.left = `${index * (100 / diagTabs.length)}%`;
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector('.btn-menu');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (!menuBtn || !mobileMenu || !closeMenu) return; // если чего-то нет — не делаем ничего

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".research-item");
    const images = document.querySelectorAll(".research-image");

    if (!items.length) return; // если нет блока — не делаем ничего

    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (item.classList.contains("active")) return;

            items.forEach((i) => i.classList.remove("active"));
            images.forEach((img) => img.classList.remove("active"));

            item.classList.add("active");
            if (images[index]) images[index].classList.add("active");
        });
    });
});
// document.addEventListener("DOMContentLoaded", () => {
//     // Находим все секции с исследованиями
//     const researchSections = document.querySelectorAll(".services-research__left");
//
//     researchSections.forEach(section => {
//         const items = section.querySelectorAll(".research-item");
//
//         // По умолчанию активируем первый пункт
//         if (items.length > 0) {
//             items[0].classList.add("active");
//         }
//
//         items.forEach(item => {
//             const title = item.querySelector(".point-title");
//
//             if (title) {
//                 title.addEventListener("click", () => {
//                     // Сначала снимаем активность со всех пунктов
//                     items.forEach(i => i.classList.remove("active"));
//
//                     // Добавляем активность к текущему
//                     item.classList.add("active");
//                 });
//             }
//         });
//     });
// });

// const items = document.querySelectorAll('.research-item');
//
// items.forEach(item => {
//     const title = item.querySelector('.point-title');
//
//     title.addEventListener('click', () => {
//         // Закрываем все остальные
//         items.forEach(i => {
//             if (i !== item) {
//                 i.classList.remove('active');
//                 const points = i.querySelector('.research-points');
//                 if (points) points.style.display = 'none';
//             }
//         });
//
//         // Открываем/закрываем текущий
//         const points = item.querySelector('.research-points');
//         if (points) {
//             const isOpen = points.style.display === 'block';
//             points.style.display = isOpen ? 'none' : 'block';
//         }
//
//         item.classList.toggle('active');
//     });
// });
// const items = document.querySelectorAll('.research-item');
// const lineBlue = document.querySelector('.line-blue'); // синяя полоса
// const lineWhite = document.querySelector('.line-white'); // белая, если нужно
//
// function updateLinePosition(activeItem) {
//     const offsetTop = activeItem.offsetTop; // позиция блока
//     const height = activeItem.offsetHeight; // высота блока
//     lineBlue.style.top = offsetTop + height + 'px'; // под низ блока
// }
//
// items.forEach(item => {
//     const title = item.querySelector('.point-title');
//
//     title.addEventListener('click', () => {
//         // Закрываем все остальные
//         items.forEach(i => {
//             if (i !== item) {
//                 i.classList.remove('active');
//                 const points = i.querySelector('.research-points');
//                 if (points) points.style.display = 'none';
//             }
//         });
//
//         // Открываем/закрываем текущий
//         const points = item.querySelector('.research-points');
//         if (points) {
//             const isOpen = points.style.display === 'block';
//             points.style.display = isOpen ? 'none' : 'block';
//         }
//
//         item.classList.toggle('active');
//
//         // Перемещаем синюю полосу
//         updateLinePosition(item);
//     });
// });
//
// // При загрузке страницы — под первый пункт
// const firstItem = document.querySelector('.research-item.active');
// if (firstItem) updateLinePosition(firstItem);
// const items = document.querySelectorAll('.services-research__left .research-item');
// const lineBlue = document.querySelector('.point-lines .line-blue');
// const lineWhite = document.querySelector('.point-lines .line-white');
// const container = document.querySelector('.services-research__left');
//
// function moveLine(activeItem) {
//     const offsetTop = activeItem.offsetTop + activeItem.offsetHeight; // под низ блока
//     lineBlue.style.top = offsetTop + 'px';
//     lineWhite.style.top = offsetTop + 'px';
// }
//
// items.forEach(item => {
//     const title = item.querySelector('.point-title');
//
//     title.addEventListener('click', () => {
//         items.forEach(i => {
//             if (i !== item) {
//                 i.classList.remove('active');
//                 const points = i.querySelector('.research-points');
//                 if (points) points.style.display = 'none';
//             }
//         });
//
//         const points = item.querySelector('.research-points');
//         if (points) {
//             const isOpen = points.style.display === 'block';
//             points.style.display = isOpen ? 'none' : 'block';
//         }
//
//         item.classList.toggle('active');
//
//         // Двигаем полоску под активный пункт
//         moveLine(item);
//     });
// });

// При загрузке страницы под первый пункт
const firstItem = document.querySelector('.research-item.active');
if (firstItem) moveLine(firstItem);
document.querySelectorAll('.services-research__content').forEach(section => {
    const items = section.querySelectorAll('.research-item');

    items.forEach((item, index) => {
        const title = item.querySelector('.point-title');
        const points = item.querySelector('.research-points');
        const sep = item.querySelector('.sep');
        const lines = item.querySelector('.point-lines');

        // --- Открываем первый элемент по умолчанию ---
        if (index === 0) {
            item.classList.add('active');
            if (points) points.style.display = 'block';
            if (sep) sep.style.display = 'none';
            if (lines) lines.style.display = 'block'; // линии видны у открытой карточки
        } else {
            if (points) points.style.display = 'none';
            if (sep) sep.style.display = 'block';
            if (lines) lines.style.display = 'none'; // скрыты у закрытых карточек
        }

        // --- Обработка клика по заголовку ---
        title.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Закрываем все карточки в пределах текущей секции
            items.forEach(i => {
                const p = i.querySelector('.research-points');
                const s = i.querySelector('.sep');
                const l = i.querySelector('.point-lines');
                i.classList.remove('active');
                if (p) p.style.display = 'none';
                if (s) s.style.display = 'block';
                if (l) l.style.display = 'none';
            });

            // Если кликнули по закрытой — открыть её
            if (!isOpen) {
                item.classList.add('active');
                if (points) points.style.display = 'block';
                if (sep) sep.style.display = 'none';
                if (lines) lines.style.display = 'block';
            }
        });
    });
});const modal = document.getElementById('contactModal');
const openBtns = document.querySelectorAll('.hero__btn, .footer__btn, .questions__card-left-button');
const closeBtns = modal.querySelectorAll('.modal-close');
const submitBtn = modal.querySelector('.modal-submit');

const thanksScreen = modal.querySelector('.modal-thanks');
const formScreen = modal.querySelector('.modal-content');

const headerForm = modal.querySelector('#headerForm');
const headerThanks = modal.querySelector('#headerThanks');

// открыть модалку при клике на любую из кнопок
openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        formScreen.style.display = 'block';
        thanksScreen.style.display = 'none';
        headerForm.style.display = 'flex';
        headerThanks.style.display = 'none';
    });
});

// закрытие модалки
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

// клик по фону
modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});

// отправка формы
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    formScreen.style.display = 'none';
    thanksScreen.style.display = 'block';
    headerForm.style.display = 'none';
    headerThanks.style.display = 'flex';
});
