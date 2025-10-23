import './doctor-slider.js';
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
