//JS code for boiler.html
function saveBoilerInfo() {
    var boilerId = document.getElementById("boilerId").value;
    var dop = document.getElementById("dop").value;
    var maxPressure = document.getElementById("maxPressure").value;
    var maxTemperature = document.getElementById("maxTemperature").value;

    alert("Boiler information saved successfully!");
}
// JS for changeboiler.html
function changeBoilerInfo() {
    var newBoilerId = document.getElementById("newBoilerId").value;
    var newDop = document.getElementById("newDop").value;
    var newMaxPressure = document.getElementById("newMaxPressure").value;
    var newMaxTemperature = document.getElementById("newMaxTemperature").value;

    alert("Boiler information updated successfully!");
}