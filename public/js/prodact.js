import { addPrudactsToUserBaskets, mainPrudacts } from "./funcs/prodact.js"


window.addPrudactsToUserBaskets = addPrudactsToUserBaskets

window.addEventListener("load" , () => {
    mainPrudacts()
})