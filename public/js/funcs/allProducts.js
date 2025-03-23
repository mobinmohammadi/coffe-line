import { prodacts } from "../Data.js";

const wrapperAllProductsFilterd = document.querySelector(
  "#wrapper-allProducts__filterd-columns"
);
const countProducts = document.querySelector("#count-products")
const wrapperFilter = document.querySelector("#wrapper-filter");
const selectorFilterValue = document.querySelectorAll(
  "#selector-filter__value"
);
const forSelectorValue = document.querySelector("#for-Selector__value");
wrapperFilter.addEventListener("click", () => {});

const filterTitleHandler = () => {
  selectorFilterValue.forEach((selector) =>
    selector.addEventListener(
      "click",
      (item) => (forSelectorValue.innerHTML = item.target.innerHTML)
    )
  );
};
const showAllProducts = () => {
    countProducts.innerHTML = `(${prodacts.length}`
  prodacts.map((product) =>
    wrapperAllProductsFilterd.insertAdjacentHTML(
      "beforeend",
      `
            <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
          <div class="show-result__save"></div>
          <div class="w-full flex items-center justify-center">
            <img class="w-32 h-32" src=${product.img} alt="">
          </div>
          <a href="ons-page.html?name=4" class="text-xs leading-3 min-w-[9rem]">${product.title}</a>
          <div>
                <span class="text-base MorabbaBold text-emerald-500">${product.price} تومان</span>
                ${product.offer === null ? "" : `<span class="text-xs last-price">${product.price * 30 / 100 }</span>`}          </div>
          <div class="flex justify-between">
            <div class="btn-index flex gap-1">
              <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${product.id}')">
                <svg class="icon-basket w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                  <use xlink:href="#shopping-cart"></use>
                </svg>
              </span>
              <svg id="save-icon" class="w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                <use xlink:href="#save"></use>
              </svg>
            </div>
            <div class="flex">
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
            </div>
          </div>
        </div>
            `
    )
  );
};

const showAllProductsRow = () => {
    prodacts.map((product) =>
        wrapperAllProductsFilterd.insertAdjacentHTML(
          "beforeend",
          `
                <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
              <div class="show-result__save"></div>
              <div class="w-full flex items-center justify-center">
                <img class="w-32 h-32" src=${product.img} alt="">
              </div>
              <a href="ons-page.html?name=4" class="text-xs leading-3 min-w-[9rem]">${product.title}</a>
              <div>
                    <span class="text-base MorabbaBold text-emerald-500">${product.price} تومان</span>
                    ${product.offer === null ? "" : `<span class="text-xs last-price">${product.price * 30 / 100 }</span>`}          </div>
              <div class="flex justify-between">
                <div class="btn-index flex gap-1">
                  <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${product.id}')">
                    <svg class="icon-basket w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                      <use xlink:href="#shopping-cart"></use>
                    </svg>
                  </span>
                  <svg id="save-icon" class="w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                    <use xlink:href="#save"></use>
                  </svg>
                </div>
                <div class="flex">
                  <svg class="w-4 h-4">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="w-4 h-4">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="w-4 h-4">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="w-4 h-4">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                  <svg class="w-4 h-4">
                    <use xlink:href="#star-fill"></use>
                  </svg>
                </div>
              </div>
            </div>
                `
        )
      );
}

const addPrudactsToUserBaskets = (productID) => {
  const findetProducts = prodacts.filter(
    (products) => products.id == productID
  );
  console.log(findetProducts);
};

const filtredProducts = () => {
  let valueSelectorFilter = null;
  selectorFilterValue.forEach((selector) =>
    selector.addEventListener("click", (e) => {
      valueSelectorFilter = e.target.innerText;
      console.log(valueSelectorFilter);
      filterGenereator(prodacts, valueSelectorFilter);
    })
  );
};

const filterGenereator = (array, valueSelectorFilter) => {
  let findProductsInfilterSelectedUser = [...array];
  switch (valueSelectorFilter) {
    case "همه محصولات":
      {
        findProductsInfilterSelectedUser = array
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "پرفروش":
      {
        findProductsInfilterSelectedUser = prodacts.filter(
          (product) => product.filter_mod == "best-seller"
        );
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "تخفیف خورده":
      {
        findProductsInfilterSelectedUser = prodacts.filter(
          (product) => product.filter_mod == "offer"
        );
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "پر بازدید":
      {
        findProductsInfilterSelectedUser = prodacts.filter(
          (product) => product.filter_mod == "papular"
        );
        console.log(findProductsInfilterSelectedUser);
      }

      break;
  }
  generatorTheCodeHtmlFiltered(findProductsInfilterSelectedUser);
};


const generatorTheCodeHtmlFiltered = (htmlCode) => {
    wrapperAllProductsFilterd.innerHTML = ""
    countProducts.innerHTML = `(${htmlCode.length}`
    htmlCode.map(product => (
        wrapperAllProductsFilterd.insertAdjacentHTML("beforeend" ,    `
            <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
          <div class="show-result__save"></div>
          <div class="w-full flex items-center justify-center">
            <img class="w-32 h-32" src=${product.img} alt="">
          </div>
          <a href="ons-page.html?name=4" class="text-xs leading-3 min-w-[9rem]">${product.title}</a>
          <div>
<span class="text-base MorabbaBold text-emerald-500">${product.price} تومان</span>
                ${product.offer === null ? "" : `<span class="text-xs last-price">${product.price * 30 / 100 }</span>`}
          </div>
          <div class="flex justify-between">
            <div class="btn-index flex gap-1">
              <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${product.id}')">
                <svg class="icon-basket w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                  <use xlink:href="#shopping-cart"></use>
                </svg>
              </span>
              <svg id="save-icon" class="w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                <use xlink:href="#save"></use>
              </svg>
            </div>
            <div class="flex">
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
              <svg class="w-4 h-4">
                <use xlink:href="#star-fill"></use>
              </svg>
            </div>
          </div>
        </div>
            `)
    ))
}
window.addPrudactsToUserBaskets = addPrudactsToUserBaskets;
// const filtredPoducts = () => {
//     prodacts
// }

export { filterTitleHandler, showAllProducts, filtredProducts  };
