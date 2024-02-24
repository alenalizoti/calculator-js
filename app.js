window.addEventListener("load", init);


var dugme;
var ispis;


function dodaj(event){
    meta = event.target;
    // console.log(meta);
    var vrednost = meta.innerHTML;
    if (vrednost >=0 && vrednost <= 9){
        vrednost = parseInt(vrednost);
    }
    // console.log(typeof(vrednost))
    // console.log(ispis)
    ispis.innerHTML += vrednost;

}

document.getElementById('sabiranje').addEventListener('click', saberi);
document.getElementById('jednako').addEventListener('click', izracunaj);
document.getElementById('mnozenje').addEventListener('click', mnozenje);
document.getElementById('deljenje').addEventListener('click', deljenje);
document.getElementById('oduzimanje').addEventListener('click', oduzimanje);
document.getElementById('obrisi').addEventListener('click', obrisi);

var izraz = [];
function obrisi(){
    ispis.innerHTML = "";
    izraz = [];
}
function mnozenje(){
    izraz.push(parseInt(ispis.innerHTML));
    izraz.push('*')
    ispis.innerHTML = "";
    console.log(izraz)
}
function deljenje(){
    izraz.push(parseInt(ispis.innerHTML));
    izraz.push('/')
    ispis.innerHTML = "";
}
function oduzimanje(){
    izraz.push(parseInt(ispis.innerHTML));
    izraz.push('-')
    ispis.innerHTML = "";
}
function saberi(){
    izraz.push(parseInt(ispis.innerHTML));
    izraz.push('+')
    ispis.innerHTML = "";
}
function izracunaj(){
    izraz.push(parseInt(ispis.innerHTML));
    var rezultat = eval(izraz.join(' '));
    ispis.innerHTML = rezultat;
    izraz = [];
}

function init(){
    dugme = document.getElementsByTagName('button');
    ispis = document.querySelector('.ispis');
    // console.log(dugme)
    for(var polje of dugme ){
        // console.log(polje)
        polje.addEventListener('click', dodaj);
    }
}

