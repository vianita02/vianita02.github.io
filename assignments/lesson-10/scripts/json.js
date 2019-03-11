var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var towns = request.response;
    showTowns(towns);
}

function showTowns(jsonObj) {
    var cities = jsonObj['towns'];

    for (var i = 0; i < cities.length; i++) {
        if (i === 0 || i === 2 || i === 3 || i === 6) {
            continue;
        }

        if (i===1){
            document.getElementById("fHmotto").innerHTML= cities[i].motto;
            document.getElementById("fHyear").innerHTML= 'Year Founded: ' + cities[i].yearFounded;
            document.getElementById("fHpopulation").innerHTML= 'Population: ' + cities[i].currentPopulation;
            document.getElementById("fHrainfall").innerHTML= 'Annual Rainfall: ' + cities[i].averageRainfall + '"';
        } else if(i===4){

            document.getElementById("PrestonMotto").innerHTML= cities[i].motto + ".";
            document.getElementById("PrestonYear").innerHTML= 'Year Founded: ' + cities[i].yearFounded;
            document.getElementById("PrestonPopulation").innerHTML= 'Population: ' + cities[i].currentPopulation;
            document.getElementById("PrestonRainfall").innerHTML= 'Annual Rainfall: ' + cities[i].averageRainfall + '"';


        } else if(i===5){
            document.getElementById("Smotto").innerHTML= cities[i].motto + ".";
            document.getElementById("Syear").innerHTML= 'Year Founded: ' + cities[i].yearFounded;
            document.getElementById("Spopulation").innerHTML= 'Population: ' + cities[i].currentPopulation;
            document.getElementById("Srainfall").innerHTML= 'Annual Rainfall: ' + cities[i].averageRainfall + '"';


        }
        
        /* var myPara4 = document.createElement('p');
        myPara4.textContent = cities[i].motto;
        document.getElementById("jmotto").appendChild(myPara4);

        var myPara1 = document.createElement('p');
        myPara1.textContent = 'Year Founded: ' + cities[i].yearFounded;
        document.getElementById("year").appendChild(myPara1);

        var myPara2 = document.createElement('p');
        myPara2.textContent = 'Population: ' + cities[i].currentPopulation;
        document.getElementById("population").appendChild(myPara2);

        var myPara3 = document.createElement('p');
        myPara3.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall + '"';
        document.getElementById("rainfall").appendChild(myPara3);

        /*var myImg = document.createElement('img');

        if (i === 1) {
            myImg.setAttribute("src", "images/boy-child-cold-1648425.jpg");
        } else if (i === 4) {
            myImg.setAttribute("src", "images/adults-child-cold-1620653.jpg");
        } else if (i === 5) {
            myImg.setAttribute("src", "images/christmas-cold-friends-269370.jpg");
        }*/


        /* myArticle.appendChild(myH1);*/
        /*section.appendChild(myArticle);*/
       /* myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        /*myArticle.appendChild(myImg);*/

}
}
