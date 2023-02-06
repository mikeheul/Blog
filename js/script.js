let dataArticles = {
    1: {
        "category": "photography",
        "img": "blog1",
        "title": "Mon test",
        "user": "quentin",
        "date": "February 2nd, 2023",
        "likes": 111,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
}

const blogs = document.querySelector(".blog .row")

for(article in dataArticles) {
    let blog_article = document.createElement("div")
    blog_article.classList.add("blog-article")
    blog_article.classList.add("col-4")
    blog_article.classList.add(dataArticles[article].category)
    blog_article.innerHTML = 
        "<div class='blog-img'>" + 
        "<img src='img/" + dataArticles[article].img + ".jpg' alt='" + dataArticles[article].img + "'>" +
        "<div class='overlay-img'></div>" +
        "<div class='title'>" +
            "<h3>" + dataArticles[article].title + "</h3>" +
            "<p>" +
                "<span><i class='fa-regular fa-user'></i> By " + dataArticles[article].user + "</span>" +
                "<span><i class='fa-regular fa-calendar'></i> " + dataArticles[article].date + "</span>" +
                "<span><i class='fa-regular fa-heart'></i> " + dataArticles[article].likes + "</span>" +
            "</p>" +
        "</div>" +
        "<div class='category " + dataArticles[article].category + "'>" +
            "<span>" + dataArticles[article].category + "</span>" +
        "</div>" +
    "</div>" +
    "<div class='blog-text'>" +
        "<p class='text-content'>" +
            dataArticles[article].text
        "</p>" +
        "<p class='read'>" +
            "<a href=''>Read More <i class='fa-solid fa-arrow-right'></i></a>" +
        "</p>" +
    "</div>"

    blogs.appendChild(blog_article)
}

/* <div class="blog-article col-4 photography">
    <div class="blog-img">
        <img src="img/blog1.jpg" alt="blog1">
        <div class="overlay-img"></div>
        <div class="title">
            <h3>China Trip</h3>
            <p>
                <span><i class="fa-regular fa-user"></i> By micka </span>
                <span><i class="fa-regular fa-calendar"></i> January 1st, 2023</span>
                <span><i class="fa-regular fa-heart"></i> 123</span>
            </p>
        </div>
        <div class="category photography">
            <span>Photography</span>
        </div>
    </div>
    <div class="blog-text">
        <p class="text-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <p class="read">
            <a href="">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </p>
    </div>
</div> */



window.addEventListener("DOMContentLoaded", () => {

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
        if (menu_responsive.classList.contains("visible")) {
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
        if (e.target.classList.contains("filter-button")) {
            filters.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const filterValue = e.target.getAttribute("data-filter");
            articles.forEach((item) => {
                if (item.classList.contains(filterValue) || filterValue === 'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else {
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