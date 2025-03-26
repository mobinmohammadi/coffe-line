import { prodacts } from "../Data.js";
import { getFromLocalStorage, saveInToLocalStorege } from "../utils/utils.js";

const wrapperAllProductsFilterd = document.querySelector(
  "#wrapper-allProducts__filterd-columns"
);
const mainProdactsBaskets = document.querySelector(".main-prudacts__baskets");
const wrapperSucssusAlarm = document.querySelector("#wrapper-sucssus__alarm");
const progresAddProductBasket = document.querySelector(
  ".progres-addProduct__basket"
);
let openUserBasketBtn = document.querySelector(".open-user__baskets");
let boxBasket = document.querySelector("#box-basket");
const wrapperBasketUser = document.querySelector("#wrapper-basket__user");


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
  countProducts.innerHTML = `(${prodacts.length}`;
  prodacts.map((product) => {
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


let useBasket = [];
function addPrudactsToUserBaskets(productID) {
  changeProgresStatus();
  const findProductsForBasketUser = prodacts.find(
    (product) => product.id == productID
  );

  useBasket.push(findProductsForBasketUser);
  ganeratorUserBasket(useBasket);

  console.log("useBasket ===> ", useBasket);
  saveInToLocalStorege("basket", useBasket);

}

const ganeratorUserBasket = (arryUserBasket) => {

  if (arryUserBasket.length > 2) {
    mainProdactsBaskets.classList += " active-style__mainProducts ";
  } else {
    mainProdactsBaskets.classList.remove("active-style__mainProducts");
  }
  wrapperBasketUser.innerHTML = "";
  arryUserBasket.map((item) =>
    wrapperBasketUser.insertAdjacentHTML(
      "beforeend",
      `
            <div class="flex pt-5 b-b ">
                            <div class="img ml-3">
                                <img class="w-24 h-[5rem] object-cover  " src="${
                                  item.img
                                }" alt=""> 
                            </div>
                            <div class="mr-2 flex flex-col justify-between  min-w-[100px] x:min-w-[140px]">
                                <span class="leading-6 text-x min-w-full">${
                                  item.title
                                }</span>
                                <div class="flex text-x flex-col">
                                ${
                                  item.offer
                                    ? `<span class="leading-4 text-green-500">14.500 تومان تخفیف</span>`
                                    : ""
                                }
                                    <span class="leading-4 ">${
                                      item.price
                                    }</span>
                                </div>
                            </div>
                        </div>
            `
    )
  );

  culcoutorPricProductBasket(arryUserBasket);
};

const culcoutorPricProductBasket = (priceProducts) => {
  const wrapperTotalPrice = document.querySelector("#wrapper-total__price");
  let sum = 0;
  priceProducts.map((price) => (sum += price.price));

  wrapperTotalPrice.innerHTML = sum;
};

const basktUser = (id) => {
  let mainPrudactsBaskets = document.querySelector(".main-prudacts__baskets");
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
      filterGenereator(prodacts, valueSelectorFilter);
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
        findProductsInfilterSelectedUser = prodacts.filter(
          (product) => product.filter_mod == "best-seller"
        );
        titleValueForFilter = "پرفروش";
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "تخفیف خورده":
      {
        findProductsInfilterSelectedUser = prodacts.filter(
          (product) => product.filter_mod == "offer"
        );
        titleValueForFilter = "تخفیف خورده";
        console.log(findProductsInfilterSelectedUser);
      }
      break;
    case "پر بازدید":
      {
        findProductsInfilterSelectedUser = prodacts.filter(
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

    prodacts.map((product) => {
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
    prodacts.map((product) => {
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

const userBasketdataInLocalStorage =  getFromLocalStorage("basket")

const handleUserBasketByLocalStorage = () => {
  
  console.log(userBasketdataInLocalStorage);
  wrapperBasketUser.innerHTML = ""
  userBasketdataInLocalStorage.map(item => {
    wrapperBasketUser.insertAdjacentHTML(
            "beforeend",
            `
                  <div class="flex pt-5 b-b ">
                                  <div class="img flex">
                                      <img class="w-24 h-[80px] object-cover " src="${
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
                                          ? `<span class="leading-4 text-green-500">14.500 تومان تخفیف</span>`
                                          : ""
                                      }
                                          <span class="leading-4 ">${
                                            item.price
                                          }</span>
                                      </div>
                                  </div>
                              </div>
                  `
          )
    
})
  
  
}

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
