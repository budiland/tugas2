/* DOM Pre loader
  -----------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(preloaderFun, 500);
  setTimeout(preloaderFunhapus, 1250);

  function preloaderFun() {
    document.querySelector(".preloader").classList.add("hilang");
  }
  function preloaderFunhapus() {
    document.querySelector(".preloader").classList.add("hapus");
  }
});

/* Button scroll top
  -----------------------------------------------*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* DOM Navbar
  -----------------------------------------------*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  let toggle = 0;
  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });
    // Burger animation
    // burger.classList.toggle("toggle-burger");
    if (toggle == 0) {
      burger.classList.remove("toggle-burger2");
      burger.classList.add("toggle-burger");
      toggle = 1;
      return;
    } else {
      burger.classList.remove("toggle-burger");
      burger.classList.add("toggle-burger2");
      toggle = 0;
      return;
    }
  });
};

/* Scroll Function
  -----------------------------------------------*/
const scrollPage = () => {
  const btnup = document.querySelector(".btnup");
  const nav = document.querySelector(".navbar");

  // When the user scrolls down 700px from the top of the document, show the button, when scrolls down 200px navbar background to white
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      btnup.classList.add("btnup_scroll");
    } else if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      nav.classList.add("animate");
    } else {
      nav.classList.remove("animate");
      btnup.classList.remove("btnup_scroll");
    }
  }
};
