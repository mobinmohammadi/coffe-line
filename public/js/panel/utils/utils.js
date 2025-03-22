let wrapperTikect = document.querySelector(".wrapper-tikect");
let wrapperLastedOrder = document.querySelector(".wrapper-lasted__order");
const nameUser = document.querySelector("#name-user")
const btnOpenMenuUser = document.querySelector("#menu-user__panel");
const wrapperModalUserPanel = document.querySelector(
    "#wrapper-modal__userPanel"
);
const activeLayer = document.querySelector(".active-layer");

const closeMenuUserPanelBtn = document.querySelector("#close-menu__user-panel");

const openUserPanelMenu = () => {
    btnOpenMenuUser.addEventListener("click", () => {
        wrapperModalUserPanel.style.right = "0";
        wrapperModalUserPanel.style.transition = "all 0.3s ease";
        activeLayer.style.display = "block";
    });
};

const nameMenuUserHandler = () => {
    const nameUserInDataBase = localStorage.getItem("name")
    
    nameUser.innerHTML = nameUserInDataBase
}

const closeUserWithLayerPanelMenu = () => {
    activeLayer.addEventListener("click", () => {
        wrapperModalUserPanel.style.right = "-288px";
        wrapperModalUserPanel.style.transition = "all 0.3s ease";
        activeLayer.style.display = "none";
    });
};

const closeUserWithBtnClosePanelMenu = () => {
    closeMenuUserPanelBtn.addEventListener("click", () => {
        wrapperModalUserPanel.style.right = "-288px";
        wrapperModalUserPanel.style.transition = "all 0.3s ease";
        activeLayer.style.display = "none";
    });
};

window.addEventListener("load", () => {
  openUserPanelMenu();
  nameMenuUserHandler()
  closeUserWithLayerPanelMenu();
  closeUserWithBtnClosePanelMenu();
});
