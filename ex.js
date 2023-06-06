// const prompt=require("prompt-sync")();
// var a=prompt("enter a string:");
// for(var i=0;i<a.length;i++)
// {
//     if(i==1)
//     {
//         a=a.replace(a[i],'Z');
//     }
// }
// console.log(a);
function greet() {
    const date=new Date();
    console.log(date.getHours());
     console.log(date.getMinutes());
      console.log(date.getSeconds());
      console.log(date.getMilliseconds());
}
console.log("Hi");
setTimeout(greet,1000);


