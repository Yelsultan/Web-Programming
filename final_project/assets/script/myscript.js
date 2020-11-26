$(".oblystar").click(function (evt) {
    $("#city__card").css({
        top: evt.pageY - 20,
        left: evt.pageX - 310
    }).toggle();
    $("#city__card").css("display", "flex");
});

$("#close__card").click(function (evt) {
    $("#city__card").css("display", "none");
});

function changeName(name) {
    document.getElementById("card__p").innerHTML = name;
}
