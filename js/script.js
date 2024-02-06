// toggle class active navbar nav
const navbarNav = document.querySelector(".navbar-nav");
// ketika hmnu di klik
document.querySelector("#hmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik dimana saja biar keluar dari hmenu
const hmnu = document.querySelector("#hmenu");

document.addEventListener("click", function (e) {
  if (!hmnu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
