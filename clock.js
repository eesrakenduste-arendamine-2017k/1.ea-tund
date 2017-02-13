//avalikud muutujad
var firstname;
var last;

// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    // e on ise määratud muutuja nimi
    window.addEventListener("keypress", function(e){
        console.log(e);

        if (e.charCode == 13) {
            console.log('Keegi vajutas Enter klahvi');
        }
    });

    var clickMeButton = document.getElementById("click-me-button");
    clickMeButton.addEventListener('click', function(){
        clickMeButton.style.display = "none";
    });

    addAuthor("Romil Rõbtšenkov");
    window.addEventListener('mousemove', function(){
        //10-40
        //var first = document.querySelectorAll('span')[0];
        console.log(firstname);

        console.log(Math.round(10+(Math.random()*5)));
        firstname.style.fontSize = Math.round(10+(Math.random()*30))+"px";

        //var last = document.querySelectorAll('span')[1];

        var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
        last.style.color = randomRGB;
    });

    window.addEventListener('dblclick', function(){
        var clockDiv = document.getElementById('clock');
        console.log(clockDiv);
        if(clockDiv.className == "big"){
            clockDiv.className = "small";
        }else{
            clockDiv.className = "big";
        }
    });
};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

function addAuthor(name){

    firstname = document.createElement('span');
    firstname.innerHTML = name.split(" ")[0];
    last = document.createElement('span');
    last.innerHTML = name.split(" ")[1];

    var p = document.createElement('p');
    p.appendChild(firstname);
    var space = document.createElement('span');
    space.innerHTML=" ";
    p.appendChild(space);
    p.appendChild(last);

    document.body.appendChild(p);
}

/*
for(var i = 0; i < links.length; i++){
 	links[i].href = "#";
}
*/
