//map, filter, reduce এরা array এর মেথড
//map=>map()কোনো অ্যারেতে কল করলে সেটা সেই অ্যাারের প্রত্যেকটা আইটেমের উপর আপনারই দেয়া একটা ফাংশন এপ্লাই করবে এবং সবশেষে আবার আরেকটা অ্যারে রিটার্ন করবে।

let arr =[1,2,3,4,5,6,7,8,9];
var newArr = arr.map(function(item){
    return item*item;
})

//var newArr = arr.map(item=>item*item) -->es6 use
console.log(newArr);

/* এখানে ফাংশনে একটা আর্গুমেন্ট(item) পাস করেছি। কিন্তু ম্যাপ তিনটি আর্গুমেন্ট এক্সেপ্ট করে। 
->প্রথমটা অ্যাারের প্রতিটা আইটেম রিপ্রেজেন্ট করে
->দ্বিতীয়টা আইটেমের ইন্ডেক্স
->তৃতীয়টি পুরো অ্যারে
*/

let newAnotherArr = arr.map(function(item, index, fullArr){
    console.log(`Item: ${item}. Index: ${index}. Full Array: ${fullArr}`);
})
