import { allProducts } from "../Data.js";
import { getFromLocalStorage, saveInToLocalStorege } from "../utils/utils.js";

const btnDeleteAllProductsUserBasket = document.querySelector(
  "#btn-delete__allProducts--userBasket"
);
const wrapperAllProductsInBasketsPc = document.querySelector(
  ".wrapper-allProducts__inBaskets--pc"
);
const wrapperBasketUser = document.querySelector("#wrapper-basket__user");

// Start User Basket Local Storage

const userBasketdataInLocalStorage = getFromLocalStorage("basket");
console.log(userBasketdataInLocalStorage);
window.addEventListener("load", () => {
  handleUserBasketByLocalStorage();
  console.log("Sss");
});

const handleUserBasketByLocalStorage = () => {
  culcoutorPriceProductsFromLocalStorage(userBasketdataInLocalStorage);

  countProductsInBaskets.innerHTML =
    userBasketdataInLocalStorage.length + " مورد";

  if (userBasketdataInLocalStorage.length) {
    // btnOrdersPc.innerHTML = ""
    wrapperAllProductsInBasketsPc.innerHTML = "";

    btnOrdersPc.innerHTML = ` <a href="../../user-basket.html" class="items-center cursor-pointer flex justify-center rounded-xl text-[8px] lg:text-sm h-[100%] font-bold btn-style__colorOrders  bg-gre text-white dark:text-white pt-1 pb-1 pl-1  pr-1 lg:pr-3 lg:pl-3"
                                                >ثبت سفارش
                              </a>`;
    console.log(btnOrdersPc);
    wrapperBasketUser.innerHTML = "";
    userBasketdataInLocalStorage.map((item) =>
      wrapperBasketUser.insertAdjacentHTML(
        "beforeend",
        `
                    <div class="flex pt-5 border-b-4 border-solid border-zinc-500">
                                    <div class="img flex">
                                        <img class="w-166px-custom h-[80px] object-cover " src="${
                                          item.img
                                        }" alt=""> 
                                    </div>
                                    <div class="flex flex-col justify-between  min-w-[100px] x:min-w-[100px]">
                                        <span class="leading-6 text-x min-w-full">${
                                          item.title
                                        }</span>
                                        <div class="flex text-x flex-col">

                                          ${
                                            item.offer
                                              ? `
                                            <div class="flex flex-col gap-2 ">
                                            <div class="leading-4 dark:text-white text-zinc-700 relative">
                                              <span class=" absolute w-full border-offer__custom bg-red-700 "></span>
                                              <span>${item.price}</span>
                                            </div>
                                              <span>${
                                                item.price -
                                                (item.price * item.offer) / 100
                                              }</span>
                                            </div>
                                            `
                                              : `<span class="leading-4 dark:text-white text-zinc-700  ">${item.price}</span>`
                                          }
                                        </div>
                                    </div>
                                </div>
                    `
      )
    );
    

    userBasketdataInLocalStorage.map((item) =>
      wrapperAllProductsInBasketsPc.insertAdjacentHTML(
        "beforeend",
        `
             <div class="flex pt-5 pb-5  border-b-2 border-solid dark:border-white border-zinc-500 ">
                                  <div class="img flex">
                                      <img class="w-166px-custom h-[80px] object-cover " src="../../public/products/p1.png" alt="">
                                  </div>
                                  <div class="flex flex-col justify-between  min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 dark:text-white text-zinc-700 text-x min-w-full">قهوه برزیلی بن مانو مقدار 800 گرم خط دوم اسم ...</span>
                                      <div class="flex text-x flex-col">

                                          <span class="leading-4 dark:text-white text-zinc-700  ">129000</span>
                                      </div>
                                  </div>
                              </div>
              `
      )
    );


  }

  if (userBasketdataInLocalStorage.length) {
    wrapperAllProductsInBasketsPc.innerHTML = "";
    userBasketdataInLocalStorage.map((item) => {
      wrapperAllProductsInBasketsPc.insertAdjacentHTML(
        "beforeend",
        `
        <div class="flex pt-5 pb-5  border-b-2 border-solid dark:border-white border-zinc-500 ">
                                  <div class="img flex">
                                      <img class="w-166px-custom h-[80px] object-cover " src="${
                                        item.img
                                      }" alt=""> 
                                  </div>
                                  <div class="flex flex-col justify-between  min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 dark:text-white text-zinc-700 text-x min-w-full">${
                                        item.title
                                      }</span>
                                      <div class="flex text-x flex-col">
                                      
                                          ${
                                            item.offer
                                              ? `
                                            <div class="flex flex-col gap-2 ">
                                            <div class="leading-4 dark:text-white text-zinc-700 relative">
                                              <span class=" absolute w-full border-offer__custom bg-red-700 "></span>
                                              <span>${item.price} تومان </span>
                                            </div>
                                              <span>${
                                                item.price -
                                                (item.price * item.offer) / 100
                                              } تومان </span>
                                            </div>
                                            `
                                              : `<span class="leading-4 dark:text-white text-zinc-700  ">${item.price} تومان </span>`
                                          }
                                      </div>
                                  </div>
                              </div>
      
      `
      );
    });
  } else {
  }
};

const culcoutorPriceProductsFromLocalStorage = (products) => {
  let sum = 0;

  let produtsPrices = products.map((item) => (sum += item.price));

  console.log(sum);

  wrapperTotalPrice.innerHTML = sum;
  pricesAllProductsInBasketPc.innerHTML = sum;
};

// Finish User Basket Local Storage

const wrapperAllProductsFilterd = document.querySelector(
  "#wrapper-allProducts__filterd-columns"
);
const wrapperTotalPrice = document.querySelector("#wrapper-total__price");

const mainProdactsBaskets = document.querySelector(".main-prudacts__baskets");
const wrapperSucssusAlarm = document.querySelector("#wrapper-sucssus__alarm");
const progresAddProductBasket = document.querySelector(
  ".progres-addProduct__basket"
);
let mainPrudactsBaskets = document.querySelector(".main-prudacts__baskets");

const pricesAllProductsInBasketPc = document.querySelector(
  "#prices__allProducts-inBasketPc"
);
const btnOrdersPc = document.querySelector("#btn-orders__pc");

const countProductsInBaskets = document.querySelector(
  "#count-products__in--baskets"
);

let openUserBasketBtn = document.querySelector(".open-user__baskets");
let boxBasket = document.querySelector("#box-basket");

const countProducts = document.querySelector("#count-products");
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
  countProducts.innerHTML = `(${allProducts.length}`;
  allProducts.map((product) => {
    wrapperAllProductsFilterd.insertAdjacentHTML(
      "beforeend",
      `
            <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
          <div class="show-result__save"></div>
          <div class="w-full flex items-center justify-center">
            <img class="w-32 h-32" src=${product.img} alt="">
          </div>
          <a href="ons-page.html?name=4" class="text-xs leading-3 min-w-[9rem]">${
            product.title
          }</a>
          <div>
                <span class="text-base MorabbaBold text-emerald-500">${
                  product.price
                } تومان</span>
                ${
                  product.offer === null
                    ? ""
                    : `<span class="text-xs last-price">${
                        (product.price * 30) / 100
                      }</span>`
                }          </div>
          <div class="flex justify-between">
            <div class="btn-index flex gap-1">
              <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${
                product.id
              }')">
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
    );
    wrapperAllProductsFilterd.classList =
      "flex-shrink gap-2 justify-center mt-10 sm:gap-5 grid grid-cols-1 x:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-5";
  });
};

openUserBasketBtn.addEventListener("click", () => {
  boxBasket.style.left = "0rem";
  layer.style.position = "fixed";
  boxBasket.style.transition = "all 0.5s ease";
  layer.style.transition = "all 0.5s ease-in-out";
});

const useBasket = [];

function addPrudactsToUserBaskets(productID) {
  changeProgresStatus();

  const findProductsForBasketUser = allProducts.find(
    (product) => product.id == productID
  );

  useBasket.push(findProductsForBasketUser);
  ganeratorUserBasket(useBasket);
  console.log("  ganeratorUserBasket ==> ", findProductsForBasketUser);

  saveInToLocalStorege("basket", useBasket);
}

const ganeratorUserBasket = (arryUserBasket) => {
  console.log(arryUserBasket);

  if (arryUserBasket.length > 2) {
    mainProdactsBaskets.classList += " active-style__mainProducts ";
  } else {
    mainProdactsBaskets.classList.remove("active-style__mainProducts");
  }

  console.log(arryUserBasket);
  wrapperBasketUser.innerHTML = "";
  arryUserBasket.map((item) =>
    wrapperBasketUser.insertAdjacentHTML(
      "beforeend",
      `
            <div class="flex pt-5 border-b-2 border-solid border-zinc-500 ">
                            <div class="img flex">
                                <img class="w-166px-custom h-[80px] object-cover " src="${
                                  item.img
                                }" alt=""> 
                            </div>
                            <div class="flex flex-col justify-between  min-w-[100px] x:min-w-[140px]">
                                <span class="leading-6 text-x min-w-full">${
                                  item.title
                                }</span>
                                <div class="flex text-x flex-col ">
                                ${item.offer ? `
                                  <div class="relative">
                                <span class="absolute w-full border-offer__custom  bg-red-700"></span>
                                ${
                                  item.offer
                                    ? `<span class="leading-4 text-green-500">${
                                      item.price
                                      }</span>`
                                    : ""
                                }</div>
                                    <span class="leading-4 ">${
                                        item.price -
                                        (item.price * item.offer) / 100
                                    }</span>
                                  ` : `  <span class="leading-4 ">${
                                      item.price
                                    }</span>`}
                                </div>
                            </div>
                        </div>
            `
    )
  );

  if (arryUserBasket.length > 1) {
    wrapperAllProductsInBasketsPc.classList += " active-style__mainProducts ";
  } else {
    wrapperAllProductsInBasketsPc.classList.remove(
      "active-style__mainProducts"
    );
  }

  wrapperAllProductsInBasketsPc.innerHTML = "";
  countProductsInBaskets.innerHTML = arryUserBasket.length + " مورد";

  if (arryUserBasket.length) {
    // btnOrdersPc.innerHTML = ""
    btnOrdersPc.innerHTML = ` <a href="../../user-basket.html" class="items-center cursor-pointer flex justify-center rounded-xl text-[8px] lg:text-sm h-[100%] font-bold btn-style__colorOrders   text-white dark:text-white pt-1 pb-1 pl-1  pr-1 lg:pr-3 lg:pl-3"
                                                >ثبت سفارش
                              </a>`;
    console.log(btnOrdersPc);

    arryUserBasket.map((product) =>
      wrapperAllProductsInBasketsPc.insertAdjacentHTML(
        "beforeend",
        `
              <div class=" flex gap-3 pb-2 border-b-2 border-solid border-white pt-5 ">
                                      <img class="w-12 h-12 lg:w-166px-custom lg:h-24" src="${
                                        product.img
                                      }" alt="">
                                      <div class="flex flex-col justify-between gap-3 lg:gap-6">
                                          <span class="max-w-40 leading-normal text-[10px] lg:text-sm  text-zinc-700 dark:text-white">
                                              ${product.title}
                                          </span>
                                          <div class="flex flex-col gap-0.5 lg:gap-2">
                                              <span class="text-teal-600 dark:text-emerald-500 text-[9x] sm:text-base lg:text-sm text-xs font-Dana">
                                              <span class="text-zinc-700 font-Dana text-[10x] sm:text-base lg:text-sm dark:text-white ">${product.price.toLocaleString()}
                                                  تومان</span>
                                          </div>
                                      </div>
                                  </div>
              `
      )
    );
  }

  culcoutorPricProductBasket(arryUserBasket);
};

const culcoutorPricProductBasket = (priceProducts) => {
  // console.log(priceProducts);

  let sum = 0;
  priceProducts.map((price) => (sum += price.price));

  wrapperTotalPrice.innerHTML = sum;
  pricesAllProductsInBasketPc.innerHTML = sum;
};

const basktUser = (id) => {
  let basketIcons = document.querySelectorAll(".icon-basket");
  let basketUser = document.querySelector("#open-user__basket");

  let basket = {
    prudacts: [],
    totalPrice: 0,
  };

  for (let i = 0; i < basketIcons.length; i++) {
    basketIcons[i].addEventListener("click", (e) => {
      let add = Number(basketUser.getAttribute("data-count") || 0);
      basketUser.setAttribute("data-count", add + 1);
      basketUser.classList.add("active");

      let prudactsForBasket =
        e.target.parentElement.parentElement.parentElement;

      basket.prudacts.push(prudactsForBasket);
    });
  }
};

const filtredProducts = () => {
  let valueSelectorFilter = null;
  selectorFilterValue.forEach((selector) =>
    selector.addEventListener("click", (e) => {
      valueSelectorFilter = e.target.innerText;
      console.log(valueSelectorFilter);
      filterGenereator(allProducts, valueSelectorFilter);
      console.log(allProducts);
    })
  );
};

const filterGenereator = (array, valueSelectorFilter) => {
  let titleValueForFilter = "";
  let findProductsInfilterSelectedUser = [...array];
  switch (valueSelectorFilter) {
    case "همه محصولات":
      {
        findProductsInfilterSelectedUser = array;
        console.log(findProductsInfilterSelectedUser);
        titleValueForFilter = "همه محصولات";
      }
      break;
    case "پرفروش":
      {
        findProductsInfilterSelectedUser = allProducts.filter(
          (product) => product.filter_mod == "best-seller"
        );
        titleValueForFilter = "پرفروش";
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "تخفیف خورده":
      {
        findProductsInfilterSelectedUser = allProducts.filter(
          (product) => product.filter_mod == "offer"
        );
        titleValueForFilter = "تخفیف خورده";
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "پر بازدید":
      {
        findProductsInfilterSelectedUser = allProducts.filter(
          (product) => product.filter_mod == "papular"
        );
        titleValueForFilter = "پر بازدید";
        console.log(findProductsInfilterSelectedUser);
      }

      break;
  }
  generatorTheCodeHtmlFiltered(
    findProductsInfilterSelectedUser,
    titleValueForFilter
  );
};

const generatorTheCodeHtmlFiltered = (htmlCode, titleValueForFilter) => {
  const wrapperLoader = document.querySelector(".wrapper-loader");

  setTimeout(() => {
    wrapperAllProductsFilterd.innerHTML = "";
    wrapperAllProductsFilterd.insertAdjacentHTML(
      "beforeend",
      `
    <div class="wrapper-loader dark:bg-zinc-600">

             <span class="loader"></span>
    </div>
    `
    );
    setTimeout(() => {
      wrapperAllProductsFilterd.innerHTML = "";
    }, 2000);
  }, 10);

  setTimeout(() => {
    let titleFilterd = document.querySelector("#title-filterd");
    wrapperAllProductsFilterd.innerHTML = "";
    titleFilterd.innerHTML = titleValueForFilter;
    countProducts.innerHTML = `(${htmlCode.length}`;
    htmlCode.map((product) =>
      wrapperAllProductsFilterd.insertAdjacentHTML(
        "beforeend",
        `
              <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
            <div class="show-result__save"></div>
            <div class="w-full flex items-center justify-center">
              <img class="w-32 h-32" src=${product.img} alt="">
            </div>
            <a href="ons-page.html?name=4" class="text-xs leading-3 min-w-[9rem]">${
              product.title
            }</a>
            <div>
  <span class="text-base MorabbaBold text-emerald-500">${
    product.price
  } تومان</span>
                  ${
                    product.offer === null
                      ? ""
                      : `<span class="text-xs last-price">${
                          (product.price * 30) / 100
                        }</span>`
                  }
            </div>
            <div class="flex justify-between">
              <div class="btn-index flex gap-1">
                <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${
                  product.id
                }')">
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
  }, 2020);
};

const showStatusByRowAndColumns = () => {
  let btnTypeShowProducts = document.querySelectorAll(
    ".btn-type__show-products"
  );

  btnTypeShowProducts.forEach((btnsType) => {
    btnsType.addEventListener("click", (e) => {
      btnTypeShowProducts.forEach((icons) => {
        icons.classList.remove("active-showType");
        e.target.classList.add("active-showType");

        console.log(e.target.classList);
      });

      let showBtnType = String(e.target.classList).includes("columns");
      changeTypeByShowBtnHandler(showBtnType);
      // console.log(e);
    });
  });
};

const changeTypeByShowBtnHandler = (showBtnType) => {
  console.log(showBtnType);
  if (showBtnType) {
    wrapperAllProductsFilterd.innerHTML = "";

    allProducts.map((product) => {
      wrapperAllProductsFilterd.insertAdjacentHTML(
        "beforeend",
        `
              <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
            <div class="show-result__save"></div>
            <div class="w-full flex items-center justify-center">
              <img class="w-32 h-32" src=${product.img} alt="">
            </div>
            <a href="ons-page.html?name=4" class="text-xs leading-3 min-w-[9rem]">${
              product.title
            }</a>
            <div>
                  <span class="text-base MorabbaBold text-emerald-500">${
                    product.price
                  } تومان</span>
                  ${
                    product.offer === null
                      ? ""
                      : `<span class="text-xs last-price">${
                          (product.price * 30) / 100
                        }</span>`
                  }          </div>
            <div class="flex justify-between">
              <div class="btn-index flex gap-1">
                <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${
                  product.id
                }')">
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
      );
      wrapperAllProductsFilterd.classList =
        "flex-shrink gap-2 justify-center mt-10 sm:gap-5 grid grid-cols-1 x:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-5";
    });
  } else {
    wrapperAllProductsFilterd.innerHTML = "";
    wrapperAllProductsFilterd.classList = "flex flex-col gap-3 mt-5";
    allProducts.map((product) => {
      wrapperAllProductsFilterd.insertAdjacentHTML(
        "beforeend",
        `
              <div class="bg-white relative pt-5 pb-5 rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex  gap-2">
            <div class="show-result__save"></div>
            <div class="w-[70%] flex items-center justify-center">
              <img class="w-32 h-32" src=${product.img} alt="">
            </div>
<div class="flex pb-2 pt-3 gap-5">
            <div class="flex flex-col justify-between ">
            <a href="ons-page.html?name=4" class="text-xs leading-5 max-w-prod">${
              product.title
            }</a>
            <div class="flex justify-between flex-col">
              <div class="btn-index flex items-center justify-center  ">
                <span href="#" class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets('${
                  product.id
                }')">
                  <svg class="icon-basket w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                    <use xlink:href="#shopping-cart"></use>
                  </svg>
                </span>
                <svg id="save-icon" class="w-4 h-4 x:w-5 x:h-5 cursor-pointer">
                  <use xlink:href="#save"></use>
                </svg>
              </div>
              <div class="flex justify-between">
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
            <div class="flex justify-end ss  flex-col">
                  <span class="text-base MorabbaBold text-emerald-500">${
                    product.price
                  } تومان</span>
                  ${
                    product.offer === null
                      ? ""
                      : `<span class="text-xs last-price">${
                          (product.price * 30) / 100
                        }</span>`
                  }          </div></div>
            
          </div>
              `
      );
    });
  }
};

const changeProgresStatus = () => {
  wrapperSucssusAlarm.classList.add("active-succus__alarm");
  wrapperSucssusAlarm.style.transition = "all 0.5s ease";
  progresAddProductBasket.classList.add(
    "progressbar-add__prodactsTo__userBasket"
  );
  setTimeout(() => {
    wrapperSucssusAlarm.classList.remove("active-succus__alarm");
    progresAddProductBasket.classList.remove(
      "progressbar-add__prodactsTo__userBasket"
    );
  }, 4200);
};

window.addPrudactsToUserBaskets = addPrudactsToUserBaskets;

export {
  filterTitleHandler,
  showAllProducts,
  filtredProducts,
  showStatusByRowAndColumns,
  ganeratorUserBasket,
  culcoutorPricProductBasket,
  basktUser,
  changeProgresStatus,
  handleUserBasketByLocalStorage,
};
