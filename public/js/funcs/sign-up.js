import { saveInToLocalStorege, showSwal } from "../utils/utils.js";

const signUpUser = () => {
  let nameInput = document.querySelector("#name");
  let phoneInput = document.querySelector("#phone");
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");
  let userName = document.querySelector("#user-name");

  if (
    nameInput.value.length == 0 ||
    phoneInput.value.length == 0 ||
    emailInput.value.length == 0 ||
    passwordInput.value.length == 0 ||
    userName.value.length == 0
  ) {
    showSwal("لطفا مقادیر را  به درستی وارد کنید", "warning", "اوکی", () => {});
  } else {
    showSwal("ثبت نام با موفقیت انجام شد", "success", "ممنون", () => {
      localStorage.setItem("name", nameInput.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("email", emailInput.value);
      localStorage.setItem("username", userName.value);

      location.href = "/";
    });
  }

  saveInToLocalStorege("user", { token: result.accessToken });
};

export { signUpUser };
