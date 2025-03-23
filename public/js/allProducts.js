import { filterTitleHandler, filtredProducts, showAllProducts } from "./funcs/allProducts.js"
import { showMenuAndSubmenu } from "./funcs/app.js"

window.addEventListener("load" , () => {
    showMenuAndSubmenu()
    filterTitleHandler()
    showAllProducts()
    filtredProducts()
})
