//একে fat arrow ও বলা হয়। একে সিনট্যাটিক সুগার ও বলা হয়, দেখতে সুন্দর ও সিনট্যাকটিক্যালি সুন্দর দেখালে সেটাকে সিনট্যাটিক সুগার বলে।

//নরমাল ফাংশন
var aFunc = function(){
    console.log("ES5 function");
}

aFunc()

//arrow function.  এখানে ফাংশন কিওয়ার্ড লাগে না। 
const aFuncArrow =()=>console.log("ES6 function");
aFuncArrow();
//এখানে ফার্স্ট ব্র্যাকেট এর মধ্যে প্যারামিটার বসবে, তবে একটা প্যারামিটার হলে ফার্স্ট ব্রেকেট না দিলেও হয়, কিন্তু একাধিক হলে দিতে হবে।

//অটো রিটার্ন

//normal function
const dob = [1999, 1998, 2000];

const currentAge5 = dob.map(function(oneDob5){
    return 2024-oneDob5
});
console.log(currentAge5);


const currentAge6 =(dob.map(oneDob=>2024-oneDob));

console.log(currentAge6);

//এখানে আমরা দেখলাম এরো ফাংশনে কোনো রিটার্ণ লাগে না, তবে সেটা সিংগেল লাইন এর জন্য। অটো রিটার্ন করে।

//মাল্টিপল প্যারামিটার
const currentAge62 = dob.map((oneDob,index)=> `${index+1}: ${2024-oneDob}`);
console.log(currentAge62);


//multiple line এর ক্ষেত্রে return auto হয় না। তখন ব্যবহার করতে হয় return

const currentAge63 = dob.map((oneDob,index)=>{
    const age = 2024-oneDob;
    return `${index+1}: ${age}`;
})

console.log(currentAge63);

// এখানে এরো ফাংশন, ফাংশন স্টেট্মেন্ট হিসেবে কাজ করে। নরমাল ফাংশন আগে কল করা যায়, কিন্তু এরো ফাংশন যাবে না। আগে ডিক্লার করে তারপর কল করতে হয়।


//lexical this keyword - see in the book(হাতে কলমে জাভাস্ক্রিপ্ট)