const country="Bangladesh";
const country1='India';
const country2=`Nepal`;
const country3 = new String('Pakistan');
console.log(country3);

console.log(country1[3]);//act like an array

country1[3]='r';//it will not be changed. because string is immutable(not changeable)
console.log(country1);


const names ="Mohammad Habib Ullah Mezbah Sakib"
const allName=names.split(' ');
console.log(allName);//give an array

console.log(names.slice(9,14));//9 to 12 index value return

const name=['sakib','Hasan'];
console.log(name.join('-'));

const first='Habib';
const last='Ullah';
const fullName=first.concat(' ',last);
console.log(fullName);