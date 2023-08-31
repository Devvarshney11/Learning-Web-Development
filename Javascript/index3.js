console.log('script loaded')
var btn = document.getElementById('button');
var text = document.getElementById('main-heading');
function changeClass()
{
    if(text.classList.contains('small'))
    {
        text.classList.add('big');
        text.classList.remove('small');
    }
    else
    {
        text.classList.add('small');
        text.classList.remove('big');
    }
}
btn.addEventListener('click',changeClass);