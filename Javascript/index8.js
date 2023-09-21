const mail = document.getElementById('email');
const phone = document.getElementById('number');
const eError = document.getElementById('mailError');
const nError = document.getElementById('numberError');

mail.addEventListener('input',function(e)
{
    let str = e.target.value;
    let pattern = /^[\w]+\@gmail\.com$/g
    if(pattern.test(str))
    {
        eError.style.display = 'none';
    }
    else
    {
        eError.style.display = 'block';
    }
})

phone.addEventListener('input',function(e)
{
    let str = e.target.value;
    let pattern = /^(\+91)?[0-9]{10}$/g;
    if(pattern.test(str))
    {
        nError.style.display = 'none';
    }
    else
    {
        nError.style.display = 'block';
    }
})