import { login } from "./funcs/login.js"
import { getToken } from "./utils/utils.js"

let btnVerifay = document.querySelector("#btn-verifay")

window.addEventListener("load" , () => {
    btnVerifay.addEventListener("click" , () => {

        login()
        console.log(getToken());
        
    })
    
})