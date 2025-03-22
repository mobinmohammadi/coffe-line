    const showSwal = (title, icon, buttons, callback , input) => {
        swal({
        title,
        icon,
        buttons,
        input,
        }).then((result) => callback(result));
    };

    export { showSwal }


const saveInToLocalStorege = (key, value) =>{
    return localStorage.setItem(key , JSON.stringify(value))
}
const getUrlParam = (key) => {
    const urlParams = new URLSearchParams(location.search)
    return urlParams.get(key)

}

const filtredArray = (array , typeFitred) => {

    let outPutArray = []
    switch(typeFitred){
        case "defult" : {
            outPutArray = array
            break
        }

        case "with-answers" : {
            outPutArray = array.filter(tiket => tiket.whiteAnswers == "1")
            break
        }

        case "answered" : {
            outPutArray = array.filter(tiket => tiket.whiteAnswers == "0")
            break
        }
        case "newsed" : {
            outPutArray = array.slice(0,4)
            break
        }
        case "olded" : {
            outPutArray = array.slice(5,7)
            break
        }
        
        default : {
            outPutArray = array
        }

        return outPutArray

        
    }
}


export { saveInToLocalStorege , getUrlParam , filtredArray}