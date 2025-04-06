import { allProducts } from "../Data.js";
import {
  getFromLocalStorage,
  saveInToLocalStorege,
  showSwal,
} from "../utils/utils.js";
const wrapperSucssusAlarm = document.querySelector("#wrapper-sucssus__alarm");
const progresAddProductBasket = document.querySelector(
  ".progres-addProduct__basket"
);
const wrapperMenrUserBasket = document.querySelector(".wrapper-menrUserBasket");

let bodyCategury = document.querySelector(".body-categury");

const countProductsInBaskets = document.querySelector(
  "#count-products__in--baskets"
);
const selectorTypeFilter = document.querySelectorAll("#selector-type__filter");

const wrapperAllProductsInBasketsPc = document.querySelector(
  ".wrapper-allProducts__inBaskets--pc"
);
const pricesAllProductsInBasketPc = document.querySelector(
  "#prices__allProducts-inBasketPc"
);

const btnOrdersPc = document.querySelector("#btn-orders__pc");
let iconBaskets = document.querySelectorAll(".icon-basket");
const wrapperBtnsBasket = document.querySelector(".wrapper-btns__basket")
let icons = iconBaskets.forEach((shop) => {
  // return shop
});
const wrapperBasketUser = document.querySelector("#wrapper-basket__user");

const wrapperTotalPrice = document.querySelector("#wrapper-total__price");

const userBasketdataInLocalStorage = getFromLocalStorage("basket");
window.addEventListener("load", () => {
  handleUserBasketByLocalStorage();
  if(userBasketdataInLocalStorage.length == 0){
    wrapperBasketUser.insertAdjacentHTML("beforeend" , 
      `
       <div class="w-full rounded-lg space-y-8 mt-3 bg-red-700 flex justify-center text-white font-MorabbaBold pt-5 pb-5">
                            <span class="text-center text-basket">سبد خرید شما خالی میباشد😭</span>
                        </div>
      `

    )
    wrapperTotalPrice.innerHTML = "😴"
    wrapperBtnsBasket.innerHTML = ""
    wrapperBtnsBasket.insertAdjacentHTML("beforeend" , `
      <span  class="pt-3.5 flex items-center justify-center pb-3.5 pl-8 pr-8 bg-slate-400 text-center rounded-xl text-white " type="submit">ثبت سفارش</span>
      `)
  }
  
  
});

const mainProdactsBaskets = document.querySelector(".main-prudacts__baskets");

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

let mainPrudacts = () => {
  let wrapperBtnShop = document.querySelector(".wrapper-btn-shop");
  let mainProducts = document.querySelector(".main-products");

  allProducts.forEach((prudacts) => {
    // console.log(prudacts)

    mainProducts.insertAdjacentHTML(
      "beforeend",

      `
            <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
            <div class="show-result__save"></div>
            <div class="w-full flex items-center justify-center ">
                <img class="w-32 h-32" src="${prudacts.img}" alt="">
            </div>
            <a href="ons-page.html?name=${
              prudacts.id
            }" class="text-xs leading-3 min-w-[9rem]">${prudacts.title}</a>
            <div>
                <span class="text-base MorabbaBold text-emerald-500">${
                  prudacts.price
                } تومان</span>
                ${
                  prudacts.offer === null
                    ? ""
                    : `<span class="text-xs last-price">${
                        (prudacts.price * 30) / 100
                      }</span>`
                }
            </div>
            <div class="flex justify-between">
                <div class="btn-index flex gap-1 ">
                  <span class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets(${
                    prudacts.id
                  })">
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
  });
};

let prodactSection = () => {
  selectorTypeFilter.forEach((selector) => {
    selector.addEventListener("click", (e) => {
      selectorTypeFilter.forEach((typeSelector) => {
        typeSelector.classList.remove("active-categury");
        e.target.classList.add("active-categury");
      });
      filterProductsInHomePageHandler(e.target.dataset.type);
    });
  });

  let categuryItemName = document.querySelectorAll(".categury-item__name");

  let activeCategury = document.querySelector(".active-categury");

  // categuryItemName.forEach((link) => {
  //   link.addEventListener("click", (e) => {
  //     for (let i = 0; i < categuryItemName.length; i++) {
  //       categuryItemName[i].classList.remove("active-categury");
  //     }
  //     e.target.classList.add("active-categury");

  //     let dataType = e.target.getAttribute("data-type");
  //     console.log(dataType);

  //     for (let x = 0; x < bodyCateguryChildren.length; x++) {
  //       bodyCateguryChildren[x].style.display = "none";
  //       console.log(bodyCateguryChildren[x].getAttribute("status-type"));

  //       if (
  //         bodyCateguryChildren[x].getAttribute("status-type") == dataType ||
  //         dataType == "all"
  //       ) {
  //         bodyCateguryChildren[x].style.display = "block";
  //       }
  //     }
  //   });
  // });

  allProducts.forEach((prudacts) => {
    bodyCategury.insertAdjacentHTML(
      "beforeend",

      `
            <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
            <div class="show-result__save"></div>
            <div class="w-full flex items-center justify-center ">
                <img class="w-32 h-32" src="${prudacts.img}" alt="">
            </div>
            <a href="ons-page.html?name=${
              prudacts.id
            }" class="text-xs leading-3 min-w-[9rem]">${prudacts.title}</a>
            <div>
                <span class="text-base MorabbaBold text-emerald-500">${
                  prudacts.price
                } تومان</span>
                ${
                  prudacts.offer === null
                    ? ""
                    : `<span class="text-xs last-price">${
                        (prudacts.price * 30) / 100
                      }</span>`
                }
            </div>
            <div class="flex justify-between">
                <div class="btn-index flex gap-1 ">
                  <span class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets(${
                    prudacts.id
                  })">
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
  });
};

const filtredProducts = [];

const filterProductsInHomePageHandler = (namefilter) => {
  let arrayFilterdTheAfterFindedt = [];
  console.log(namefilter);
  switch (namefilter) {
    case "all":
      {
        arrayFilterdTheAfterFindedt = [...allProducts];
      }
      break;
    case "best-seller":
      {
        arrayFilterdTheAfterFindedt = [...allProducts].filter(
          (products) => products.filter_mod == "best-seller"
        );
      }
      break;
    case "prudacts-offer":
      {
        arrayFilterdTheAfterFindedt = [...allProducts].filter(
          (products) => products.filter_mod == "prudacts-offer"
        );
      }
      break;

    case "papular":
      {
        arrayFilterdTheAfterFindedt = [...allProducts].filter(
          (products) => products.filter_mod == "papular"
        );
      }
      break;

    case "offer":
      {
        arrayFilterdTheAfterFindedt = [...allProducts].filter(
          (products) => products.filter_mod == "offer"
        );
      }
      break;
  }

  genretorTheHtmlCodeAfterTheFiltred(arrayFilterdTheAfterFindedt);
};

const genretorTheHtmlCodeAfterTheFiltred = (arrayFilterdTheAfterFindedt) => {
  bodyCategury.innerHTML = "";
  console.log(arrayFilterdTheAfterFindedt);
  arrayFilterdTheAfterFindedt.map((product) =>
    bodyCategury.insertAdjacentHTML(
      "beforeend",
      `
      <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
            <div class="show-result__save"></div>
            <div class="w-full flex items-center justify-center ">
                <img class="w-32 h-32" src="${product.img}" alt="">
            </div>
            <a href="ons-page.html?name=${
              product.id
            }" class="text-xs leading-3 min-w-[9rem]">${product.title}</a>
            <div>
                ${
                  product.offer
                    ? `
                       <div class="flex flex-col gap-2 ">
                       <div class="leading-4 dark:text-white text-zinc-700 relative">
                         <span class=" absolute w-full  border-offer__custom bg-red-700 "></span>
                         <span class="text-x">${product.price} تومان</span>
                       </div>
                         <span class="text-xs">${
                           product.price - (product.price * product.offer) / 100
                         } تومان</span>
                       </div>
                       `
                    : `<span class="leading-4 dark:text-white text-zinc-700  ">${product.price} تومان</span>`
                }
            </div>
            <div class="flex justify-between">
                <div class="btn-index flex gap-1 ">
                  <span class="wrapper-btn-shop" onclick="addPrudactsToUserBaskets(${
                    product.id
                  })">
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

const useBasket = [];

function addPrudactsToUserBaskets(productID) {
  // statusInUserBasket(productID , useBasket)
  changeProgresStatus();

  const findProductsForBasketUser = allProducts.find(
    (product) => product.id == productID
  );

  useBasket.push(findProductsForBasketUser);
  ganeratorUserBasket(useBasket);
}

const ganeratorUserBasket = (arryUserBasket) => {
  saveInToLocalStorege("basket", arryUserBasket);

  // statusInUserBasket(arryUserBasket)
  if (arryUserBasket.length > 2) {
    mainProdactsBaskets.classList += " active-style__mainProducts ";
  } else {
    mainProdactsBaskets.classList.remove("active-style__mainProducts");
  }

  if(userBasketdataInLocalStorage.length >= 1 || arryUserBasket.length >= 1 ){
    
    wrapperBtnsBasket.innerHTML = ""
    wrapperBtnsBasket.insertAdjacentHTML("beforeend" , `
      <a href="./public/pages/user-basket.html" class="pt-3.5 flex items-center justify-center pb-3.5 pl-8 pr-8 bg-emerald-500 text-center rounded-xl text-white " type="submit">ثبت سفارش</a>
      `)
}
  wrapperBasketUser.innerHTML = "";
  arryUserBasket.map((item) =>
    wrapperBasketUser.insertAdjacentHTML(
      "beforeend",
      `
                  <div class="flex pt-5 border-b-2 pb-2 border-solid border-slate-200">
                                  <div class="img flex">
                                      <img class="w-166px-custom h-[80px] object-cover " src="${
                                        item.img
                                      }" alt=""> 
                                  </div>
                                  <div class="flex flex-col justify-between  max-h-[5rem]  min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 text-x max-w-12rem">${
                                        item.title
                                      }</span>
                                      <div class="flex text-x flex-col">
                                       ${
                                         item.offer
                                           ? `
                                          <div class="flex flex-col gap-2 ">
                                          <div class="leading-4 text-xs dark:text-white text-zinc-700 relative">
                                            <span class=" absolute text-xs text w-full border-offer__custom bg-red-700 "></span>
                                            <span>${item.price} تومان</span>
                                          </div>
                                            <span class="">${
                                              item.price -
                                              (item.price * item.offer) / 100
                                            } تومان</span>
                                          </div>
                                             `
                                           : `<span class="leading-4 dark:text-white text-zinc-700  ">${item.price} تومان</span>`
                                       }
                                       <svg onclick="deleteOnsProduct(${
                                         item.id
                                       })" class="w-5 h-5 mt-3 cursor-pointer">
                                            <use href="#trash"></use>
                                       </svg>
                                          
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
    btnOrdersPc.innerHTML = ` <span class="items-center cursor-pointer flex justify-center rounded-xl text-[8px] lg:text-sm h-[100%] font-bold btn-style__colorOrders   text-white dark:text-white p-3"
                                                >ثبت سفارش
                              </span>`;
    console.log(btnOrdersPc);

    arryUserBasket.map((product) =>
      wrapperAllProductsInBasketsPc.insertAdjacentHTML(
        "beforeend",
        `

             <div class="flex pt-5 pb-5  border-b-2 border-solid dark:border-white border-zinc-500 ">
                                  <div class="img flex">
                                      <img class="w-166px-custom h-[80px] object-cover " src="${
                                        product.img
                                      }" alt=""> 
                                  </div>
                                  <div class="flex flex-col justify-between max-h-[5.7rem] min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 dark:text-white text-zinc-700 text-x min-w-full">${
                                        product.title
                                      }</span>
                                      <div class="flex text-x flex-col">
                                      
 ${
   product.offer
     ? `
                                          <div class="flex flex-col gap-2 ">
                                          <div class="leading-4 text-xs dark:text-white text-zinc-700 relative">
                                            <span class=" absolute text-xs text w-full border-offer__custom bg-red-700 "></span>
                                            <span class="text-x">${
                                              product.price
                                            } تومان</span>
                                          </div>
                                            <span class="text-xs text-zinc-700-custom">${
                                              product.price -
                                              (product.price * product.offer) /
                                                100
                                            } تومان</span>
                                          </div>
                                             `
     : `<span class="leading-4 text-xs dark:text-white text-zinc-700  ">${product.price} تومان</span>`
 }
                                                                                </div>
                                  </div>
                              </div>
              `
      )
    );
  }
  else{
    
  }


  culcoutorPricProductBasket(arryUserBasket);
};

const handleUserBasketByLocalStorage = () => {
  if (userBasketdataInLocalStorage.length > 2) {
    wrapperAllProductsInBasketsPc.classList += " active-style__mainProducts ";
  } else {
    wrapperAllProductsInBasketsPc.classList.remove(
      "active-style__mainProducts"
    );
  }

  if (userBasketdataInLocalStorage.length > 2) {
    mainProdactsBaskets.classList += " active-style__mainProducts ";
  } else {
    mainProdactsBaskets.classList.remove("active-style__mainProducts");
  }

  countProductsInBaskets.innerHTML =
    userBasketdataInLocalStorage.length + " مورد";
  btnOrdersPc.innerHTML = `
  <span class="items-center cursor-pointer flex justify-center rounded-xl text-[8px] lg:text-sm h-[100%] font-bold btn-style__colorOrders   text-white dark:text-white p-3">ثبت سفارش
                              </span>
  `;
  culcoutorPriceProductsFromLocalStorage(userBasketdataInLocalStorage);

  wrapperBasketUser.innerHTML = "";
  userBasketdataInLocalStorage.map((item) =>
    wrapperBasketUser.insertAdjacentHTML(
      "beforeend",
      `
                  <div class="flex pt-5 border-b-2 pb-2 border-solid border-slate-200">
                                  <div class="img flex">
                                      <img class="w-166px-custom h-[80px] object-cover " src="${
                                        item.img
                                      }" alt=""> 
                                  </div>
                                  <div class="flex flex-col justify-between  max-h-[5rem]  min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 text-x max-w-12rem">${
                                        item.title
                                      }</span>
                                      <div class="flex text-x flex-col">
                                       ${
                                         item.offer
                                           ? `
                                          <div class="flex flex-col gap-2 ">
                                          <div class="leading-4 text-xs dark:text-white text-zinc-700 relative">
                                            <span class=" absolute text-xs text w-full border-offer__custom bg-red-700 "></span>
                                            <span>${item.price} تومان</span>
                                          </div>
                                            <span class="">${
                                              item.price -
                                              (item.price * item.offer) / 100
                                            } تومان</span>
                                          </div>
                                             `
                                           : `<span class="leading-4 dark:text-white text-zinc-700  ">${item.price} تومان</span>`
                                       }

                                        <svg onclick="deleteOnsProduct(${
                                          item.id
                                        })" class="w-5 h-5 mt-3 cursor-pointer">
                                            <use href="#trash"></use>
                                       </svg>
                                  </div>
                              </div>
                  `
    )
  );
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
                                  <div class="flex flex-col justify-between max-h-[5rem]  min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 dark:text-white text-zinc-700 text-x min-w-full">${
                                        item.title
                                      }</span>
                                      <div class="flex text-x flex-col">
                                        ${
                                          item.offer
                                            ? `
                                          <div class="flex flex-col gap-2 ">
                                          <div class="leading-4 text-xs dark:text-white text-zinc-700 relative">
                                            <span class=" absolute text-xs text w-full border-offer__custom bg-red-700 "></span>
                                            <span>${item.price} تومان</span>
                                          </div>
                                            <span class="text-zinc-700 font-bold">${
                                              item.price -
                                              (item.price * item.offer) / 100
                                            } تومان</span>
                                          </div>
                                             `
                                            : `<span class="leading-4 dark:text-white text-zinc-700 font-bold ">${item.price} تومان</span>`
                                        }
                                          
                                          
                                      </div>
                                  </div>
                              </div>
                  `
    );
  });
};

const createdBeforDeleteOnsProducts = (newArrayBefforeDeleteOnsProduct) => {
  console.log(newArrayBefforeDeleteOnsProduct);
  
  saveInToLocalStorege("basket" , newArrayBefforeDeleteOnsProduct)
  
  // newArrayBefforeDeleteOnsProduct.map(item => {
  //   console.log("item ==> " , item);
    
  //   wrapperBasketUser.insertAdjacentHTML("beforeend" , `
  //     <div class="flex pt-5 border-b-2 pb-2 border-solid border-slate-200">
  //                                 <div class="img flex">
  //                                     <img class="w-24 h-[80px] object-cover " src="../../public/products/p1.png" alt=""> 
  //                                 </div>
  //                                 <div class="flex flex-col justify-between  max-h-[5rem]  min-w-[100px] x:min-w-[100px]">
  //                                     <span class="leading-6 text-x max-w-12rem">قهوه برزیلی بن مانو مقدار 800 گرم خط دوم اسم ...</span>
  //                                     <div class="flex text-x flex-col">
  //                                      <span class="leading-4 dark:text-white text-zinc-700  ">129000 تومان</span>
  //                                      <svg onclick="deleteOnsProduct(1)" class="w-5 h-5 mt-3 cursor-pointer">
  //                                           <use href="#trash"></use>
  //                                      </svg>
                                          
  //                                 </div>
  //                             </div>
  //                 </div>
  //     `)
  // })
}

const deleteOnsProduct = (productID) => {
  console.log(productID);

  let newArrayBefforeDeleteOnsProduct = []
  showSwal(
    "آیا از حذف این محصول از سبد خریدتان مطمعن هستید؟",
    "warning",
    ["خیر", "بله"],
    (res) => {
      if (res) {
          newArrayBefforeDeleteOnsProduct = getFromLocalStorage("basket").filter((product) => {
            return product.id !== productID;
          });

        showSwal(
          "محصول مورد نظر با موفقیت حذف شد",
          "succuss",
          "ممنونم",
          (result) => {
            if (result) {
              culcoutorPriceProductsFromLocalStorage(newArrayBefforeDeleteOnsProduct)
              console.log(newArrayBefforeDeleteOnsProduct);
              
              saveInToLocalStorege("basket", newArrayBefforeDeleteOnsProduct);
              createdBeforDeleteOnsProducts(newArrayBefforeDeleteOnsProduct)

              setTimeout(() => {
                // location.reload()
              }, 500);
              wrapperBasketUser.innerHTML = ""
              newArrayBefforeDeleteOnsProduct.map(item =>

                wrapperBasketUser.insertAdjacentHTML(
                  "beforeend",
                  `
                              <div class="flex pt-5 border-b-2 pb-2 border-solid border-slate-200">
                                              <div class="img flex">
                                                  <img class="w-166px-custom h-[80px] object-cover " src="${
                                                    item.img
                                                  }" alt="">
                                              </div>
                                              <div class="flex flex-col justify-between  max-h-[5rem]  min-w-[100px] x:min-w-[100px]">
                                                  <span class="leading-6 text-x max-w-12rem">${
                                                    item.title
                                                  }</span>
                                                  <div class="flex text-x flex-col">
                                                   ${
                                                     item.offer
                                                       ? `
                                                      <div class="flex flex-col gap-2 ">
                                                      <div class="leading-4 text-xs dark:text-white text-zinc-700 relative">
                                                        <span class=" absolute text-xs text w-full border-offer__custom bg-red-700 "></span>
                                                        <span>${item.price} تومان</span>
                                                      </div>
                                                        <span class="">${
                                                          item.price -
                                                          (item.price * item.offer) / 100
                                                        } تومان</span>
                                                      </div>
                                                         `
                                                       : `<span class="leading-4 dark:text-white text-zinc-700  ">${item.price} تومان</span>`
                                                   }

                                                    <svg onclick="deleteOnsProduct(${
                                                      item.id
                                                    })" class="w-5 h-5 mt-3 cursor-pointer">
                                                        <use href="#trash"></use>
                                                   </svg>
                                              </div>
                                          </div>
                              `
                )
              )

              //  ();

            }
          }
        );
      }
    }
  );

 

};

window.deleteOnsProduct = deleteOnsProduct;

const culcoutorPriceProductsFromLocalStorage = (products) => {
  let sum = 0;

  let produtsPrices = products.map((item) => {
    if (item.offer) {
      sum += item.price - (item.price * item.offer) / 100;
    } else {
      sum += item.price;
    }
  });

  wrapperTotalPrice.innerHTML = sum;
  pricesAllProductsInBasketPc.innerHTML = sum;
};

const culcoutorPricProductBasket = (priceProducts) => {
  let sum = 0;
  priceProducts.map((product) => {
    if (product.offer) {
      sum += product.price - (product.price * product.offer) / 100;
    } else {
      sum += product.price;
    }
  });

  wrapperTotalPrice.innerHTML = sum;
  pricesAllProductsInBasketPc.innerHTML = sum;
};

// const basktUser = (id) => {
//   changeProgresStatus;

//   let mainPrudactsBaskets = document.querySelector(".main-prudacts__baskets");
//   let basketIcons = document.querySelectorAll(".icon-basket");
//   let basketUser = document.querySelector("#open-user__basket");

//   let basket = {
//     prudacts: [],
//     totalPrice: 0,
//   };

//   for (let i = 0; i < basketIcons.length; i++) {
//     basketIcons[i].addEventListener("click", (e) => {
//       let add = Number(basketUser.getAttribute("data-count") || 0);
//       basketUser.setAttribute("data-count", add + 1);
//       basketUser.classList.add("active");

//       let prudactsForBasket =
//         e.target.parentElement.parentElement.parentElement;

//       basket.prudacts.push(prudactsForBasket);
//     });
//   }
// };

export {
  mainPrudacts,
  addPrudactsToUserBaskets,
  handleUserBasketByLocalStorage,
  prodactSection,
};
