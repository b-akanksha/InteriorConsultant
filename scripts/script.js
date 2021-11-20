const navBar = document.querySelector(".nav-bar");
const nav = document.querySelector(".mobile-nav");

const desktopNav = document.querySelector(".header-links");
const navbarDesktopLink = desktopNav.querySelectorAll(".link");
const mobileNav = document.querySelector(".mobile-links");
const navbarMobileLink = mobileNav.querySelectorAll(".link");
let menuText;
const menuClick = () => {
  menuText = navBar.textContent;

  if (menuText == "close") {
    navBar.textContent = "menu";
    mobileNav.style.display = "none";
  } else {
    navBar.textContent = "close";
    mobileNav.style.display = "flex";
  }
};

const closeMenu = () => {
  navBar.textContent = "menu";
  mobileNav.style.display = "none";
};

nav.addEventListener("click", menuClick);

navbarDesktopLink.forEach((element) => {
  element.addEventListener("click", function () {

    navbarDesktopLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  });
});

navbarMobileLink.forEach((element) => {
  element.addEventListener("click", function () {
    navbarMobileLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");

    closeMenu();
  });
});
