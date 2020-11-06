var barr = document.getElementById("hidden__nav");
var number = 10000;
function openBar() {
    if (number % 2 != 0) {
        closeNav();
        number--;
    } else {
        openNav();
        number--;
    }
}

function openNav() {
    barr.style.display="block";
}

function closeNav() {
    barr.style.display="none";
}