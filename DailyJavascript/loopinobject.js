//object এ লুপ চালানো
var obj={
    Bangladesh:'Dhaka',
    India:'Delhi',
    Pakistan:'Islamabad',
    Nepal:'Kathmandu',
}
//find object key using loop
for(name in obj){
    console.log(name);//Bangladesh, India, Pakistan, Nepal
}

//find value using key
for(name in obj){
    console.log(obj[name]);//Dhaka, Delhi, Islamabad,..
}

//Object constructor ব্যবহার করে আমরা কি ও ভ্যালু পেতে পারি। যা একটা অ্যাারে রিটার্ন করে। সেই অ্যারে নিয়ে আমরা অ্যারে এর সব মেথড এখন মন মত ইউজ করতে পারবো।

const arrKey=Object.keys(obj);
const arrValues=Object.values(obj);

console.log(arrKey);
console.log(arrValues);