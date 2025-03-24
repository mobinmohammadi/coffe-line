import {
  basktUser,
  changeProgresStatus,
  culcoutorPricProductBasket,
  filterTitleHandler,
  filtredProducts,
  ganeratorUserBasket,
  showAllProducts,
  showStatusByRowAndColumns,
} from "./funcs/allProducts.js";
import { showMenuAndSubmenu } from "./funcs/app.js";

window.addEventListener("load", () => {
  showMenuAndSubmenu();
  filterTitleHandler();
  showAllProducts();
  filtredProducts();
  showStatusByRowAndColumns();
  ganeratorUserBasket();
  culcoutorPricProductBasket();
  basktUser();
  changeProgresStatus()
});
