const icon = document.querySelector(".nav-toggle");
const navlinks = document.querySelector(".navbar-links");
const navbar = document.getElementById("navbar");
const animatedElements = document.querySelectorAll(".animated");

// Add span elements to mobile navbar icon
for (let i = 0; i < 9; i++) {
  icon.appendChild(document.createElement("span"));
}

// Handle click on mobile navbar icon
icon.addEventListener("click", () => {
  icon.classList.toggle("open");
  navlinks.classList.toggle("open");
  animatedElements.forEach((element) => {
    element.classList.toggle("open");
  });
});

// Handle scroll event to change navbar style
console.log(window.scrollY);
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("floating");
  } else {
    navbar.classList.remove("floating");
  }
});
