let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let player = document.getElementById('player');
let operator = document.getElementById('operator');
let n1 = Math.ceil(Math.random() * 10);
let n2 = Math.ceil(Math.random() * 10);
let count = 0;
let p = 0;
let score = document.getElementById('score');
let seconds = document.getElementById('seconds');
let s = 30;
let b = "black";
let w = 20 + 'px';
let enemy = document.getElementById('enemy');
let r = (Math.random() * 200);
let r2 = (Math.random() * 200);
let deathzone = document.getElementById('deathzone');
let pow = 1;
let sum = 0;

//design
num1.style.color = "white";
num2.style.color = "white";
num1.style.background = b;
num2.style.background = b;
num1.style.width = w;
num2.style.width = w;
num1.style.border = "1px solid black";
num2.style.border = "1px solid black";

//enemy design
enemy.style.background = b;
enemy.style.color = "white";
enemy.style.width = 70 + "px";
enemy.style.borderRadius = 45 + 'px';
enemy.style.height = 70 + 'px';
enemy.style.paddingLeft = 40 + 'px';
enemy.style.paddingTop = 10 + 'px';
enemy.style.position = "absolute";

//player design
player.style.position = "absolute";
player.style.width = "90px";
player.style.height = 80 + 'px';
player.style.fontSize = 45 + 'px';
player.style.left = 47 + '%';
player.style.top = 50 + '%';
player.style.border = "2px solid black";

//deathzone design
deathzone.style.background = "red";
deathzone.style.width = 1800 + 'px';
deathzone.style.position = "absolute";
deathzone.style.border = "2px solid black";
deathzone.style.height = 20 + 'px';
deathzone.style.top = 70 + '%';

num1.value = n1;
num2.value = n2;


let delay = setInterval(function() {


enemy.style.left = r + 'px';
enemy.style.top = r2 + 'px';    
r2++;  
    
num1.value = parseInt(n1) + count;
num2.value = parseInt(n2) + count;

ris = (parseInt(n1) + count) + (parseInt(n2) + count);

if(player.value == ris) {

//refresh
player.value = " ";
num1.value = "";
num2.value = "";
count++;

//return
enemy.style.top = 35 + '%';

sum = r2 + pow;
enemy.style.top = sum + '%';
sum++;

//score
score.innerHTML = "Score:" + p;
p++;

}

}, 200);


//timer
let timer = setInterval(function() {

seconds.innerHTML = "Seconds:" + s;
s--;

if(s == -1 || enemy.style.top == 71 + '%') {

    seconds.innerHTML = "Game Over";
    seconds.style.color = "red";
    clearInterval(delay);
    clearInterval(timer);
}


}, 1000);


//key commands 
document.addEventListener('keydown', (ev) => {

if(ev.key == "r") {
    window.location.reload();   
    enemy.style.left = r + 'px';
    enemy.style.top = r2 + 'px';      
}

});