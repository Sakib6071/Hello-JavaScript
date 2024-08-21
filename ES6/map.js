//its Map, not map(array method)

//This is a Data Structure

const habibInfo = new Map();
//হয়ে গেলো হাবিবইনফো নামে একটা ম্যাপ, এখানে কী ও ভ্যালু থাকে।

habibInfo.set('fullName','Md. Habib Ullah Mezbah Sakib');
habibInfo.set('age',20);
console.log(habibInfo);

console.log(habibInfo.get('fullName'));

console.log(habibInfo.has('age'));//true
console.log(habibInfo.has('school'));//false

console.log(habibInfo.size); //2

habibInfo.forEach((value,key)=>console.log(`Key is: ${key} and the value is: ${value}`));

habibInfo.delete('age');
console.log(habibInfo);

habibInfo.clear();
console.log(habibInfo);
