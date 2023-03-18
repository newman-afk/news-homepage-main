const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const linksWrapper = document.querySelector(".links-wrapper");

menu.addEventListener("click", () => openMenu());
close.addEventListener("click", () => closeMenu());

function openMenu() {
  linksWrapper.style.display = "block";
}
function closeMenu() {
  linksWrapper.style.display = "none";
}
