let button = document.querySelector("button");
let openPopup = document.querySelector(".popup-wrapper");
let popupClose = document.querySelector(".popup-close");
let card = document.querySelector(".card");

button.addEventListener("click", () => {
  openPopup.style.display = "block";
});

popupClose.addEventListener("click", () => {
  openPopup.style.display = "none";
});

openPopup.addEventListener("click", () => {
  if ("click" == card) {
    openPopup.style.display = "block";
  } else openPopup.style.display = "none";
});
