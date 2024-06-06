document.getElementById('theme').style.display="none";
var setting = document.getElementById('setting');
setting.addEventListener('click', function(){
    document.getElementById('theme').style.display="flex";
});


var button = document.getElementById('dark');
button.addEventListener('click',function(){
    var link = document.querySelector('link[href="style.css"]');
    link.href = 'style2.css';
    document.getElementById('theme').style.display="none";
});

var button = document.getElementById('light');
button.addEventListener('click',function(){
    var link = document.querySelector('link[href="style2.css"]');
    link.href = 'style.css';
    document.getElementById('theme').style.display="none";
});