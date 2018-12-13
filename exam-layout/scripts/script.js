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
});
$(".carousel").on("touchstart", function(event){
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
        $(this).off("touchmove");
    });
});