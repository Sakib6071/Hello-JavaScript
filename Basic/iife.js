/* সাধারনত কোনো ফাংশন ব্যবহার করার পরে, আমরা সেটা কল করে এক্সিকিউট করি।
কিন্তু যখন আমরা, ফাংশন ডিক্লার করার সাথে সাথে কল করতে চাই, তখন আমরা ইফি টেকনিক ব্যবহার করি।
এক্ষেত্রে পুরো ফাংশন কে প্রথম ব্যাকেট এর ভিতর লেখা হয়। */

function demoFunck(){
    console.log("IIFE-Immediately Invoked Function Expression");
} 
console.log(demoFunck());


(function anotherDemoFunck(){
    console.log("IIFE-Immediately Invoked Function Expression");
} )();