let jalilInfo = {
    name: 'Jalil',
    age: 28
}
console.log(jalilInfo.name);
console.log(jalilInfo['age']);

jalilInfo.home='Dhaka';
jalilInfo.name='Jolil';

console.log(jalilInfo);

jalilInfo.nicknames=function(){
    console.log('Jolil Biri, Jailla');
}
console.log(jalilInfo);
console.log(jalilInfo.nicknames());


//acess using loop

for(item in jalilInfo){
    console.log(item);
}



