var firstvalue = document.getElementById("redinp1");
var secondvalue = document.getElementById("redinp2");
var thirdvalue = document.getElementById("redinp3");
var fourthvalue = document.getElementById("redinp4");

var failedbtn = document.getElementById("failed");

var staticInput = document.getElementById("statid");
var failedSubs = document.getElementById("subsid");

function fourIfEmpty() {
    if (firstvalue.value == "") {
        firstvalue.style.borderColor = "#DB2429";
        failedbtn.innerHTML = "Failed!";
        setTimeout(FetchData, 2500);
    }
    if (secondvalue.value == "") {
        secondvalue.style.borderColor = "#DB2429";
        failedbtn.innerHTML = "Failed!";
        setTimeout(FetchData, 2500);
    }
    if (thirdvalue.value == "") {
        thirdvalue.style.borderColor = "#DB2429";
        failedbtn.innerHTML = "Failed!";
        setTimeout(FetchData, 2500);
    }
    if (fourthvalue.value == "") {
        fourthvalue.style.borderColor = "#DB2429";
        failedbtn.innerHTML = "Failed!";
        setTimeout(FetchData, 2500);
    }
    
    /*--------------------------------------*/
}

function oneIfEmpty() {
    if (statid.value == "") {
        failedSubs.innerHTML = "Failed!";
        setTimeout(FetchData, 2500);
    }
}

function FetchData() {
    firstvalue.style.borderColor = "#dfdfdf";
    secondvalue.style.borderColor = "#dfdfdf";
    thirdvalue.style.borderColor = "#dfdfdf";
    fourthvalue.style.borderColor = "#dfdfdf";
    
    failedbtn.innerHTML = "Book Now!"
    
    failedSubs.innerHTML = "Subscribe";
}
