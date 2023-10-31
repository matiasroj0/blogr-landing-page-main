const menuOpen = document.querySelector(".sidenav-btn");
const menuClose = document.querySelector(".sidenav-close-btn");
const nav = document.querySelector(".dropdown-container");

const product = document.querySelector(".product");
const dropdownProduct = document.querySelector(".dropdown-product");
const arrowProduct = document.querySelector(".arrow-product");

const company = document.querySelector(".company");
const dropdownCompany = document.querySelector(".dropdown-company");
const arrowCompany = document.querySelector(".arrow-company");

const connect = document.querySelector(".connect");
const dropdownConnect = document.querySelector(".dropdown-connect");
const arrowConnect = document.querySelector(".arrow-connect");

menuOpen.addEventListener("click", ()=> {
    menuOpen.classList.add("hidden");
    nav.style.display = "block";
    menuClose.classList.remove("hidden");
})

menuClose.addEventListener("click", ()=>{
    menuClose.classList.add("hidden");
    menuOpen.classList.remove("hidden");
    nav.style.display = "none";
})

product.addEventListener("click",()=>{
    if(dropdownProduct.style.display == "none") {
        dropdownProduct.style.display = "block";
        arrowProduct.classList.add("rotate");
    } else {
        dropdownProduct.style.display = "none";
        arrowProduct.classList.remove("rotate");
    }
})

company.addEventListener("click",()=>{
    if(dropdownCompany.style.display == "none") {
        dropdownCompany.style.display = "block";
        arrowCompany.classList.add("rotate");
    } else {
        dropdownCompany.style.display = "none";
        arrowCompany.classList.remove("rotate");
    }
})

connect.addEventListener("click",()=>{
    if(dropdownConnect.style.display == "none") {
        dropdownConnect.style.display = "block";
        arrowConnect.classList.add("rotate");
    } else {
        dropdownConnect.style.display = "none";
        arrowConnect.classList.remove("rotate");
    }
})


