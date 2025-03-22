import { menus } from "../Data.js";

const wrapperMenus = document.querySelector("#wrapper-menus")



const showMenuAndSubmenu = () => {

    
    menus.map(item => (
        wrapperMenus.insertAdjacentHTML("beforeend" , `
            ${item.submenus ? 
               `<a href=${item.href} class="relative cursor-pointer group transition-all border-yellow-300 hover:text-orange-300">
                                ${item.title}
                                <ul class="absolute z-40 shadow-custom bor-t hidden opacity-0 group-hover:opacity-100 bg-white dark:bg-zinc-700 dark:child:text-white child:text-zinc-700 dark:child-hover:text-green-300  border-t-8 text-base tracking-normal border-t-orange-300 group-hover:flex pt-2 pr-4 pb-2 space-y-4 child:transition-colors  border-yellow-400 rounded-2xl flex-col w-[204px] child:font-Dana ">
                                ${item.submenus.map(submenus => (
                                    `<li>${submenus.title}</li>`
                                ))}   
                                </ul>
                            </li>`
            : `<a class="cursor-pointer">${item.title}</li>`}`)
    ))
   
}



export {showMenuAndSubmenu }