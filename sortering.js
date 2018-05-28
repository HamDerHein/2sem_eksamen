function alle() {

    document.querySelector(".spisebordWrapper").style.visibility = "visible";
    document.querySelector(".spisebordWrapper").style.height = "auto";
    document.querySelector(".sofabordWrapper").style.visibility = "visible";
    document.querySelector(".sofabordWrapper").style.height = "auto";

    document.querySelector("#displayFarveskift").style.visibility = "visible";
    document.querySelector("#displayFarveskift").style.height = "auto";

    document.querySelector(".hyldeWrapper").style.visibility = "visible";
    document.querySelector(".hyldeWrapper").style.height = "auto";
}

function visSpiseborde() {

    console.log("vis spiseborde");
    document.querySelector(".spisebordWrapper").style.visibility = "visible";
    document.querySelector(".sofabordWrapper").style.visibility = "hidden";
    document.querySelector(".sofabordWrapper").style.height = "0px";

    document.querySelector("#displayFarveskift").style.visibility = "hidden";
    document.querySelector("#displayFarveskift").style.height = "0px";

    document.querySelector(".hyldeWrapper").style.visibility = "hidden";
    document.querySelector(".hyldeWrapper").style.height = "0px";
}

function visSofaborde() {

    console.log("vis sofaborde");
    document.querySelector(".spisebordWrapper").style.visibility = "hidden";
    document.querySelector(".spisebordWrapper").style.height = "0px";
    document.querySelector(".sofabordWrapper").style.visibility = "visible";

    document.querySelector("#displayFarveskift").style.visibility = "visible";

    document.querySelector(".hyldeWrapper").style.visibility = "hidden";
    document.querySelector(".hyldeWrapper").style.height = "0px";
}

function visHylder() {

    console.log("vis sofaborde");
    document.querySelector(".spisebordWrapper").style.visibility = "hidden";
    document.querySelector(".spisebordWrapper").style.height = "0px";
    document.querySelector(".sofabordWrapper").style.visibility = "hidden";
    document.querySelector(".sofabordWrapper").style.height = "0px";

    document.querySelector("#displayFarveskift").style.visibility = "hidden";
    document.querySelector("#displayFarveskift").style.height = "0px";

    document.querySelector(".hyldeWrapper").style.visibility = "visible";
}
