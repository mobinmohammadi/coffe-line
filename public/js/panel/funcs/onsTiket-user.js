import { dataTicketUserPanel } from "../DatePanel.js";

const wrapperQustions = document.querySelector("#wrapper-qustions");
const wrapperAnswers = document.querySelector("#wrapper-answers");
const inputForSendTiket = document.querySelector("#input-for__send--tiket");
const btnForSendTiket = document.querySelector("#btn-for__send--tiket");
const wrapperLoaderTiketPanel = document.querySelector(".wrapper-loader_tiketPanel")

const getLocationParam = () => {
  const url = new URL(location.href);
  const searchParams = url.searchParams.toString();
  const tiketId = searchParams.slice(5);
  console.log(tiketId);

  const resultTiket = dataTicketUserPanel.filter(
    (tiket) => tiket.id == tiketId
  );
  tiketGenareatorToHtmlCode(resultTiket);
};

window.addEventListener("load", () => {
  getLocationParam();
});

const tiketGenareatorToHtmlCode = (resultTiket) => {
  console.log(resultTiket);

  console.log("resultTiket ==> ", resultTiket);
  resultTiket.map((tiket) => {
    wrapperQustions.innerHTML = "";
    wrapperQustions.insertAdjacentHTML(
      "beforeend",
      `
               <div class="bg-slate-100 relative font-Dana text-sm mt-5 rounded-md pr-4 mr-5 ml-5 pl-4 pt-3 pb-2">
              <div class="pb-3 b-b border-zinc-400">
                <span class="text-xs font-bold"
                  >${tiket.title}</span
                >
              </div>
              <div
                class="pt-3 font-bold text-slate-500 text-x flex items-center justify-between"
              >
                <span>${tiket.time}</span>
                <span>${tiket.hourse}</span>
              </div>
            </div>
            ${
              tiket.answers
                ? `
                <div class="bg-zinc-700 text-white text-sm mt-5 rounded-md mr-5 ml-5 pr-4 pl-4 pt-3 pb-2">
                ${
                  tiket.answers[0].imgCreator
                    ? ` <div class="font-DanaDemiBold flex gap-2 text-xs pb-4">
                      <img
                        class="w-10 h-10 rounded-full object-cover"
                        src="${tiket.answers[0].imgCreator}"
                      />
                     <div class="flex flex-col gap-1">
                      <span>${tiket.answers[0].nameCreator}</span>
                      <span class="text-x">پشتیبان</span>
                      </div>
                    </div>`
                    : `<div class="font-DanaDemiBold text-xs pb-4">
                     
                      <span class="w-2 h-2 rounded-full bg-green-500 inline-block mt-1"></span>
                      <span>${tiket.answers[0].nameCreator}</span>
                      <span>پشتیبان</span>
                    </div>`
                }
              <div class="font-Dana">
                <div class="pb-4 b-b">
                
                  <span class="text-xs font-bold"
                    >${tiket.answers[0].answerText}</span
                  >
                </div>
                <div
                  class="pt-3 font-bold text-white text-x flex items-center justify-between"
                >
                  <span>${tiket.answers[0].time}</span>
                  <span>${tiket.answers[0].hourse}</span>
                </div>
              </div>
            </div>
                
                `
                : ""
            }
        `
    );
  });
};

btnForSendTiket.addEventListener("click", (e) => {
  createdNewTikets(inputForSendTiket.value);
});

const createdNewTikets = (value) => {
  console.log(value);
  if (!value) {
    alert("لطفا مقدار پیامتان را بنویسید❌");
  } else {
    inputForSendTiket.value = "";
    wrapperQustions.insertAdjacentHTML(
      "beforeend",
      `
         <div class="bg-slate-100 relative font-Dana text-sm mt-5 rounded-md pr-4 mr-5 ml-5 pl-4 pt-3 pb-2">
                  <div class="pb-3 border-b-[2px] border-slate-200 border-solid">
                    <span class="text-xs font-bold"
                      >${value}</span
                    >
                  </div>
                  <div
                    class="pt-3 font-bold text-slate-500 text-x flex items-center justify-between"
                  >
                    <span></span>
                    <span></span>
                  </div>
                </div>
            `
    );
    setTimeout(() => {
      wrapperQustions.insertAdjacentHTML(
        "beforeend",
        `
            <div class="bg-zinc-700 flex justify-between items-center wrapper-loader_tiketPanel text-white text-sm mt-5 rounded-md mr-5 ml-5 pr-4 pl-4 pt-3 pb-2">
            <span class="font-Dana">در حال بررسی</span>
            <span class="loader-in__tiket--panel "></span>
            </div>
            `
      );
      console.log("شد");
    }, 1000);
    setTimeout(() => {
        // wrapperLoaderTiketPanel.classList += "hidden"
        console.log(wrapperLoaderTiketPanel);
        
    }, 3000);
  }
};

export { tiketGenareatorToHtmlCode };
