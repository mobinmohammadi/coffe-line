import { allProducts } from "../Data.js";
import { getFromLocalStorage, saveInToLocalStorege } from "../utils/utils.js";
const wrapperSucssusAlarm = document.querySelector("#wrapper-sucssus__alarm");
const progresAddProductBasket = document.querySelector(
  ".progres-addProduct__basket"
);
const countProductsInBaskets = document.querySelector(
  "#count-products__in--baskets"
);
const wrapperAllProductsInBasketsPc = document.querySelector(
  ".wrapper-allProducts__inBaskets--pc"
);
const pricesAllProductsInBasketPc = document.querySelector(
  "#prices__allProducts-inBasketPc"
);

const btnOrdersPc = document.querySelector("#btn-orders__pc");
let iconBaskets = document.querySelectorAll(".icon-basket");
let icons = iconBaskets.forEach((shop) => {
  // return shop
});
const wrapperBasketUser = document.querySelector("#wrapper-basket__user");

const wrapperTotalPrice = document.querySelector("#wrapper-total__price");

const userBasketdataInLocalStorage = getFromLocalStorage("basket");
window.addEventListener("load", () => {
  handleUserBasketByLocalStorage();
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
            }" class="text-xs leading-3 min-w-[9rem]">قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...</a>
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

// let prodactSection = () => {
//   let nameCategury = document.querySelector(".name-categury");
//   let bodyCategury = document.querySelector(".body-categury");
//   let bodyCateguryChildren = document.querySelector(".body-categury").children;

//   let nameFilter = [
//     { id: 1, title: "محصولات پر فروش", "data-type": "best-selling-prudacts" },
//     { id: 2, title: "محصولات تخفیف خورده", "data-type": "prudacts-offer" },
//     { id: 3, title: "قهوه ها", "data-type": "cafe" },
//   ];
//   let prodacts = [
//     {
//       id: 1,
//       title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...",
//       "status-type": "all",
//       price: 129000,
//       img: "../../public/products/p1.png",
//     },
//     {
//       id: 2,
//       title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...",
//       "status-type": "best-selling-prudacts",
//       price: 265000,
//       img: "../../public/products/p2.png",
//     },
//     {
//       id: 3,
//       title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...",
//       "status-type": "prudacts-offer",
//       price: 638000,
//       img: "../../public/products/p3.png",
//     },
//     {
//       id: 4,
//       title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...",
//       "status-type": "cafe",
//       price: 98500,
//       img: "../../public/products/p4.png",
//     },
//     {
//       id: 5,
//       title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...",
//       "status-type": "cafe",
//       price: 68520,
//       img: "../../public/products/p5.png",
//     },
//   ];

//   nameFilter.forEach((categuryName) => {
//     nameCategury.insertAdjacentHTML(
//       "beforeend",
//       `
//             <li class="categury-item__name text-sm x:text-[16px]" data-type=${categuryName["data-type"]} >${categuryName.title}</li>
//             `
//     );
//   });

//   let categuryItemName = document.querySelectorAll(".categury-item__name");

//   let activeCategury = document.querySelector(".active-categury");

//   categuryItemName.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       for (let i = 0; i < categuryItemName.length; i++) {
//         categuryItemName[i].classList.remove("active-categury");
//       }
//       e.target.classList.add("active-categury");

//       let dataType = e.target.getAttribute("data-type");
//       console.log(dataType);

//       for (let x = 0; x < bodyCateguryChildren.length; x++) {
//         bodyCateguryChildren[x].style.display = "none";
//         console.log(bodyCateguryChildren[x].getAttribute("status-type"));

//         if (
//           bodyCateguryChildren[x].getAttribute("status-type") == dataType ||
//           dataType == "all"
//         ) {
//           bodyCateguryChildren[x].style.display = "block";
//         }
//       }
//     });
//   });

//   allProducts.forEach((prudacts) => {
//     bodyCategury.insertAdjacentHTML(
//       "beforeend",
//       `
//                     <div ${"status-type =" + prudacts["status-type"]}>
//                      <div class="bg-white relative rounded-2xl overflow-hidden justify-center dark:bg-zinc-700 p-2 text-zinc-700 dark:text-white flex flex-col gap-2">
//             <div class="show-result__save"></div>
//             <div class="w-full flex items-center justify-center ">
//                 <img class="w-32 h-32" src="${prudacts.img}" alt="">
//             </div>
//             <a href="#" class="text-xs leading-3 min-w-[9rem]">قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...</a>
//             <div>
//                 <span class="text-base text-emerald-500">154,000 تومان</span>
//                 <span class="text-xs last-price">175,000</span>
//             </div>
//             <div class="flex justify-between">
//                 <div class="flex gap-1 ">
//                     <svg class="w-4 h-4 x:w-5 x:h-5 cursor-pointer">
//                         <use xlink:href="#shopping-cart"></use>
//                     </svg>
//                     <svg id="save-icon" class="w-4 h-4 x:w-5 x:h-5 cursor-pointer">
//                         <use xlink:href="#save"></use>
//                     </svg>

//                 </div>
//                 <div class="flex">
//                     <svg class="w-4 h-4">
//                         <use xlink:href="#star-fill"></use>
//                     </svg>
//                     <svg class="w-4 h-4">
//                         <use xlink:href="#star-fill"></use>
//                     </svg>
//                     <svg class="w-4 h-4">
//                         <use xlink:href="#star-fill"></use>
//                     </svg>
//                     <svg class="w-4 h-4">
//                         <use xlink:href="#star-fill"></use>
//                     </svg>
//                     <svg class="w-4 h-4">
//                         <use xlink:href="#star-fill"></use>
//                     </svg>
//                 </div>
//             </div>
//         </div>
//                     </div>
//                 `
//     );
//   });
// };

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

  console.log(arryUserBasket);
  wrapperBasketUser.innerHTML = "";
  arryUserBasket.map((item) =>
    wrapperBasketUser.insertAdjacentHTML(
      "beforeend",
      `
            <div class="flex pt-5 border-b-2 border-solid border-zinc-500 ">
                            <div class="img flex">
                                <img class="w-24 h-[80px] object-cover " src="${
                                  item.img
                                }" alt=""> 
                            </div>
                            <div class="flex flex-col justify-between  min-w-[100px] x:min-w-[140px]">
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
                                      <img class="w-24 h-[80px] object-cover " src="${product.img}" alt=""> 
                                  </div>
                                  <div class="flex flex-col justify-between  min-w-[100px] x:min-w-[100px]">
                                      <span class="leading-6 dark:text-white text-zinc-700 text-x min-w-full">${product.title}</span>
                                      <div class="flex text-x flex-col">
                                      
                                          <span class="leading-4 dark:text-white text-zinc-700  ">129000</span>
                                      </div>
                                  </div>
                              </div>
              `
      )
    );
  }

  culcoutorPricProductBasket(arryUserBasket);
};

const handleUserBasketByLocalStorage = () => {
  
  console.log(userBasketdataInLocalStorage);
  countProductsInBaskets.innerHTML = userBasketdataInLocalStorage.length + " مورد"
  btnOrdersPc.innerHTML = `
  <span class="items-center cursor-pointer flex justify-center rounded-xl text-[8px] lg:text-sm h-[100%] font-bold btn-style__colorOrders   text-white dark:text-white p-3">ثبت سفارش
                              </span>
  `
  culcoutorPriceProductsFromLocalStorage(userBasketdataInLocalStorage);

  wrapperBasketUser.innerHTML = "";
  userBasketdataInLocalStorage.map((item) =>
    wrapperBasketUser.insertAdjacentHTML(
      "beforeend",
      `
                  <div class="flex pt-5 border-b-4 border-solid border-zinc-500">
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
  );
  wrapperAllProductsInBasketsPc.innerHTML = "";
  userBasketdataInLocalStorage.map((item) => {
    wrapperAllProductsInBasketsPc.insertAdjacentHTML(
      "beforeend",
      `
                  <div class="flex pt-5 pb-5  border-b-2 border-solid dark:border-white border-zinc-500 ">
                                  <div class="img flex">
                                      <img class="w-24 h-[80px] object-cover " src="${
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
                                          ? `<span class="leading-4 text-green-500">14.500 تومان تخفیف</span>`
                                          : ""
                                      }
                                          <span class="leading-4 dark:text-white text-zinc-700  ">${
                                            item.price
                                          }</span>
                                      </div>
                                  </div>
                              </div>
                  `
    );

  });


};


const culcoutorPriceProductsFromLocalStorage = (products) => {
  console.log(Object.entries(products));
  
  let sum = 0

  let produtsPrices =  products.map((item) => (sum += item.price))


  console.log(sum);
  
   

  // const convertArrayPriceToNumber = Number(priceProducts);
  // sum += Number(priceProducts);


  // priceProducts.map((price) => (sum += price.price));

  wrapperTotalPrice.innerHTML = sum;
  pricesAllProductsInBasketPc.innerHTML = sum;
};

const culcoutorPricProductBasket = (priceProducts) => {
  // console.log(priceProducts);

  let sum = 0;
  priceProducts.map((price) => (sum += price.price));

  wrapperTotalPrice.innerHTML = sum
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
};
