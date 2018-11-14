function btn(){
    let video = document.getElementById("video");
    videoPlay();
    overlayHide();
    function videoPlay(){
        video.play();
        video.setAttribute("controls","controls");
    }

    function overlayHide(){
        document.getElementById("video__overlay").classList+=' hidden';
    }
}

$('.carousel').carousel({
    interval: 10000
})