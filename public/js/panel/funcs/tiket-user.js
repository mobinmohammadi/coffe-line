import { filtredArray } from "../../utils/utils.js";
import { dataTicketUserPanel } from "../DatePanel.js";

let data = dataTicketUserPanel
const wrapperAllTiket = document.querySelector(".wrapper-allTiket");
const selectorTypeTiketInput = document.querySelector(".selector-typeTiket-input")
const selectorTypeTiket = document.querySelectorAll(".selector-typeTiket")

const getAllTikets = () => {
  dataTicketUserPanel.map((tik) =>
    // console.log(tik)

    wrapperAllTiket.insertAdjacentHTML(
      "beforeend",
      `
            <a href="./onstiket-user.html?name=${tik.id}" class="bg-white flex mt-3 justify-between rounded-md p-6 tiketBox">
          <div class="flex justify-between flex-col">
              <span class="text-xs">${tik.title}</span>
              <span class="text-xs">پشتیبانی</span>
          </div>
          <div class="flex gap-3 tiketTime">
              <div class="text-xs">
                  <span>${tik.time}</span>
                  <span>12:37</span>
              </div>
              <svg class="w-5 h-5 text-green-500">
                  <use xlink:href="#check-circle"></use>
              </svg>
          </div>
   </a>
            `
    )
  );
};


const changeTypeTiket = () => {
  selectorTypeTiket.forEach(items => {
    items.addEventListener("click" , () => {  
      let type = items.dataset.key
      selectorTypeTiketInput.innerHTML = items.innerHTML

      const filtred = filtredArray(data ,type )
      console.log(filtred);
      
    })
  })
}
export { getAllTikets  , changeTypeTiket }; 
