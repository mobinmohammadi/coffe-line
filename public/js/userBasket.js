import { deletAllProductsInUserBasket, handleUserBasketByLocalStorage } from "./funcs/userBasket.js";

const wrapperLoaderUserBasketPage = document.querySelector(
  ".wrapper__loader-userBasketPage"
);

window.addEventListener("load", () => {
  handleUserBasketByLocalStorage();
  deletAllProductsInUserBasket()
  setTimeout(() => {
    wrapperLoaderUserBasketPage.style.display = "none"
  }, 500);
});
// console.log("ss")
