import { commentOnsPage , onsProducts  } from "./funcs/onsPage.js";
import { showSwal } from "./utils/utils.js";


const addComments = document.querySelector("#add-comments")
const inputUserComment = document.querySelector("#comment-user__add")

addComments.addEventListener("click" , () => {
    if(inputUserComment.value){
        showSwal("کامنت شما بعد از تایید ادمین در سایت قرار میگیرد" ,"success" , "اوکیه" , () => {
            setTimeout(() => {
                window.location.reload()
                
                inputUserComment.value = ""
            }, 1000);
        })
    }
    else{
        showSwal("کامنت نمیتواند عبارت خالی باشد" ,"warning" , "تصحیح" , () => {
            () => {}
        })
    }
})

window.addEventListener("load" , () => {
    commentOnsPage()
    onsProducts()
})