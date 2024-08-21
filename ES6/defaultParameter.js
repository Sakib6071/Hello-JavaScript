//কোনো ফাংশন এ যদি আমরা ডিফল্ট প্যারামিটার এর ভ্যালু দিয়ে দেই, তাহলে আমাদের ফাংশন কল করার সময় আরগুমেন্ট না দিলে সেই প্যারামিটার এ সেট করা ভ্যালু ই প্রিন্ট হবে। *es5 এ অনেক কস্ট করে করা লাগতো

const defPara =(name="Habib", age=99)=>{
    console.log(`my name is ${name} and I am ${age} years old`);
}
defPara();
defPara('Sakib');
defPara(undefined,22);
defPara('Mezbah',15);

/* 

=== OUTPUT ===
my name is Habib and I am 99 years old
my name is Sakib and I am 99 years old
my name is Habib and I am 22 years old
my name is Mezbah and I am 15 years old

*/