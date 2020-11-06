var video = document.getElementById("myVideo");
var btn = document.getElementById("play__icon");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.style.color = "#ffffff";
        btn.style.border = "2px solid #ffffff";

    } else {
        video.pause();
        btn.style.color = "#7ab55c";
        btn.style.border = "2px solid #7ab55c";

    }
}