import { showSwal } from "../../utils/utils.js";

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const userName = document.querySelector("#username");
const phoneNumber = document.querySelector("#phone-number");
const addreas = document.querySelector("#addreas-name");
const btnChangeDetails = document.querySelector("#btn-change__details");
// const addreas = document.querySelector("#phone-number");

const fillDetailsUser = () => {
  // console.log(firstName);
  const nameValue = localStorage.getItem("name");
  const phoneValue = localStorage.getItem("phone");
  const emailValue = localStorage.getItem("email");
  const usernameValue = localStorage.getItem("username");

  name.value = nameValue;
  email.value = emailValue;
  userName.value = usernameValue;
  phoneNumber.value = phoneValue;
};

btnChangeDetails.addEventListener("click", () => {
  showSwal(
    "آیا از تغییر مشخصات مطمعن هستید؟",
    "warning",
    ["خیر", "بله"],
    (res) => {
      if (res) {
        showSwal("تغییرات اعمال شد", "success", "ممنونم", () => {});
        location.href = "/user-panel.html"
      }
    }
  );
});

window.addEventListener("load", () => {
  fillDetailsUser();
});
