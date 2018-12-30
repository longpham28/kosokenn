const menu = document.querySelector('.col-navbar');
const colBut = document.querySelector('.col-button');

function toggleNav() {
  if (menu.style.display === "block") menu.style.display = "none";
  else menu.style.display = "block";
}

colBut.addEventListener('click', toggleNav);
