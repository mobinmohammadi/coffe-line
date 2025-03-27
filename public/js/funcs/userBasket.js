import {
  getFromLocalStorage,
  saveInToLocalStorege,
  showSwal,
} from "../utils/utils.js";
const wrapperBasketUser = document.querySelector("#wrapper-basket__user");
const wrapperAllProductsInBasketsPc = document.querySelector(
  "#wrapper-allProducts__inBaskets--pc"
);

const btnDeleteAllProductsUserBasket = document.querySelector(
  "#btn-delete__allProducts--userBasket"
);
const userBasketdataInLocalStorage = getFromLocalStorage("basket");

const handleUserBasketByLocalStorage = () => {
  console.log(userBasketdataInLocalStorage);
  if (!userBasketdataInLocalStorage.length) {
    btnDeleteAllProductsUserBasket.style.display = "none";
  } else {
    btnDeleteAllProductsUserBasket.style.display = "block";
  }
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
  if (userBasketdataInLocalStorage.length) {
    wrapperAllProductsInBasketsPc.innerHTML = "";
    userBasketdataInLocalStorage.map((item) => {
      wrapperAllProductsInBasketsPc.insertAdjacentHTML(
        "beforeend",
        `
       <div class="bg-white p-5 rounded-lg">
       <div class="flex justify-between">
       <div class="sm:h-[9rem] flex items-start">
  
       <span class=" max-w-[256px] mt-3 text-xs xs:text-sm leading-6 inline-block"
         >${item.title}
       </span>
       </div>
                <img class="max-wpri" src="${item.img}" alt="" />
              </div>
              <div class="flex justify-between">
                <div
                  class="flex child:flex flex-col gap-3 child:gap-1 child:text-xs"
                >
                  <div class="">
                    <span class="font-bold">تاریخ تولید :</span>
                    <span class="text-amber-800">${item.date}</span>
                  </div>
                  <div class="">
                    <span class="font-bold">تاریخ انقضا :</span>
                    <span class="text-sky-900">تا 2 سال پس از تولید</span>
                  </div>
                  <div class="">
                    <span class="font-bold">تحویل :</span>
                    <span class="text-red-900">3 - 6 روز کاری</span>
                  </div>
                  <div class="">
                    <span class="font-bold">فرشنده :</span>
                    <span class="text-green-900">${item.seller}</span>
                  </div>
                </div>
                <div class="flex flex-col gap-2 w-w-cus">
                  <div class="flex gap-1 text-base text-zinc-700">
                    <span>${item.price - (item.price * item.offer) / 100}</span>
                    <span>تومان</span>
                  </div>
                  <div class="flex gap-1 text-xs">
                    <div class="relative text-slate-600">
                      <span
                        class="absolute w-full h-[2px] bg-slate-400 top-[40%]"
                      ></span>
                      ${
                        item.offer
                          ? `
                        <span class="text-slate-300">${item.price}</span>
                        <span>تومان</span>
                        `
                          : ""
                      }
                    </div>
                  </div>
                  ${
                    item.offer
                      ? `
                       <div
                      class="bg-red-500 gap-[2px] font-bold text-white w-10 rounded-md text-xs flex items-center justify-center pt-1 pb-1 pr-2 pl-2"
                    >
                      <span class="text-x mt-1">%</span>
                      ${item.offer}
                    </div>`
                      : ""
                  }
                </div>
              </div>
              <div
                class="flex gap-2 mt-2 items-center bg-slate-200 w-32 justify-center rounded-sm pt-2 pb-2 pr-4 pl-4"
              >
                <svg
                  class="w-5 h-5 child:cursor-pointer hover:text-green-600 transition-all"
                >
                  <use xlink:href="#plus-circle"></use>
                </svg>
                <span>2 عدد</span>
                <svg
                  class="w-5 h-5 child:cursor-pointer hover:text-red-700 transition-all"
                >
                  <use href="#trash"></use>
                </svg>
              </div>
              </div>
      `
      );
    });
  } else {
  }
};

const deletAllProductsInUserBasket = () => {
  btnDeleteAllProductsUserBasket.addEventListener("click", () => {
    showSwal(
      "آیا از حذف کردن همه محصولات موجود در سبد خریدتان مطمعن هستید؟",
      "warning",
      ["خیر", "بله"],
      (res) => {
        if (res) {
          saveInToLocalStorege("basket", []);
          location.reload();
        }
      }
    );
  });
};

const culcoutorPriceProductsFromLocalStorage = (products) => {
  console.log(Object.entries(products));

  let sum = 0;

  let produtsPrices = products.map((item) => (sum += item.price));

  console.log(sum);

  // const convertArrayPriceToNumber = Number(priceProducts);
  // sum += Number(priceProducts);

  // priceProducts.map((price) => (sum += price.price));

  //   wrapperTotalPrice.innerHTML = sum;
  //   pricesAllProductsInBasketPc.innerHTML = sum;
};

export { handleUserBasketByLocalStorage, deletAllProductsInUserBasket };
