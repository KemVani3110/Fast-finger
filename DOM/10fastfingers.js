let word = ['rock', 'paper', 'sand','car', 'phone', 'trump', 'sail', 'salt', 'danger', 'give', 'up','rick', 'roll','gay','noob','not','dont','can','gao'];
let radword = word[Math.floor(Math.random() * word.length)];
let rad = document.getElementById('inputword');
let error = 0;
console.log(radword);
let err = document.getElementById('error');
let title = document.getElementById('title')

let point = 0;
let score = document.getElementById('point1');
let tym = document.getElementById('tim');

title.innerHTML = radword;

let time = 11
function lopp()
{
    score.innerHTML = "Your Score: " + point ;
    err.innerHTML = "Your Error: " + error;
   
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
            error++;

        }
    }
})

 let countDown = setInterval(timer,1000)
    
 function timer(){
    time--;
    tym.innerHTML= "Your Time left: " + time;
    
    if (time <= -1){
       alert("Hết giờ!!" );
       alert(`Điểm tổng của bạn là: ${point} Và Lỗi sai của bạn là: ${error}` );
       restart();
       lopp();
    }
 }

let addBt = document.getElementById('addBt');

addBt.addEventListener('click',restart)

function restart()
{
    error = 0;
    point = 0;
    lopp();
}





