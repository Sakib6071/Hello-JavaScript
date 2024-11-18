console.log('Hello');
function makered(){
    document.body.style.backgroundColor='red';
}

const makePurple = document.getElementById('makePurple');
makePurple.onclick = function(){
    document.body.style.backgroundColor='purple'
}

function makeGreen(){
    document.body.style.backgroundColor='green'
}

const makePink=document.getElementById('makePink');
makePink.addEventListener('click',doPink)
function doPink(){
    document.body.style.backgroundColor='pink'
}

document.getElementById('makeTomato').addEventListener('click',function(){
    document.body.style.backgroundColor='tomato'
})