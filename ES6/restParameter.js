function argES5(){
    console.log(arguments);
    for(let i=0; i<arguments.length;i++){
        console.log('Argument Pass: '+arguments[i]);
    }
}

argES5('Messi','Neymah','Ronaldo');

//এখানে আমি যতটি আরগুমেন্ট পাস করেছি, তা ততবার লুপ হয়ে দেখিয়েছে। এবং এখানে আরগুমেন্টস গুলি একটা অব্জেক্ট এ থাকে।
//কিন্তু এটা es6 এর অ্যারো ফাংশনে কাজ করবে না। তখন আমাদের রেস্ট প্যারামিটার ব্যবহার করতে হয়, যা স্প্রেড অপারেটর এর মত ... । তাই আমাদের দেখে বুঝতে হবে কোনটা রেস্ট আর স্প্রেড।

/*

//নিচের কোডটি এরর শো করবে, কারন আগেই বলেছি, অ্যারো ফাংশন এ কাজ করবে না । এটা অ্যারে না হওয়ায় forEach, map, reduce, filter মেথড ও কাজ করবে না।
const argES6=()=>{
    console.log(arguments);
    for(let i=0; i<arguments.length;i++){
        console.log('Argument Pass: '+arguments[i]);
    }

}

argES6('Mbappe', 'Halland', 'Belingham'); */



//using map. not work

/* function usingMap(){
    arguments.map(function(arg){
        console.log(arg);
    })
}

usingMap('Pedri','Gavi','Lamin'); */

//কিন্তু আমরা চাইলে ম্যাপ কাজ করাতে পারি, আর্গুমেন্টস কে অ্যারে বানিয়ে।

function usingMap1(){
    console.log(arguments);
    const convertARR=Array.from(arguments);
    console.log(convertARR);

    convertARR.map(function(arg){
        console.log(arg);
    })
}
usingMap1('Lewa','Araju','Ter Stegen');



//যাই হোক এখন আসি এরো ফাংশন এ কাজ করাবো কি করে????? রেস্ট প্যারামিটার দিয়ে
//এখানে anyName টা হলো রেস্ট প্যারামিটার, এখানে আমাদের যা ইচ্ছে নাম ধরতে পারবো।

const arrowRest = (...anyName) =>{
    console.log(anyName);
    for(let i=0; i<anyName.length;i++){
        console.log('Argument Pass: '+anyName[i]);
    }
}

arrowRest('Kunde','Fermin','Raphinha');
//এখানে ফর লুপ ব্যবহার না করে map filter forEach ব্যবহার করতে পারি।






//এখানে রেস্ট পেরামিটার এর সাথে চাইলে আমরা কাস্টম প্যারামিটার ও পাস করতে পারি।
const arrowRest1 = (club,league, ...player)=>{
    console.log(`The club is ${club} of ${league}`);
    player.map(pl=>{
        console.log(`${pl} `);
    })
}

arrowRest1('Barca','Laliga','Balde','De Jong','Victor');
