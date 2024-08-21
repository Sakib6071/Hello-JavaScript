/* every ও একটা অ্যারে মেথড. এখানে সে শর্ত সাপেক্ষে প্রত্যেকটি আইটেম চেক করে। যদি শর্ত প্রত্যেকটি আইটেম এর জন্য সত্যি হয়, তাহলে true রিটার্ন করবে, যদি একটি আইটেম এর জন্য ও মিথ্যা হয়, তাহলে ফলস রিটার্ন করবে */

const arr =[2,2,2,2,2,2,2,2]
const check = arr.every(function(item){
    return item==2;
})
console.log(check);

const arr1 =[2,2,2,2,2,2,2,2,3]
const check1 = arr1.every(function(item){
    return item==2;
})
console.log(check1);
//for more, check the book