const translations = {
    en: {
        welcome: "Welcome",
        // otras traducciones
    },
    es: {
        welcome: "Bienvenido",
        // otras traducciones
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

// Ejemplo de uso
document.getElementById('language-switch').addEventListener('change', (event) => {
    setLanguage(event.target.value);
});
