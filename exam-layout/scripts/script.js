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

function sliderArrowLeft(){
    let leftArrow= document.getElementById("slider__arrow slider__arrow-left");
    let rightArrow = document.getElementById("slider__arrow slider__arrow-right");
    let bgPull = document.getElementsByClassName('slider__bg');
    console.log(bgPull);
}