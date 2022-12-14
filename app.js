const ham = document.querySelector(".ham");
const menus = document.querySelector(".ham-menus");

ham.addEventListener("click", () => {
  menus.classList.toggle("active-block");
});
