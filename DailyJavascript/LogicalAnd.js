//&&  ==> এখানে সব ভ্যালু সত্য হলে ফলাফল সত্য। কিন্তু একটিও মিথ্যা হলে ফলাফল মিথ্যা

console.log(false && true);//false
console.log(false && 'Anything');//false কারন প্রথমটাই মিথ্যা
console.log('Sakib' && 'Habib');//Habib কারন সে দ্বিতীয়টি শেষে চেক করেছে। তাই সেটি ই প্রিন্ট করবে