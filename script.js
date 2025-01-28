let button = document.querySelector("button");
let openPopup = document.querySelector(".popup-wrapper");
let popupClose = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  openPopup.style.display = "block";
});

popupClose.addEventListener("click", () => {
  openPopup.style.display = "none";
});
