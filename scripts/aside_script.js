const button_menu = document.querySelector(".menu_button");
const form_menu = document.querySelector(".form-menu");
const close_menu = document.querySelector(".close-button");

button_menu.addEventListener("click", onClickMenuButton);
close_menu.addEventListener("click", onClickCloseMenu);

function onClickMenuButton() {
  form_menu.style.visibility = "visible";
}

function onClickCloseMenu() {
  form_menu.style.visibility = "hidden";
}
