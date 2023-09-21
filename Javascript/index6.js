const over = document.getElementById("over");
var overcount = 0;
over.addEventListener('mouseover',function()
{
    const overCount = document.querySelector('#over>p');
    overcount +=1 ;
    overCount.innerHTML = overcount;
});
const enter = document.getElementById("enter");
var entercount = 0;
enter.addEventListener('mouseenter',function()
{
    const enterCount = document.querySelector('#enter>p');
    entercount +=1 ;
    enterCount.innerHTML = entercount;
});
const move = document.getElementById("move");
var movecount = 0;
move.addEventListener('mousemove',function()
{
    const moveCount = document.querySelector('#move>p');
    movecount +=1 ;
    moveCount.innerHTML = movecount;
});