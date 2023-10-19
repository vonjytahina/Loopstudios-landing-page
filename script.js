const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-menu");



// mobileMenu toggle
hamburger.onclick = () => {
  if (!mobileMenu.classList.contains("show-mobile-menu")) {
    mobileMenu.classList.add("show-mobile-menu");
    mobileMenu.classList.remove("hide-mobile-menu");
  }

};

closeBtn.onclick = () => {
  if (!mobileMenu.classList.contains("hide-mobile-menu")) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");

  }
};

function windowResize() {
  if (document.documentElement.clientWidth > 375) {
    hamburger.style.display = "none";
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  } else if (document.documentElement.clientWidth <= 375) {
    hamburger.style.display = "block";
    mobileMenu.classList.remove("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");
  }
}

window.addEventListener("resize", windowResize);
