const wrapperLoaderNotFoundPage = document.querySelector(".wrapper-loader__notFoundPage")
const wrapperNotFound = document.querySelector("#wrapper-notFound")
const wrapperNotFoundContent = document.querySelector("#wrapper-notFound__content")

window.addEventListener("load" , () => {
    setTimeout(() => {
        wrapperLoaderNotFoundPage.style.display = "none"
    }, 800);
    setTimeout(() => {
        wrapperNotFound.classList.remove("bottom__full-custom")
        wrapperNotFound.classList.add("top-custom-full")
        wrapperNotFoundContent.classList.add("mt-custom")

    }, 850);
})