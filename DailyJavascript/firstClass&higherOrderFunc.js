/* //js এ ফাংশনকে first class function বলা হয়।

first class function: 
=>ফাংশনকে অন্য ফাংশনের আর্গুমেন্ট হিসেবে পাস করতে পারবেন। 
=>এক ফাংশন থেকে আরেকটা রিটার্ন করতে পারবেন। 
=>ফাংশঙ্কে ভ্যারিয়েবল হিসেবেও স্টোর করতে পারবেন।

 */


//ফাংশনকে আরকেটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা।
function callMyName(name,callback){
    let myAge=22;
    callback(myAge);
    console.log(`Is it interesting? yes it is Mr. ${name}`);}

    function hello(age){
        console.log(`I am passed through argument and my age is: ${age}`);
    }

    callMyName('Habib Ullah', hello)


    //ফাংশন থেকে ফাংশন রিটার্ন করাঃ

    function welcomeMSG(name){
        console.log(`Welcome Mr. ${name}`);

        return function option(menu){
            console.log(`Do you like ${menu}, Mr. ${name}`);
        }
    }
    welcomeMSG('Habib')('Burger');

    //ভ্যারিয়েবল এ স্টোর
    let aFunc = function(name){
        console.log(`I am a simply a function and my name is ${name}`);
    }

    let anotherFunc = aFunc;
    anotherFunc(`Habib`)