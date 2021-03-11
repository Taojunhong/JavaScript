let arr1=[1,2,3,4,{}];
// typeof判断数据类型
console.log(typeof arr1);

let str1="abcdef123456";
let arr10=Array.from(str1);
console.log(arr10);


var arr32=[1,2,3,4,5,6];
arr32.every(function(arg){
    console.log(arg);
    return false;
});
