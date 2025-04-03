import { addPrudactsToUserBaskets , prodactSection, mainPrudacts } from "./funcs/prodact.js"


window.addPrudactsToUserBaskets = addPrudactsToUserBaskets

window.addEventListener("load" , () => {
    mainPrudacts()
    prodactSection()
})