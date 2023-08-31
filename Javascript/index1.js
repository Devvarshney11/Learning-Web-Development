console.log("Script loaded");
var countdownElement = document.getElementById('countdown');
var backgroundElement = document.getElementById('bg-img');
var countdownElementVal = countdownElement.innerHTML;
setInterval(function(){
    countdownElementVal -= 1;
    if(countdownElementVal<0)
        return;
    countdownElement.innerHTML = countdownElementVal;
    backgroundElement.style.backgroundImage = (countdownElementVal%2 == 0)?"url('/stylish-hexagonal-line-pattern-background_1017-19742.avif')":"url('/download.jpeg')";  
},1000);