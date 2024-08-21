//spread মানে ছড়িয়ে দেয়া ...

const arr1 = [1,3,5,7,9];
const arr2 = [2,4,6,8];

const es5= arr1.concat(arr2);
console.log(es5);

const es6 = [...arr1,0,11,12,...arr2];
console.log(es6);