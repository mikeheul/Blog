let dataArticles = {
    1: {
        "category": "photography",
        "img": "blog1",
        "title": "China Trip",
        "user": "micka",
        "date": "January 1st, 2023",
        "likes": 123,
        "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officiis recusandae adipisci, esse ad quisquam quis enim architecto rem expedita ducimus commodi dolorem sed consequuntur cumque molestias minima vel animi",
    },
    
    2: {
        "category": "food",
        "img": "blog2",
        "title": "Asian Food",
        "user": "quentin",
        "date": "February 2nd, 2023",
        "likes": 850,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    
    3: {
        "category": "nature",
        "img": "blog3",
        "title": "Discover San Francisco",
        "user": "micka",
        "date": "February 3rd, 2023",
        "likes": 511,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    
    4: {
        "category": "lifestyle",
        "img": "blog4",
        "title": "Sports !",
        "user": "quentin",
        "date": "February 2nd, 2023",
        "likes": 151,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    
    5: {
        "category": "nature",
        "img": "blog5",
        "title": "Winter, Castles and so on",
        "user": "micka",
        "date": "February 12nd, 2023",
        "likes": 88,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    
    6: {
        "category": "food",
        "img": "blog6",
        "title": "Sashimi time",
        "user": "quentin",
        "date": "February 25th, 2023",
        "likes": 189,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    
    7: {
        "category": "photography",
        "img": "blog7",
        "title": "Architectural Photography Tips",
        "user": "micka",
        "date": "March 2nd, 2023",
        "likes": 200,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    
    8: {
        "category": "nature",
        "img": "blog8",
        "title": "Forest lights",
        "user": "quentin",
        "date": "March 24th, 2023",
        "likes": 231,
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dotempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam",
    },

    9: {
        "category": "food",
        "img": "blog9",
        "title": "Food, food, food",
        "user": "quentin",
        "date": "March 26th, 2023",
        "likes": 745,
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
                "<span><i class='fa-regular fa-user'></i>&nbsp;&nbsp;By " + dataArticles[article].user + "</span>" +
                "<span><i class='fa-regular fa-calendar'></i>&nbsp;&nbsp;" + dataArticles[article].date + "</span>" +
                "<span><i class='fa-regular fa-heart'></i>&nbsp;&nbsp;" + dataArticles[article].likes + "</span>" +
            "</p>" +
        "</div>" +
        "<div class='category " + dataArticles[article].category + "'>" +
            "<span>" + dataArticles[article].category + "</span>" +
        "</div>" +
    "</div>" +
    "<div class='blog-text'>" +
        "<p class='text-content'>" +
            dataArticles[article].text + 
        "</p>" +
        "<p class='read'>" +
            "<a href=''>Read More <i class='fa-solid fa-arrow-right'></i></a>" +
        "</p>" +
    "</div>"

    blogs.appendChild(blog_article)
}

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

    const play = document.querySelector(".play")
    const video = document.querySelector("video")

    play.addEventListener("click", () => {
        if(video.paused) {
            video.play()
            // video.muted = !video.muted
            play.querySelector("p").innerHTML = "<i class='fa-solid fa-pause'></i>"
        } else {
            video.pause()
            play.querySelector("p").innerHTML = "<i class='fa-solid fa-play'></i>"
        }
    })
})