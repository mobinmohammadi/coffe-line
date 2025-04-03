import { nameHomePages } from "../js/utils/index.js";
import { getMe } from "./utils/me.js";
import { showSwal } from "./utils/utils.js";

window.addEventListener("load", () => {
  getMe();
});

let menuOpenBtn = document.querySelector("#menu-click ");
let layer = document.querySelector("#layer");
let progresAdsMobile = document.querySelector("#progres-ads__mobile");
let progresAdsPc = document.querySelector("#progres-ads__Pc");

let submenuSvg = document.querySelector("#submenu-sub svg")
let submenuSub = document.querySelector("#openSubmenu");

let menuMobile = document.querySelector("#menu-mobile");
let wrapperLoader = document.querySelector(".loader");

let wrapperAdsMobile = document.querySelector(".wrapper-ads__mobile");
let wrapperAdsPc = document.querySelector("#wrapper-ads__pc");
let submenuSubOpen = document.querySelector(".submenu-sub__open");
let submenuSubOpenActive = document.querySelector(".submenu-sub__open-active");

let saveIcon = document.querySelectorAll("#save-icon");
let saveNotIcon = document.querySelectorAll("#save-not-icon");
let showResultSave = document.querySelector(".show-result__save");

let openUserBasketBtn = document.querySelector(".open-user__baskets");
let boxBasket = document.querySelector("#box-basket");
let layerBasket = document.querySelector("#layer-basket");

let wrapperBoxModalUser = document.querySelector("#box-modal__user");
let openUsermodal = document.querySelector("#open-user__modal");
let closeAdsBtn = document.querySelector("#close-ads__btn");
let closeAdsBtnPc = document.querySelector("#close-ads__btnPc");

let closeMenuMobile = document.querySelector("#close-menu__mobile");
let closeUserBasket = document.querySelector("#close-user__baskets");

menuOpenBtn.addEventListener("click", () => {
  layer.style.transition = "all 0.5 ease-in-out";
  layer.style.position = "fixed";
  menuMobile.style.right = "0";
  menuMobile.style.transition = "all 0.5s ease";
});

layer.addEventListener("click", () => {
  layer.style.transition = "all 0.5s ease-in-out";
  layer.style.position = "inherit";
  menuMobile.style.right = "-320px";
  menuMobile.style.transition = "all 0.5s ease";
  boxBasket.style.left = "-20rem";
  wrapperBoxModalUser.classList.remove("active-modal__user");
  openUsermodal.classList.remove("z-index__custom");
  wrapperBoxModalUser.classList.add("hidden");
  wrapperAdsMobile.style.position = "none";
  wrapperAdsMobile.style.marginTop = "-200px";
  wrapperAdsMobile.style.transition = "all 0.5s ease";
  wrapperAdsPc.style.position = "none";
  wrapperAdsPc.style.marginTop = "-200px";
  wrapperAdsPc.style.transition = "all 0.5s ease";

});

closeAdsBtn?.addEventListener("click", () => {
    wrapperAdsMobile.style.position = "none";
    wrapperAdsMobile.style.marginTop = "-200px";
    wrapperAdsMobile.style.position = "none";

  layer.style.position = "inhirit";
});

closeAdsBtnPc?.addEventListener("click", () => {
    
    wrapperAdsPc.style.transition = "all 0.5s ease"; 
    wrapperAdsPc.style.marginRight = "-100%";
    wrapperAdsPc.style.transition = "all 0.5s ease";
  layer.style.position = "inhirit";
});

submenuSub?.addEventListener("click", () => {
  submenuSvg.classList.toggle("rotate-svg");
  submenuSubOpen.classList.toggle("submenu-sub__open-active");
  submenuSub.style.transition = "all 0.5s ease";
  submenuSubOpen.style.transition = "all 0.5s ease";
});

closeMenuMobile.addEventListener("click", () => {
  console.log("ss");
  
  menuMobile.style.right = "-320px";
  menuMobile.style.transition = "all 0.5s ease";
  layer.style.position = "inherit";
  boxBasket.style.left = "-20rem";
});

closeUserBasket.addEventListener("click", () => {
  
  boxBasket.style.left = "-20rem";
  boxBasket.style.transition = "all 0.5s ease";
  layer.style.transition = "all 0.5s ease";
  layer.style.position = "inherit";
});



let saveIcons = () => {
  saveIcon.classList.remove("hidden");
  saveNotIcon.classList.add("hidden");
  showResultSave.style.right = "18px";
  showResultSave.textContent = "عملیات ذخیره لغو شد";
  setTimeout(() => {
    showResultSave.style.right = "30px";
  }, 2000);

  setTimeout(() => {
    showResultSave.style.right = "";
    showResultSave.style.transition = "all 0.3s ease";
  }, 2500);
};

openUserBasketBtn.addEventListener("click", () => {
  
  boxBasket.style.left = "0rem";
  layer.style.position = "fixed";
  boxBasket.style.transition = "all 0.5s ease";
  layer.style.transition = "all 0.5s ease-in-out";
});

const homePageAdsMobileHandler = () => {
  wrapperAdsMobile.style.position = "fixed";
  wrapperAdsMobile.style.marginTop = "200px";
  wrapperAdsMobile.style.transition = "all 0.5s ease";


  wrapperAdsMobile.classList += " active-ads";
};

const homePageAdsPcHandler = () => {
    wrapperAdsPc.style.position = "fixed";
    wrapperAdsPc.style.marginRight = "0";
    wrapperAdsPc.style.transition = "all 0.5s ease";
    wrapperAdsPc.classList += " active-ads";
  
}

const signOutHandler = (e) => {
  const signOutBtn = document.querySelector(".sign-out");
  signOutBtn.addEventListener("click", () => {
    showSwal(
      "آیا میخواهید از حساب کاربری خود خارج شوید؟!",
      "warning",
      ["خیر", "بله"],
      (res) => {
        if (res) {
          showSwal(
            "با موفقیت از حساب خود خارج شدید",
            "success",
            "ممنونم",
            () => {
              localStorage.removeItem("name");
              location.reload();
            }
          );
        }
      }
    );
  });
};

window.addEventListener("load", () => {
  nameHomePages();
  signOutHandler();

  setTimeout(() => {
    homePageAdsMobileHandler();
    homePageAdsPcHandler()

    progresAdsMobile.style.width = "100%";
    progresAdsMobile.style.transition = "all 4s ease";
    progresAdsPc.style.width = "100%";
    progresAdsPc.style.transition = "all 4s ease";
  }, 10);
  setTimeout(() => {
    wrapperAdsMobile.style.position = "none";
    wrapperAdsMobile.style.marginTop = "-200px";
    wrapperAdsMobile.style.transition = "all 0.5s ease";
    wrapperAdsPc.style.position = "none";
    wrapperAdsPc.style.marginRight = "-100%";
    wrapperAdsPc.style.transition = "all 0.5s ease";
    layer.style.position = "inherit";
  }, 4000);
});

// wrapperLoader.addEventListener("click" , () => {

// })

const activePanel = () => {
  openUsermodal.addEventListener("click", () => {
    wrapperBoxModalUser.classList.remove("hidden");
    wrapperBoxModalUser.classList.remove("opacity-0");
    wrapperBoxModalUser.classList.add("active-modal__user");
    wrapperBoxModalUser.style.transition = "all 10s ease-in-out";
    openUsermodal.classList.add("z-index__custom");
    layer.style.transition = "all .3s ease-in-out";
    layer.style.position = "fixed"
  });
};

export { activePanel };
