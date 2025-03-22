import { activePanel } from "../app.js"

let me = localStorage.getItem("name")
let wrapperTextSignUp = document.querySelector("#wrapper-link__panel")
let openUsermodal = document.querySelector("#open-user__modal")
let nameUser = document.querySelector("#name-user")
let signUpActive = document.querySelector(".sign-up__active")

openUsermodal.addEventListener("click" ,() => {
    activePanel()
})

let getMe = () => {
    
    if (me == null){
        openUsermodal.innerHTML = ""
        openUsermodal.innerHTML = `<a href="../../sign-up.html"><svg class="w-5 h-5 rotate-180">
        <use xlink:href="#log-in__icon">s</use>
    </svg></a>`
        

    }

    else{
        nameUser.innerHTML = me
        signUpActive.classList = "hidden"
    }
    

}





export {getMe }