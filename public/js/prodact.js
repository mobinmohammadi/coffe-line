import { addPrudactsToUserBaskets, mainPrudacts, prodactSection } from "./funcs/prodact.js"


window.addPrudactsToUserBaskets = addPrudactsToUserBaskets

window.addEventListener("load" , () => {
    prodactSection()
    mainPrudacts()
})