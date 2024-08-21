/* some একটা অ্যারে মেথড
এখানে সে চেক করে দেখবে অ্যারে এর ভিতর নির্দিষ্ট কোনো আইটেম আছে কিনা। যদি থাকে তাহলে true/false return করবে */

const Arr=[1, 'sakib', 44, 't', 11]
const check=Arr.some(function(item){
    return item=='sakib'
})
console.log(check);//true