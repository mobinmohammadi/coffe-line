import { allPrudactsOrders } from "../DatePanel.js"

const lengthAddCountOrders = document.querySelector(".length-add__count-orders")


const handelCountLengthOrdersUsers = () => {
    lengthAddCountOrders.innerHTML = allPrudactsOrders.length
}


const wrapperAllOreders = document.querySelector(".wrapper-all__orders")
const getAllPrudactsOrdersUSers = () => {
    allPrudactsOrders.forEach(orders => (
        wrapperAllOreders.insertAdjacentHTML("beforeend", `
            
                <div
                class="flex relative bg-slate-200 rounded-md p-3 items-center flex-col sm:flex-row justify-between mt-3"
              >
                <span
                  class="absolute -right-2 bg-green-500 pt-2 pb-2 pr-3 pl-3 rounded-lg text-center font-bold text-white"
                  >${orders.id}</span
                >
                <div
                  class="flex items-center flex-col sm:flex-row gap-3 text-center xs:text-right xs:flex-row"
                >
                  <img class="w-20" src="${orders.img}" alt="" />
                  <span class="text-xs font-DanaDemiBold max-w-20"
                    >${orders.name}</span
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
                      class="${orders.status == "Success"
                ? "bg-green-500"
                : "bg-red-400"
            } h-full text-x sm:text-sm pt-1 pb-1 w-[90%] rounded-md text-white text-center flex items-center justify-center"
                      >${orders.status == "Success" ? "موفق" : "ناموفق"}</span
                    >
                  </div>
                  <div class="flex flex-col w-20 gap-2  items-center justify-center">
                    <span class="text-xs sm:text-sm font-MorabbaBold"
                      >مبلغ</span
                    >
                    <span
                      class="text-xs  sm:text-sm bg-yellow-500 w-[90%] rounded-md text-white pt-1 pb-1"
                      >${orders.price}</span
                    >
                  </div>
                  <div class="flex flex-col w-20 items-center justify-center">
                    <span class="text-xs sm:text-sm font-MorabbaBold"
                      >تعداد خرید</span
                    >
                    <span
                      class="text-xs text-center sm:text-sm bg-slate-400 w-[90%] rounded-md text-white pt-1 pb-1"
                      >${orders.count}</span
                    >
                  </div>
                </div>
              </div>

        
            `)

    ))

}


export { getAllPrudactsOrdersUSers , handelCountLengthOrdersUsers }