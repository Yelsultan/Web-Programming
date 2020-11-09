var input1 = document.getElementById("1st");
var input2 = document.getElementById("2nd");

var result = document.getElementById("result");

function multiply() {
    var answer = input1.value * input2.value;
    result.innerHTML = answer;
}

function divide() {
    var answer = input1.value / input2.value;
    result.innerHTML = answer;
}

/*-----------TASK2*------------------*/

var celc1 = document.getElementById("1stc");
var celc2 = document.getElementById("2ndc");

var far1 = document.getElementById("1stf");
var far2 = document.getElementById("2ndf");

var fahrenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");

function toFar() {
    var fare = ((celsius.value * 9)/5)+32;
    
    celc1.innerHTML = celsius.value;
    far2.innerHTML = fare;
}

function toCel() {
    var celc = ((fahrenheit.value - 32)/9)*5;
    
    far1.innerHTML = fahrenheit.value;
    celc2.innerHTML = celc;
}

/*------------------TASK3------------------*/

var radius = document.getElementById("radius");
var volume = document.getElementById("volume");

var pi = Math.PI;

function calculate() {
    volume.value = (4/3)*pi*radius.value*radius.value*radius.value;
}

/*------------------TASK4------------------*/

var number = document.getElementById("number");
var reversed = document.getElementById("reversed");

function reverse() {
	number.value = number.value + "";
	reversed.innerHTML = number.value.split("").reverse().join("");
}

/*------------------TASK5------------------*/

function drawRect() {
    var canvas = document.getElementById("canvasRect");
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.fillRect(20, 20, 100, 100);
        context.clearRect(40, 40, 60, 60);
        context.strokeRect(45, 45, 50, 50);
    }
}

/*------------------TASK6------------------*/

function drawCircle() {
    var canvas = document.getElementById("canvasCircle");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 45;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    }
}

/*------------------TASK7------------------*/

function draw() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var counter = 0;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            //Start from white and goes to black
            ctx.fillStyle = "rgb(" + Math.floor(255 - 42.5 * i) + "," + Math.floor(255 - 42.5 * i) +
                "," + Math.floor(255 - 42.5 * j) + ")";
            ctx.beginPath();
            if (i === counter && j === counter) {
                //creates the circles
                ctx.arc(25 + j * 50, 30 + i * 50, 20, 0, Math.PI * 2, true);
                ctx.fill();
                //creates a border around the circles so white one will be vissible
                ctx.stroke();
            }
        }
        counter++;
    }
}