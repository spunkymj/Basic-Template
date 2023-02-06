const burger = document.querySelector(".burger");
const navbar = document.querySelector(".menu");

// burger.addEventListener("click", () => {
//   if (navbar.style.display == "none") {
//     navbar.style.display = "flex";
//     navbar.style.top = "0";
//   }
// });

// burger.addEventListener("click", () => {
//   if (navbar.style.display == "flex") {
//     navbar.style.display = "none";
//     navbar.style.top = "0";
//   }
// });

burger.addEventListener("click", () => {
  navbar.getElementsByClassName.toggle("burger");
});
