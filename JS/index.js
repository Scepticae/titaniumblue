const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const strips = document.querySelectorAll(".strip");

removeActive();

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuBtn.classList.toggle("show");
});

function displayPage() {
  logo.classList.add("active");
  strips.forEach((strip) => {
    strip.classList.add("active");
  });
}

function removeActive() {
  logo.classList.remove("active");
  strips.forEach((strip) => {
    strip.classList.remove("active");
  });

  setTimeout(displayPage, 100);
}