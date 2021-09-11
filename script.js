/*nav bar open*/
let fa = document.querySelector(".fa-bars");
let overlay = document.querySelector(".overlay");
let hidden = document.querySelector(".hidden");

fa.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  fa.classList.add("hidden");
});

/*nav bar close*/
let times = document.querySelector(".fa-times");

times.addEventListener("click", function () {
  overlay.classList.add("hidden");
  fa.classList.remove("hidden");
});

/*Change nav*/
let navbla = document.querySelector(".bla-nav");

if (window.matchMedia("(max-width: 700px)").matches) {
  fa.classList.remove("hidden");
  navbla.classList.add("hidden");
} else {
  fa.classList.add("hidden");
  navbla.classList.remove("hidden");
}
