console.log("script loaded");
var btn = document.getElementById('Button');
var wrapper = document.querySelector('div');

function backgrounChange()
{
    wrapper.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
}
btn.onclick = backgrounChange;