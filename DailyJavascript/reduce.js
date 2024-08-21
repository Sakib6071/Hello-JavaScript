var arr = [1,2,3,4];

var total = arr.reduce(function(sum,item){
      sum+=item;
      return sum
},0);
console.log(total);
/* এখানে দুইটি প্যারামিটার নেয়া যায়। যার প্রথমটি স্টেট ভ্যারিয়েবল। যেমন এখানে সাম। আর সাম এর ভ্যালু শেষে সেট করা হয়েছে ০। এখানে চাইলে যত ইচ্ছে সেট করা যাবে। */


/* //es6
var total = arr.reduce((sum,item)=>sum+=item,0)
console.log(total); */

