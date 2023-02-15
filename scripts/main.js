/* ----------------------- Sélection des éléments HTML ---------------------- */

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

/* ------------------------ Définition des fonctions ------------------------ */

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* -------------------------- Action des fonctions -------------------------- */

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}