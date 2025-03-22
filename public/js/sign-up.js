import { signUpUser } from "./funcs/sign-up.js";

let signUpBtn = document.querySelector("#sign-up__btn")

window.addEventListener("load" , () => {
    signUpBtn.addEventListener("click" , (e) => {
        e.preventDefault()
        signUpUser()
        
    })
})