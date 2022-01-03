// Editor JS Started 

function run() {
    let htmlcode = document.getElementById('html-code').value;
    let csscode = "<style>" + document.getElementById('css-code').value + "<style>";
    let jscode = document.getElementById('js-code').value;
    let output = document.getElementById('output');
    output.contentDocument.body.innerHTML = htmlcode + csscode;
    output.contentWindow.eval(jscode);
}
document.getElementById('html-code').addEventListener("keyup", run);
document.getElementById('css-code').addEventListener("keyup", run);
document.getElementById('js-code').addEventListener("keyup", run);


// Copy Button JS Started 

function htmlcopyed(){
    document.getElementById("html-button").innerHTML = "Copyed";
}
let htmlbut = document.getElementById("html-button");
htmlbut.addEventListener("click", function(){
    let input = document.getElementById("html-code");
    input.select();
    document.execCommand('copy');
    setTimeout(function(){ htmlbut.innerHTML="Copy Now" }, 1000);
});


function csscopyed(){
    document.getElementById("css-button").innerHTML = "Copyed";
}
let cssbut = document.getElementById("css-button");
cssbut.addEventListener("click", function(){
    let input = document.getElementById("css-code");
    input.select();
    document.execCommand('copy');
    setTimeout(function(){ cssbut.innerHTML="Copy Now" }, 1000);
});


function jscopyed(){
    document.getElementById("js-button").innerHTML = "Copyed";
}
let jsbut = document.getElementById("js-button");
jsbut.addEventListener("click", function(){
    let input = document.getElementById("js-code");
    input.select();
    document.execCommand('copy');
    setTimeout(function(){ jsbut.innerHTML="Copy Now" }, 1000);
});



