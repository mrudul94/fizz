window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("image");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}