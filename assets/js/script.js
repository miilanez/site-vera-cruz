// Initialize Swiper //

var swiper = new Swiper(".mySwiper", {
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