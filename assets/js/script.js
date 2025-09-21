$(document).ready(function () {
    $(".buttonSocials").click(function () {
        $("#socialsWrapper,#openModal").toggleClass("active");
    })
    $("#openModal,#closeModal").click(function () {
        $("#modalWrapper").toggleClass("active");
    })
})


document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 40) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});


