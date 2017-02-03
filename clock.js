
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

/*
for(var i = 0; i < links.length; i++){
 	links[i].href = "#";
}
*/
