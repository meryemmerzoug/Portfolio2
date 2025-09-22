// Typing Animation
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Mobile App Developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// Navigation System
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSelection(this);
        if(window.innerWidth < 1200) {
            // Ne pas fermer le sidebar en mode horizontal
            if (!document.body.classList.contains('sidebar-horizontal')) {
                asideSelectionTogglerBtn();
            }
        }
    });
}

function removeBackSection() {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(j) {
    allSection[j].classList.add("back-section");
}

function showSelection(element) {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Hire me button
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSelection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

// Nav Toggler (hamburger menu)
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSelectionTogglerBtn();
});

// Fonction modifiée pour prendre en compte le mode horizontal
function asideSelectionTogglerBtn() {
    // En mode horizontal sur desktop, ne pas utiliser le toggle mobile
    if (document.body.classList.contains('sidebar-horizontal') && window.innerWidth >= 1200) {
        return;
    }
    
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Ajustements responsive pour le mode sidebar
window.addEventListener('resize', function() {
    // Fermer le menu mobile si on passe en desktop
    if (window.innerWidth >= 1200) {
        aside.classList.remove("open");
        navTogglerBtn.classList.remove("open");
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("open");
        }
    }
    
    // Ajustements spécifiques au mode horizontal
    if (document.body.classList.contains('sidebar-horizontal')) {
        if (window.innerWidth >= 1200) {
            // Masquer le nav-toggler en mode horizontal desktop
            navTogglerBtn.style.display = 'none';
        } else {
            // Afficher le nav-toggler en mode horizontal mobile
            navTogglerBtn.style.display = 'flex';
        }
    } else {
        // Comportement normal en mode vertical
        if (window.innerWidth >= 1200) {
            navTogglerBtn.style.display = 'none';
        } else {
            navTogglerBtn.style.display = 'flex';
        }
    }
});