/* 
কলব্যাক ফাংশনঃ এটা এমন একটি ফাংশন, যেটা আরেকটা ফাংশনের আর্গুমেন্ট হিসেবে পাঠানো হয়।
*/

const getVar = () =>{
    setTimeout(function(){
        console.log("A function that takes sometime");
    },3000)
}
const printSomething =()=>{
    console.log("Another Func");
}
getVar();
printSomething();
//এখানে জাভাস্ক্রিপ্ট এর এসিনক্রোনাস এর জন্য getvar প্রিন্ট হতে সময় নিবে বলে, printSomething আগে প্রিন্ট হয়ে যাবে। তারপর getVar. তবে কলব্যাক দিয়ে এই সমস্যা দূর করা সম্ভব


const getVarC = (callback) =>{
    setTimeout(function(){
        console.log("A function that takes sometime");
        callback();
    },3000)
}
const printSomethingC =()=>{
    console.log("Another Func");
}
getVarC(printSomethingC);