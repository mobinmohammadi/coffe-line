import { deletAllProductsInUserBasket, handleUserBasketByLocalStorage , addCountProducts } from "./funcs/userBasket.js";

const wrapperLoaderUserBasketPage = document.querySelector(
  ".wrapper__loader-userBasketPage"
);

window.addCountProducts = addCountProducts


window.addEventListener("load", () => {
  handleUserBasketByLocalStorage();
  deletAllProductsInUserBasket()
  setTimeout(() => {
    wrapperLoaderUserBasketPage.style.display = "none"
  }, 500);
});
// console.log("ss")
