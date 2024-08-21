// Logical or ||  ==> এখানে সে সত্য খুজে, সত্য পাইলেই আর সেটাই এক্সিকিউট করে, আর চেক করে না।
/* 
যেকোনো এক্সপ্রেশন ই সত্য, 
মিথ্যার মধ্যে আছে
1. false
2. '', "", ``
3. null
4. NaN
5.undefine
6. 0
7. !anythingTrue
*/

console.log(false || true);//true
console.log(false||'AnyThing');//anything
console.log(false||!'AnyThing');//false
console.log(undefined||'Go to visit');//go to visit