// Swiper Slider Main //

var swiperMain = new Swiper(".mainSlider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Initialize Swiper //

var swiperElenco = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Sessão de Notícias - Modal //

const noticiaModals = document.querySelectorAll(".noticia-modal");
const leiaMaisBotaos = document.querySelectorAll(".botao-leia-mais");
const modalCLoseBotaos = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    noticiaModals[modalClick].classList.add("active");
}

leiaMaisBotaos.forEach((leiaMaisBotao, i) => {
    leiaMaisBotao.addEventListener("click", () => {
        modal(i);
    });
})

modalCLoseBotaos.forEach((modalCLoseBotao) => {
    modalCLoseBotao.addEventListener("click", () => {
        noticiaModals.forEach((modalView) => {
            modalView.classList.remove("active");
        })
    })
})

// menu hamburger style

let menuBtn = document.querySelectorAll(".nav-menu-button");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}

// Navbar responsiva

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(".nav-menu-button");
        this.navList = document.querySelector(".nav-links");
        this.navLinks = document.querySelectorAll(".nav-links li");
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();