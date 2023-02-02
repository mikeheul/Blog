window.addEventListener("DOMContentLoaded", () =>{
    
    const burger = document.querySelector(".burger");
    const menu_responsive = document.querySelector(".menu-responsive");
    const filters = document.querySelector(".filters");
    const articles = document.querySelectorAll(".blog-article");

    const nbAll = articles.length;
    const nbLifestyle = document.querySelectorAll(".blog-article .lifestyle").length;
    const nbNature = document.querySelectorAll(".blog-article .nature").length;
    const nbFood = document.querySelectorAll(".blog-article .food").length;
    const nbPhotography = document.querySelectorAll(".blog-article .photography").length;

    const btnAll = filters.querySelector(".all");
    const btnLifestyle = filters.querySelector(".lifestyle");
    const btnNature = filters.querySelector(".nature");
    const btnFood = filters.querySelector(".food");
    const btnPhotography = filters.querySelector(".photography");
    
    btnAll.innerHTML += " (" + nbAll + ")"
    btnLifestyle.innerHTML += " (" + nbLifestyle + ")"
    btnNature.innerHTML += " (" + nbNature + ")"
    btnFood.innerHTML += " (" + nbFood + ")"
    btnPhotography.innerHTML += " (" + nbPhotography + ")"

    burger.addEventListener("click", (e) => {
        e.preventDefault();
        if(menu_responsive.classList.contains("visible")) {
            burger.querySelector("a i").classList.add("fa-bars")
            burger.querySelector("a i").classList.remove("fa-close")
            menu_responsive.classList.remove("visible");
        } else {
            burger.querySelector("a i").classList.remove("fa-bars")
            burger.querySelector("a i").classList.add("fa-close")
            menu_responsive.classList.add("visible");
        }
    })

    filters.addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.classList.contains("filter-button")) {
            filters.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const filterValue = e.target.getAttribute("data-filter");
            articles.forEach((item) =>{
                if(item.classList.contains(filterValue) || filterValue === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    })

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        const navbar = document.querySelector("nav");
        const logo = document.querySelector(".logo");

        let sticky = header.offsetHeight;

        if (window.pageYOffset >= sticky - 600) {
            navbar.classList.add("sticky");
            logo.style.color = "black";
        } else {
            navbar.classList.remove("sticky");
            logo.style.color = "white";
        }
    })
})