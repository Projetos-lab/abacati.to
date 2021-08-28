$(document).ready(function () {
    $("#headerAvocado").load("src/components/header/index.html");
    // $("#footerAvocado").load("src/components/footer/index.html");
    loadPage();
    changeColorHeader();
});



const loadPage = (pagelocation) => {
    $("#LoadedPage").load((pagelocation ? pagelocation : "src/pages/home/index.html"));
}

const changeColorHeader = (NewColor) => {
    $(".borderRotate").css("border-top", "15px solid " + (NewColor ? NewColor : "#7cb518"));
}