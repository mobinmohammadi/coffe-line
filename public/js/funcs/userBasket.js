import { allProducts } from "../Data.js";
import {
  getFromLocalStorage,
  saveInToLocalStorege,
  showSwal,
} from "../utils/utils.js";
const wrapperBasketUser = document.querySelector("#wrapper-basket__user");
const wrapperAllProductsInBasketsPc = document.querySelector(
  "#wrapper-allProducts__inBaskets--pc"
);
const allPriceProducts = document.querySelector("#allPrice__products");
const lengthAddCountOrders = document.querySelectorAll(
  ".length-add__count-orders"
);
const wrapperDetailsBuying = document.querySelector("#wrapper-details__buying")

let countProduct = document.getElementsByName("span");

const btnDeleteAllProductsUserBasket = document.querySelector(
  "#btn-delete__allProducts--userBasket"
);
const userBasketdataInLocalStorage = getFromLocalStorage("basket");

const handleUserBasketByLocalStorage = () => {

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
    wrapperDetailsBuying.style.display = "flex"
    btnDeleteAllProductsUserBasket.style.display = "block";

    wrapperAllProductsInBasketsPc.innerHTML = "";
    lengthAddCountOrders.forEach(
      (count) => (count.innerHTML = userBasketdataInLocalStorage.length)
    );
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
              onclick="deleteOnsProduct('${item.id}')"
              class="flex cursor-pointer gap-2 mt-2 items-center bg-slate-200 w-32 justify-center rounded-sm pt-2 pb-2 pr-4 pl-4"
              >


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
    btnDeleteAllProductsUserBasket.style.display = "none";
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
  allPriceProducts.innerHTML = sum;

  //   wrapperTotalPrice.innerHTML = sum;
  //   pricesAllProductsInBasketPc.innerHTML = sum;
};

let sum = 1;
const addCountProducts = (productID) => {
  let resultSearchForAddCountProduct = allProducts.filter(
    (prod) => prod.id == productID
  );
  sum++;
  resultSearchForAddCountProduct.count = sum;
  countProduct;
  console.log(countProduct);

  setTimeout(() => {
    console.log(resultSearchForAddCountProduct);
  }, 2000);

  // countProduct.innerHTML = result

  // console.log(productID);
};

// Start Delete Os Product

const deleteOnsProduct = (productID) => {
  const arrayFromLocalStorage = getFromLocalStorage("basket");
  showSwal(
    "آیا از حذف این محصول از سید خریدتان مطمعن هستید؟!",
    "info",
    ["خیر", "بله"],
    (res) => {
      if (res) {
        const newResultForArrayLocalStorageThenDelete =
        arrayFromLocalStorage.filter((product) => product.id != productID);
        console.log(newResultForArrayLocalStorageThenDelete);
        saveInToLocalStorege("basket" , newResultForArrayLocalStorageThenDelete)
        location.reload()
      }
    }
  );
};
window.deleteOnsProduct = deleteOnsProduct;

// Finish Delete Os Product

// Start Sucssus Alarm

const wrapperSucssus = document.querySelector("#wrapper-sucssus");
const btnBuyingFainal = document.querySelector("#btn-buyingFainal");

btnBuyingFainal.addEventListener("click", () => {
  showSwal("آیا شما کد تخفیف دارید؟", "warning", ["خیر", "بله دارم"], (res) => {
    if (res) {
      swal({
        text: "کد تخفیفتان را وارد نمایید",
        content: "input",
        button: {
          text: "اوکی کن",
          closeModal: true,
        },
      }).then((result) => {
        if (result == "js20") {
          wrapperSucssus.style.top = "0";
          wrapperSucssus.style.transition = "all 0.5s ease";
          setTimeout(() => {
            wrapperSucssus.style.top = "-400px";
            wrapperSucssus.style.transition = "all 0.5s ease";
          }, 2000);
          saveInToLocalStorege("basket" , [])
          setTimeout(() => {
            location.reload()
          }, 2500);
        } else {
          showSwal(
            " کد تخفیف نامعتبر است با مهلت استفاده آن به سر رسید است",
            "error",
            "باشه",
            () => {}
          );
        }
      });
    }
  });
});

// Finish Sucssus Alarm

export {
  handleUserBasketByLocalStorage,
  deletAllProductsInUserBasket,
  addCountProducts,
};
