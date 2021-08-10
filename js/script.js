let n = 0;
let time = 50;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function rand(){
    await setTimeout(()=>{
        document.querySelector('p').innerHTML=getRandomInt(1,1000);
        n++;
    }, time);

    if(n<80){
        n++;
        time+=70;
        rand();
    }
}