const info = [
    'Habib',
    25,
    'Teacher'
];

const name =info[0];
const age = info[1];
const profession = info[2];
console.log(name,age,profession);


const [name6,age6,profession6]=info;
console.log(name6,age6,profession6);

//লক্ষ্য করলে দেখা যায়, ইনফো এরের প্রত্যেক টা ইলিমেন্ট যদি আলাদা আলাদা ভ্যারিয়েবল এ স্টোর করতে হয়, তাহলে ডি স্ট্রাকচারিং এর মাধ্যমে খুব সহজেই করা যায়।



//object destructing
//এক্ষেত্রে আমারা অব্জেক্ট এর প্রপার্টির নাম দিয়েই ভ্যালু স্টোর করতে পারি, তবে চাইলে অন্য নামেও করতে পারে, নিচে তা দেয়া আছে।

const academic = {
    ssc: 2015,
    hsc: 2017
}

const {ssc,hsc}=academic;
console.log(ssc, hsc);


const {ssc:sscYear, hsc:hscYear}=academic;
console.log(sscYear,hscYear);

//অব্জেক্টের ভিতর অব্জেক্ট থাকলে

const obj1={
    anotherObj:{
        newObj:{
            title:"JS"
        }
    }
}
const {anotherObj:{newObj: {title}}}=obj1;
console.log(title);

//without property name
const {anotherObj:{newObj: {title:customTitle}}}=obj1;
console.log(customTitle);