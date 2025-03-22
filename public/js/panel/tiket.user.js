import { changeTypeTiket, getAllTikets } from "./funcs/tiket-user.js"

window.addEventListener("load" , () => {
    getAllTikets()
    changeTypeTiket()
})