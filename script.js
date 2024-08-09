var polyglot = new Polyglot();

var translations = {
    en: {
        "title": "Landing Page",
        "welcome": "Welcome to the Best Games",
        "slider-title": "Slider",
        "text-slider": "On this page, you will find some of the best games available to play in 2024, whether for their gameplay, design, textures, etc. They were nominated by the community.",
        "gallery-title": "Gallery",
        "video-title": "Video",
        "video-description": "Today we have a very special video for you. We are going to dive into the exciting world of video games and discover which are the best titles of 2024. This year has been full of innovative releases and unforgettable adventures that have kept us glued to our screens.",
        "information": "Information",
        "about-us": "About Us",
        "contact-us": "Contact Us",
        "privacy-policy": "Privacy Policy",
        "follow-us": "Follow Us"
    },
    es: {
        "title": "Página de Inicio",
        "welcome": "Bienvenido a los Mejores Juegos",
        "slider-title": "Slider",
        "text-slider": "En esta página encontrarás algunos de los mejores juegos disponibles para jugar en 2024, ya sea por su jugabilidad, diseño, texturas, etc. Fueron nominados por la comunidad.",
        "gallery-title": "Galeria",
        "video-title": "Video",
        "video-description": "Hoy tenemos un video muy especial para ustedes. Vamos a adentrarnos en el emocionante mundo de los videojuegos y descubrir cuáles son los mejores títulos de 2024. Este año ha estado repleto de lanzamientos innovadores y aventuras inolvidables que nos han mantenido pegados a nuestras pantallas.",
        "information": "Información",
        "about-us": "Sobre nosotros",
        "contact-us": "Contactanos",
        "privacy-policy": "Politica de privacidad",
        "follow-us": "Siguenos"
    }
};

function setLanguage(lang) {
    polyglot.locale(lang);
    polyglot.extend(translations[lang]);
    updateText();
}

function updateText() {
    document.querySelectorAll('[data-translate]').forEach(function (element) {
        var key = element.getAttribute('data-translate');
        element.textContent = polyglot.t(key);
    });
}

// Inicializa con el idioma por defecto
document.addEventListener("DOMContentLoaded", function () {
    setLanguage('es'); // Idioma por defecto: español
});

// Cambia el idioma cuando se presiona un botón
document.getElementById("btn-en").addEventListener("click", function () {
    setLanguage('en');
});

document.getElementById("btn-es").addEventListener("click", function () {
    setLanguage('es');
});


bars = document.querySelector(".bars");
bars.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}
