import { dataTicketUserPanel } from "../DatePanel.js";

const getLocationParam = () => {
    const refTiket = location.search.slice(6,7)

    const resultTiket = dataTicketUserPanel.filter(tiket => tiket.id == refTiket)
    console.log(resultTiket);
    
}

export { getLocationParam }