let word = ['rock', 'paper', 'sand','car', 'phone', 'trump', 'sail', 'salt', 'danger', 'give', 'up','rick', 'roll'];
let radword = word[Math.floor(Math.random() * word.length)];
let rad = document.getElementById('inputword');
console.log(radword);

let title = document.getElementById('title')

let point = 0;
let score = document.getElementById('point1');
let tym = document.getElementById('tim');

title.innerHTML = radword;

let time = 11
function lopp()
{
    score.innerHTML = "Your Score: " + point;
   
    radword = word[Math.floor(Math.random() * word.length)];
    title.innerHTML = radword
    rad.value = "";
    countDown;
    time = 11;
    return countDown;
}

rad.addEventListener("keyup", ({key}) => { // bắt sk enter là keyup
    if (key === "Enter") {
        // Do work
        if(rad.value === radword) {
            point++;
          lopp();
        }
        else{
            lopp();
        }
    }
})

 let countDown = setInterval(timer,1000)
    
 function timer(){
    time--;
    tym.innerHTML= "Your Time left: " + time;
    
    if (time <= 0){
        
       lopp();
    }
 }

let addBt = document.getElementById('addBt');

addBt.addEventListener('click',restart)

function restart()
{
    point = 0;
    lopp();
}





