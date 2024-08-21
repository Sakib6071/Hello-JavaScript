/* অনেকটা ম্যাপের মতই। তবে এখানে ফাংশনে অ্যাপ্লাই করা শর্ত যে আইটেমের জন্য true রিটার্ন করবে সেগুলোই নতুন অ্যারেতে স্থান পাবে।

ফিল্টারেও হুবহু ম্যাপের মতই সেম তিনটি আর্গুমেন্ট এক্সসেপ্ট করে*/

var arr = [1,2,3,4,5,6,7,8,9];
var newArr=arr.filter(function(item){
return item%2==0;
})

// let newArr=arr.filter(item=>item%2===0); ---> es6

console.log(newArr);


let newAnotherArr = arr.filter(function(item, index, fullArr){
    console.log(`Item: ${item}. Index: ${index}. Full Array: ${fullArr}`);
})
