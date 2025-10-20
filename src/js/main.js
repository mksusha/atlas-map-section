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
