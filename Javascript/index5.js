var key_code = document.getElementById('key-value');
var key_value = document.getElementById('key');
// console.log(key_value);
document.body.addEventListener('keydown', function (e) {    
    key_code.innerHTML = e.keyCode;
    key_value.innerHTML= e.key;
})