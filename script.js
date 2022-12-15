let menu = document.getElementById("mobileMenu");

let mobileBtn = document.getElementById("mobileBtn");
let hmbg = document.getElementById("hmbgBtn");


hmbg.addEventListener("click", () =>{
    if (menu.classList.contains("hidden")) {
        menu.classList.add("activated");
        menu.classList.remove("hidden");
        console.log("kek");
    }
})

mobileBtn.addEventListener("click", ()=>{
    if (menu.classList.contains("activated")){
        menu.classList.remove("activated");
        menu.classList.add("hidden");
        console.log("lel");
    }
})