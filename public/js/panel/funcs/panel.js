import { lastProducts, dataTicketUserPanel } from "../DatePanel.js";
import { showSwal } from "../../utils/utils.js";
let wrapperTikect = document.querySelector(".wrapper-tikect");
let wrapperLastedOrder = document.querySelector(".wrapper-lasted__order");

const btnOpenMenuUser = document.querySelector("#menu-user__panel");
const wrapperModalUserPanel = document.querySelector(
  "#wrapper-modal__userPanel"
);
const activeLayer = document.querySelector(".active-layer");

const closeMenuUserPanelBtn = document.querySelector("#close-menu__user-panel");

let lastProductsOrder = () => {
  lastProducts.map((product) =>
    wrapperLastedOrder.insertAdjacentHTML(
      "beforeend",
      `
                <div
                class="flex relative bg-slate-200 rounded-md p-3 items-center flex-col sm:flex-row justify-between mt-3"
              >
                <span
                  class="absolute -right-2 bg-green-500 pt-2 pb-2 pr-3 pl-3 rounded-lg text-center font-bold text-white"
                  >${product.id}</span
                >
                <div
                  class="flex items-center flex-col sm:flex-row gap-3 text-center xs:text-right xs:flex-row"
                >
                  <img class="w-20" src="${product.img}" alt="" />
                  <span class="text-xs font-DanaDemiBold max-w-20"
                    >${product.name}</span
                  >
                </div>

                <div
                  class="flex gap-2 justify-between pb-2 flex-col sm:flex-row xs:flex-row child:gap-1 child:mt-2 xs:mt-0 child:text-center"
                >
                  <div class="flex flex-col items-center gap-2 ">
                    <span class="text-xs sm:text-sm font-MorabbaBold"
                      >وضعیت</span
                    >
                    <span
                      class="${
                        product.status == "Success"
                          ? "bg-green-500"
                          : "bg-red-400"
                      } h-full text-x sm:text-sm pt-1 pb-1 w-[90%] rounded-md text-white text-center flex items-center justify-center"
                      >${product.status == "Success" ? "موفق" : "ناموفق"}</span
                    >
                  </div>
                  <div class="flex flex-col w-20 gap-2  items-center justify-center">
                    <span class="text-xs sm:text-sm font-MorabbaBold"
                      >مبلغ</span
                    >
                    <span
                      class="text-xs  sm:text-sm bg-yellow-500 w-[90%] rounded-md text-white pt-1 pb-1"
                      >${product.price}</span
                    >
                  </div>
                  <div class="flex flex-col w-20 items-center justify-center">
                    <span class="text-xs sm:text-sm font-MorabbaBold"
                      >تعداد خرید</span
                    >
                    <span
                      class="text-xs text-center sm:text-sm bg-slate-400 w-[90%] rounded-md text-white pt-1 pb-1"
                      >${product.count}</span
                    >
                  </div>
                </div>
              </div>

        `
    )
  );
};

const openUserPanelMenu = () => {
  btnOpenMenuUser.addEventListener("click", () => {
    wrapperModalUserPanel.style.right = "0";
    wrapperModalUserPanel.style.transition = "all 0.3s ease";
    activeLayer.style.display = "block";
  });
};

const closeUserWithLayerPanelMenu = () => {
  activeLayer.addEventListener("click", () => {
    wrapperModalUserPanel.style.right = "-288px";
    wrapperModalUserPanel.style.transition = "all 0.3s ease";
    activeLayer.style.display = "none";
  });
};

const closeUserWithBtnClosePanelMenu = () => {
  closeMenuUserPanelBtn.addEventListener("click", () => {
    wrapperModalUserPanel.style.right = "-288px";
    wrapperModalUserPanel.style.transition = "all 0.3s ease";
    activeLayer.style.display = "none";
  });
};

let commentsPanelUsers = () => {
  dataTicketUserPanel.slice(0 , 3).map((ticket) => {
    // console.log(ticket)

    wrapperTikect.insertAdjacentHTML(
      "beforeend",
      `
         <div class="flex mt-3 relative flex-col xs:flex-row justify-between bg-slate-200 rounded-md p-3">
                <div class=" xs:flex items-center justify-center  pr-10 pt-4">
                  <span class="leading-[20px] inline">${ticket.title}</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 child:flex-col x:child:flex-row child:flex justify-between pt-4 child:text-center child:gap-[10px] gap-5 child:justify-center  ">
                  <div class="gap-2">
                    <span class="text-xs sm:text-sm font-MorabbaBold">وضعیت</span>
                    <span class=" ${
                      ticket.status == "1" ? "bg-green-500" : "bg-yellow-500"
                    } text-xs sm:text-sm  rounded-md flex text-white justify-center pt-4 pb-4 w-[7rem]">${
        ticket.status == "0" ? "در حال پیگیری" : "پاسخ داده شده"
      }</span>
                  </div>
                  <div class="gap-2">
                    <span class="text-xs sm:text-sm font-MorabbaBold">تاریخ ارسال</span>
                    <span class=" text-xs sm:text-sm bg-slate-400  flex items-center justify-center pt-4 pb-4 rounded-md text-white w-[6rem]">${
                      ticket.time
                    }</span>
                  </div>
                  <div onclick="handelSeeTiket(${ticket.id})" class="gap-2 flex justify-center items-center">
                    <span  class="text-xs sm:text-sm font-MorabbaBold">نمایش</span>
                    <svg class="w-7 h-7 cursor-pointer text-x sm:text-sm bg-green-500  rounded-md text-white pt-1 pb-1">
                        <use href="#eye"></use>
                    </svg>
                  </div>
                </div>
                <span class="absolute bottom-[30%] -right-2 bg-green-500 pt-2 pb-2 pr-3 pl-3 rounded-lg text-center font-bold text-white">${
                  ticket.id
                }</span>
              </div>
        `
    );
  });
};


const handelSeeTiket = (tiketID) => {
  console.log(tiketID);
  const bodyTikets = dataTicketUserPanel.filter(tiket => tiket.id == tiketID)
  console.log(bodyTikets);

  showSwal(
    bodyTikets[0].title,
    "",
    "دیدم",
    () => {}
  )
  
  
}
window.addEventListener("load", () => {
  lastProductsOrder();
  openUserPanelMenu();
  
  closeUserWithLayerPanelMenu();
  commentsPanelUsers();
  closeUserWithBtnClosePanelMenu();
});

export { lastProductsOrder , handelSeeTiket };
