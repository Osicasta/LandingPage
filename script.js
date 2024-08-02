const translations = {
    en: {
        welcome: "Welcome",
        title: "Landing Page",
        logo-text: "BG Besto gamesy 2024",
        slider: "Slider",
        "image-gallery": "Image Gallery",
        form: "Form",
        contacts: "Contacts",
        "slider-title": "Slider",
        "text-slider": "On this page, you will find some of the best video games of the year 2024, whether it's for their gameplay, animations, performance, user experience, graphic quality, shadows, textures, etc. Nominated by the community.",
        "gallery-title": "Image Gallery",
        "video-title": "Video",
        "video-description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae nam reprehenderit minus veniam expedita? Iusto sint, incidunt vel nesciunt, eveniet tempora facere magni ab ducimus unde dignissimos, officia aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus illum ea quasi recusandae amet nostrum nemo ducimus vel omnis assumenda dolorum isteut quia eveniet pariatur exercitationem odit, hic fugiat.",
        information: "Information",
        "about-us": "About Us",
        "contact-us": "Contact Us",
        "privacy-policy": "Privacy Policy",
        "follow-us": "Follow Us"
    },
    es: {
        welcome: "Bienvenido",
        title: "Página de inicio",
        logo-text: "BG Besto juegos 2024",
        slider: "Deslizador",
        "image-gallery": "Galería de imágenes",
        form: "Formulario",
        contacts: "Contactos",
        "slider-title": "Deslizador",
        "text-slider": "En esta página, encontrarás algunos de los mejores videojuegos del año 2024, ya sea por su jugabilidad, animaciones, rendimiento, experiencia de usuario, calidad gráfica, sombras, texturas, etc. Nominados por la comunidad.",
        "gallery-title": "Galería de Imágenes",
        "video-title": "Video",
        "video-description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae nam reprehenderit minus veniam expedita? Iusto sint, incidunt vel nesciunt, eveniet tempora facere magni ab ducimus unde dignissimos, officia aliquid. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus illum ea quasi recusandae amet nostrum nemo ducimus vel omnis assumenda dolorum isteut quia eveniet pariatur exercitationem odit, hic fugiat.",
        information: "Información",
        "about-us": "Sobre Nosotros",
        "contact-us": "Contáctanos",
        "privacy-policy": "Política de Privacidad",
        "follow-us": "Síguenos"
    }
};

function getSavedLanguage() {
    return localStorage.getItem('language') || 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = getSavedLanguage();
    setLanguage(lang);
    document.getElementById('language-switch').value = lang;

    document.getElementById('language-switch').addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
});
