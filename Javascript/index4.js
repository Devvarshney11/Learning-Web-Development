var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var text = document.getElementById('text');
var initialFontSize = window.getComputedStyle(text).fontSize;
function increment()
{   
    initialFontSize = parseInt(initialFontSize.substring(0,initialFontSize.length-2));
    initialFontSize += 1;
    initialFontSize += "px";
    text.style.fontSize = initialFontSize;
}
btn1.onclick = increment;
function decrement()
{
    initialFontSize = parseInt(initialFontSize.substring(0,initialFontSize.length-2));
    initialFontSize -= 1;
    initialFontSize += "px";
    text.style.fontSize = initialFontSize;
}
btn2.onclick = decrement;