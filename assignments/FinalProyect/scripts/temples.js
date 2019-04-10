

var apiTemples = 'json/temples.json';
var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiTemples, true);
templeRequest.responseType = 'json';
templeRequest.send();
templeRequest.onload = function () {
    var templeData = templeRequest.response;
   
    

    var closureUL = document.createElement("ul");
    var closureLI;
    for (var i = 0; i < templeData[0].closures.length; i++) {
        closureLI = document.createElement("li");
        closureLI.innerHTML = templeData[0].closures[i].start + ' to ' + templeData[0].closures[i].end;
        closureUL.appendChild(closureLI);

    }
if (document.getElementById('templeClosure1')) {
        document.getElementById('templeClosure1').appendChild(closureUL);
    }
    else if (document.getElementById('templeClosure2')) {
        document.getElementById('templeClosure2').appendChild(closureUL);
    }
    else if (document.getElementById('templeClosure3')) {
        document.getElementById('templeClosure3').appendChild(closureUL);
    }
    else if (document.getElementById('templeClosure4')) {
        document.getElementById('templeClosure4').appendChild(closureUL);
    }
    else if (document.getElementById('templeClosure5')) {
        document.getElementById('templeClosure5').appendChild(closureUL);
    }
}