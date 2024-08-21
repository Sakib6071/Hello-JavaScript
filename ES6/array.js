//array এর কিছু নতুন মেথড আসছে।
//ডম নিয়ে কাজ করতে গেলে আমরা অ্যারে এর মত আরেকটা জিনিস দেখতে পাই, যার নাম হলো নোড লিস্ট।nodeList. এটা একটা অব্জেক্ট টাইপ।
//ডম ম্যানিপুলেশন এ array & nodeList totally different.
//nodeList এর ও অ্যারে এর মত length property আছে। তবে অ্যারে এর সব মেথড এখনে ইউজ করলে এরর আসতে পারে। 
//তাই এক্ষেত্রে আমাদের করনীর এই নোডলিস্ট কে অ্যারে তে কনভার্ট করে ফেলা। তাহলে আমরা সব ইজিলি করতে পারবো।

/* //es5 nodeList to array conversion
const nodeToArr = Array.prototype.slice.call(NodeList);

//es6 nodeList to array conversion
const nodeToArrES6=Array.from(nodeList); */



//লুপিংঃ আমরা অ্যারে এর প্রতিটা আইটেম লুপ করার জন্য forEach, map মেথড ব্যবহার করি। কিন্তু যদি কোনো এক যায়গায় ব্রেক বা কন্টিনিউ করার প্রয়োজন হয়, তখন তা সম্ভব নয়, তখন আমরা for of ব্যবহার করতে পারি, ES6 এর।

var num = [1,2,3,4,5];

for(n of num){ //এখানে n এর মধ্যে ভ্যালু স্টোর হয়েছে।
    if(n==3){
        break;
    }
    console.log(n);
}



//আমরা যদি কোনো অ্যারে থেকে একটা এলিমেন্ট খুজতে যাই, তাহলে ইএস৫ এ আমাদের অনেক কোড করতে হয়। কিন্তু es6 এ একদম ইজি মেথড আছে।

var numbers = [11,33,23,52,66,84]; //find 66

var findNum = numbers.map(function(theNum){
    return theNum ===66;
})
console.log(findNum); //output false false false false true false

console.log(findNum.indexOf(true)); //output 4


//but in es6-

console.log(numbers.findIndex(number => number ===66)
);

//ইজিইইইইইই
//যদি এমন কোনো এলিমেন্ট চাই, যা অ্যারে তে নাই। তাহলে ইন্ডেক্স -1 আসবে।

