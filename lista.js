var list = [101299,1022206,10229,1024530,1026624,10358,10534,106646,10726,10898,109513,11001,11041,11162,11215,11216,112205,11327,114,116,11688,11770,11817,118683,11937,120,120143,12085,121,122,122800,12477,12685,127770,129,13,13053,131631,131634,13207,13252,13256,13387,13505,13805,1399,1402,14655,];
var randomNumber = 0;
var url = "";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", function() {
    randomNumber = list[Math.floor(Math.random() * list.length)];
    url = "https://jp-app.netlify.app/details/" + randomNumber;
    window.open(url, "_blank");
  });
});
