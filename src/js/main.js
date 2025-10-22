document.addEventListener("DOMContentLoaded", () => {
    const tabDocs = document.getElementById("tab-docs");
    const tabPatients = document.getElementById("tab-patients");
    const underlineContainer = document.querySelector(".services__tabs-underline");
    const contentDocs = document.getElementById("services-for-docs");
    const contentPatients = document.getElementById("services-for-patients");

    // по умолчанию активен таб "Врачам"
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
    // табы
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

    // FAQ
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
    const researchBlocks = document.querySelectorAll('.services-research__content');

    const sliderImages = [
        [
            './assets/images/research-01.png',
            './assets/images/research-01.png',
            './assets/images/research-01.png',
            './assets/images/research-01.png',
            './assets/images/research-01.png',
        ],
        [
            './assets/images/research-02.png',
            './assets/images/research-02.png',
            './assets/images/research-02.png',
            './assets/images/research-02.png',
            './assets/images/research-02.png',
        ],
        [
            './assets/images/research-03.png',
            './assets/images/research-03.png',
            './assets/images/research-03.png',
            './assets/images/research-03.png',
            './assets/images/research-03.png',
        ],
    ];

    researchBlocks.forEach((block, blockIndex) => {
        const sliders = block.querySelectorAll('.image-slider');
        const images = sliderImages[blockIndex] || sliderImages[0];

        sliders.forEach(slider => {
            const imageElement = slider.closest('.image-wrapper, .image-wrapper-mobile').querySelector('.research-image');
            const dots = slider.querySelectorAll('.dot');
            const nextButton = slider.querySelector('.slider-next');
            let currentIndex = 0;

            function updateSlider(idx) {
                imageElement.src = images[idx];
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[idx]) dots[idx].classList.add('active');
            }

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateSlider(currentIndex);
            });

            dots.forEach((dot, dotIndex) => {
                dot.addEventListener('click', () => {
                    currentIndex = dotIndex;
                    updateSlider(currentIndex);
                });
            });

            updateSlider(currentIndex);
        });
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
            // ширина под текст активного таба
            underline.style.width = `${activeBtn.offsetWidth}px`;
            underline.style.left = `${activeBtn.offsetLeft}px`;
        } else {
            // десктоп — 1/3 полоски
            underline.style.width = "33.333%";
            const index = tabs.findIndex(t => t.button === activeBtn.id);
            underline.style.left = `${index * 33.333}%`;
        }
    }

    // Инициализация полоски при загрузке
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

    // При ресайзе
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

    // правильный селектор — ищем внутри diagnostics__tabs-underline
    const underline = document.querySelector(".diagnostics__tabs-underline .underline-active");

    diagTabs.forEach((tab, index) => {
        const btn = document.getElementById(tab.button);
        const content = document.getElementById(tab.content);

        btn.addEventListener("click", () => {
            // Сбрасываем состояние всех
            diagTabs.forEach(t => {
                document.getElementById(t.button).classList.remove("diagnostics__tab--active");
                document.getElementById(t.content).hidden = true;
            });

            // Активная вкладка
            btn.classList.add("diagnostics__tab--active");
            content.hidden = false;

            // Передвигаем полосу
            underline.style.left = `${index * (100 / diagTabs.length)}%`;
        });
    });
});
