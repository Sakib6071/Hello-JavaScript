/* es6 এ স্ট্রিং এর কিছু নতুন মেথড আসছে, খুব ই কাজের কিছু মেথডঃ

১। startsWith: একটা স্ট্রিং কোনো স্পেসিফিক ক্যারিক্টার/স্ট্রিং দিয়ে শুরু হয়েছে কিনা, তা চেক করতে। বুলিয়ান ভ্যালু রিটার্ন করবে(true/false).

২। endsWith: একটা স্ট্রিং কোনো স্পেসিফিক ক্যারিক্টার/স্ট্রিং দিয়ে শেষ হয়েছে কিনা, তা চেক করতে। বুলিয়ান ভ্যালু রিটার্ন করবে(true/false) 

৩। includes: একটা স্ট্রিং এ কোনো স্পেসিফিক ক্যারিক্টার/স্ট্রিং আছে কিনা, তা চেক করতে। বুলিয়ান ভ্যালু রিটার্ন করবে(true/false) 

৪। repeat: একটা স্ট্রিং কে নির্দিষ্ট কয়েকবার রিপিট করাতে। 
*/

const str = `My name is Habib`
console.log(str.startsWith(`My`));
console.log(str.startsWith(`my`)); //false

console.log(str.endsWith('Habib'));
console.log(str.endsWith('Sakib'));//false

console.log(str.includes('is'));
console.log(str.includes('was'));//false

console.log(str.repeat(5));



//more
console.log(`I always want to say ${`Rabbe Jedni Elma. `.repeat(3)}`);

