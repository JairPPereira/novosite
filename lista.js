var list = [101299,1022206,10229,1024530];
var randomNumber = 0;
var url = "";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("myButton").addEventListener("click", function() {
    randomNumber = list[Math.floor(Math.random() * list.length)];
    url = "https://jp-app.netlify.app/details/" + randomNumber;
    window.open(url, "_blank");
  });
});
