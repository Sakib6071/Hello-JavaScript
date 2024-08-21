const obj={
    FullName:'Habib Ullah'
}
console.log(obj.FullName);//dot notation
console.log(obj['FullName']);//brackets notation



//ডট নোটেশন এর সব কাজ ই ব্রাকেট নোটেশন দিয়ে হয়ে যায়। তবে ব্রাকেট নোটেশন এর স্পেশালিটি আছে। 

const obj1={
    name:'Habib',
    age:25
}
var x='age';
console.log(obj1.x);//undefine
console.log(obj1[x]);//25

//উপরে লক্ষ্য করলে দেখবেন কোনো ভ্যারিয়েবল এর ভ্যালু যদি অব্জেক্ট এর key এর সাথে মিলে যায়। তাহলে সেই ভ্যারিয়েভল ব্যবহার করে ডট নোটেশন এ কাজ করা যায় না। আন্ডিফাইন দেখায়।কারন ডট নোটেশন অব্জেক্ট এর ভিতর থেকে কী খুজে কাজ করে।  কিন্তু ব্রাকেট নোটেশন এ এই কাজ করা যাবে।