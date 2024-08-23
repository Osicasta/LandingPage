//Abre las barras de navegación responsive
bars = document.querySelector(".bars");
bars.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}
//Cerrar sesion
document.getElementById('logoutButton').addEventListener('click', function () {
    setTimeout(function () {
        window.location.href = 'index.html';  
    }, 1000); 
});


