// import { getToken } from "../utils/utils";

import { getUrlParam, saveInToLocalStorege } from "../utils/utils.js";
import { allProducts } from "../Data.js";

const containerMooreProducts = document.querySelector("#container-Moore__products")
const wrapperProductOns = document.querySelector(".main-prudact");

let locationUrl = getUrlParam("name");


const onsProducts = () => {
  let mainProducts = allProducts.find((product) => product.id == locationUrl);
  console.log(mainProducts);

  wrapperProductOns.insertAdjacentHTML(
    "beforeend",
    `
    <div class="container sm:w-full md:w-[80%]">
                    <div class="flex flex-col sm:flex-row gap-4 items-center">
                            <div class="">
                                <img class="w-[14rem]  sm:w-30  h-[13rem] sm:h-30" src=${
                                  mainProducts.img
                                } alt="">
                            </div>
                            <div class="w-full">
                                <div class="flex flex-col gap-3 justify-center items-center sm:items-start md:justify-start">
                                    <div class="flex gap-3 flex-col items-center">
                                        <div class="flex flex-col gap-2 items-center">
                                        <span class="text-base sm:text-xl max-w-14rem text-center font-bold dark:text-white text-sky-700-custom">نام : ${
                                          mainProducts.title
                                        }</span>
                                        
                                        </div>
                                        <div>
                                        <div class="text-[16px] dark:text-white sm:text-xl font-DanaDemiBold">
                                            <span class="">${mainProducts.price - ((mainProducts.price * mainProducts.offer) / 100)}</span>
                                            <span>تومان</span>
                                        </div>
                                        ${
                                          mainProducts.offer
                                            ? `
                                          <div class="text-[12px] sm:text-lg line-through-rotate text-red-600">
                                             <span class="text-xs sm:text-xs pt-1 pr-2 pb-1 pl-2 text-black dark:text-white flex items-center justify-center font-DanaDemiBold bg-orange-700 rounded-md ">${mainProducts.price} تومان</span>
                                         </div>`
                                            : ""
                                        }
                                        </div>
                                    </div>
                                    <div class="flex gap-3 text-xs xs:text-xl ">
                                        <div class="x:text-x sm:text-sm ">
                                            <span class="dark:text-sky-700-custom">فروشنده :</span>
                                            <span class="text-red-600">${
                                              mainProducts.seller
                                            }</span>
                                        </div>
                                        <div class="x:text-x sm:text-sm ">
                                            <span class="text-sky-700-custom">وضعیت کالا: </span>
                                            <span class=" text-green-600">${
                                              mainProducts.status == "Available"
                                                ? "موجود"
                                                : "اتمام موجودی"
                                            }</span>
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                                <div class="mt-5 pb-5 flex justify-center items-center sm:items-center sm:justify-start">
                                    <ul class="dark:text-white flex gap-2 flex-col  text-start">
                                        <li>تاریخ تولید :  1404/1/1</li>
                                        <li>تاریخ انقضا : تا 2 سال پس از تولید</li>
                                        <li> وزن : 300 گرمی</li>
                                        <li>تحویل : 3-6 روز کاری</li>  
                                    </ul>
                                </div>
                                <hr>
                                <div class="mt-5 flex-col sm:flex-row sm:w-full gap-2 flex justify-evenly sm:justify-start   lg:gap-3 items-center ">
                                <div class="">
                                <input class="w-16 h-[2rem] pl-1 rounded-md bg-slate-400 pr-5" type="number" name="" id="">
                                </div>
                                <div  onclick="addToUserBasket(${mainProducts.id})" class="btn-addStyle p-2 cursor-pointer w-full sm:w-[50%] text-white flex items-center justify-center rounded-md hover:opacity-80 transition-all">
                                ${
                                  mainProducts.status
                                    ? `
                                  <button id="" class=" add-to__btn btn-addStyle text-sm bg-sky-700-custom dark:text-white text-zinc-700">افزودن به سبد خرید</button>`
                                    : "<span>اتمام موجودی</span>"
                                }    
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `
  );
};

const addToUserBasket = (productID) => {
 const findetProductsInOnsPageInfos =  allProducts.filter(products => (products.id == productID))
  console.log(findetProductsInOnsPageInfos);

// 
  saveInToLocalStorege("basket" , [findetProductsInOnsPageInfos])
  
}

const mooreProductsHandlers = () => {
  containerMooreProducts.innerHTML = ""
  
  allProducts.slice(0,4).map(product => (



    // containerMooreProducts.innerHTML = ""
        containerMooreProducts.insertAdjacentHTML("beforeend" , 
          `
          <div class="pr-2 pl-2 rounded-md bg-slate-200 flex items-center justify-between">
                                             <div class="flex items-center ">
                                                 <div class="flex items-center justify-center ">
                                                     <img class=" w-14 h-14" src="${product.img}" alt="">
                                                 </div>
                                                 <span class="text-x x:text-xs md:text-sm font-MorabbaBold">${product.title}{</span>
                                             </div>
                                             <div class="flex gap-[4px] items-center text-sky-500">
                                                 <a class="flex items-center gap-1 text-xs" href="#">
                                                 <svg class="text-blue-800 w-4 h-4">
                                                     <use xlink:href="#arrow-left-circle"></use>
                                                 </svg>
                                             </a>
                                             </div>
                                         </div>
          `
        )
      ))
  }


const commentOnsPage = () => {
  console.log("locationUrl", locationUrl);

  let mainComments = allProducts.find((comment) => comment.id == locationUrl);

  const wrapperComments = document.querySelector(".wrapper-comments");
  if (mainComments.comment.length) {
    mainComments.comment.map((items) => {
      wrapperComments.insertAdjacentHTML(
        "beforeend",
        `
                  <div class="flex pb-5 flex-col bg-slate-400 mt-4 p-5 rounded-md">
                            <div class="flex justify-between pb-5">
                                <div class="flex gap-3 items-center">
                                    <span class="text-x xs:text-[2rem] sm:text-sm font-DanaDemiBold">${
                                      items.creator
                                    }</span>
                                    <span class="b-l"></span>
                                    <span class="text-x sm:text-sm text-red-500">${
                                      items.role == "USER"
                                        ? "خریدار محصول"
                                        : "ادمین"
                                    }</span>
            
                                </div>
                               <div class="flex gap-2 items-center justify-center">
                               <span class="text-x font-DanaMedium"> 1403/1/21</span>
                               <a href="#comment-user__add" class="bg-green-600  cursor-pointer w-7 h-7 flex items-center justify-center rounded-full">
                                   <svg class="w-5 h-5">
                                       <use xlink:href="#arrow-uturn-left"></use>
                                   </svg>
                               </a>
                               </div>
                            </div>
                            <hr>

                                <div class="">
                                <div class="pt-5">
                                    <span class="leading-6 text-xs">${
                                      items.body
                                    }</span>
                                </div>
                             ${
                               items.answers
                                 ? `
                                <div class="flex pb-5 flex-col bg-slate-600 mt-4 p-5 rounded-md">
                                    <div class="flex justify-between pb-5">
                                        <div class="flex gap-3 items-center">
                                            <span class="text-x xs:text-[2rem] sm:text-sm font-DanaDemiBold">${
                                              items.answers.creator
                                            }</span>
                                            <span class="b-l"></span>
                                            <span class="text-x sm:text-sm text-red-500">${
                                              items.answers.role == "USER"
                                                ? "خریدار محصول "
                                                : "ادمین"
                                            }</span>
                    
                                        </div>
                                       <div class="flex gap-2 items-center justify-center">
                                       <span class="text-x font-DanaMedium"> 1403/1/21</span>
                                       <a href="#comment-user__add" class="bg-green-600  cursor-pointer w-7 h-7 flex items-center justify-center rounded-full">
                                           <svg class="w-5 h-5">
                                               <use xlink:href="#arrow-uturn-left"></use>
                                           </svg>
                                       </a>
                                       </div>
                                    </div>
                                    <hr>
                                    <div class="">
                                        ${`<div class="pt-5">
                                            <span class="leading-6 text-xs">${items.answers.body}</span>
                                        </div>`}
                                       
                                    </div>
                                    </div>
                                    </div>
                                    `
                                 : ``
                             }
                        </div>
                `
      );
    });
  } else
    wrapperComments.insertAdjacentHTML(
      "beforeend",
      `
           <div class="p-5 rounded-lg text-white font-MorabbaBold mt-3 text-xs sm:text-sm text-center bg-red-500">فاقد کامنت</div>
    `
    );
};

window.addToUserBasket = addToUserBasket

export { commentOnsPage, onsProducts , mooreProductsHandlers };
