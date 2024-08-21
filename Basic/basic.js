var num1=50;
var num2=10;
var sum = num1+num2;
var sub = num1-num2;
var mul = num1*num2;
var div = num1/num2;
var rem = num1%num2;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rem);


//loop
var i=0;
while(i<11){
    console.log(i);
    i++;
}

for(var j=11;j<21;j++){
    console.log(j);
}

var k=21;
do{
    console.log(k);
    k++;
}while(k<31);

const marks=77;
if(marks>79 && marks<101){
    console.log("congratulations!! A+");
}
else if(marks>69){
    console.log("WOW!! A");
}
else if(marks>59){
    console.log("Good!! A-");
}
else if( marks>49){
    console.log("not bad!! B");
}
else if(marks>39){
    console.log("ok!  C");
}
else if(marks>32){
    console.log("D");
}
else if(marks> -1 && marks<33){
    console.log("Fail");
}
else{
    console.log("You should input marks 1-100");
}