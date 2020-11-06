var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myHeader").style.backgroundColor = "white";
        document.getElementById("nav__item1").style.color = "black";
        document.getElementById("nav__item2").style.color = "black";
        document.getElementById("nav__item3").style.color = "black";
        document.getElementById("nav__item4").style.color = "black";
        document.getElementById("nav__item5").style.color = "black";
        document.getElementById("logo").style.color = "#95a5a9";
        document.getElementById("myHeader").style.borderBottom = "1px solid #ecf3f5";
        document.getElementById("barc").style.color = "black";
        
        mybutton.style.display = "block";
        
    } else {
        document.getElementById("myHeader").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("nav__item1").style.color = "white";
        document.getElementById("nav__item2").style.color = "white";
        document.getElementById("nav__item3").style.color = "white";
        document.getElementById("nav__item4").style.color = "white";
        document.getElementById("nav__item5").style.color = "white";
        
        document.getElementById("logo").style.color = "white";
        
        document.getElementById("myHeader").style.borderBottom = "none";
        
        document.getElementById("barc").style.color = "white";
        
        mybutton.style.display = "none";
    }
}