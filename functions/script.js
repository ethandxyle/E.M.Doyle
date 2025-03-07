//function
// function greet(name){
//     console.log("Hello,"+ name)
// }
// greet("Alice")
//anonymous functions
// let add = function (a,b){
//     return a+b;
// };
// console.log(add(3,5));

// let squares2 = function (num){
//     return num*num
// }
// console.log(squares2(7))

//converted to fat arrow
// const squares2= (num) =>{
//     return num*num
// }
// console.log(squares2(7))

//convert to a fat arrow, with implied return
//multiple lines
// const area= (num1,num2=4) => num1*num2
// console.log("area:", area(2))

//convert to a fat arrow, with implied return
//multiple lines
const squares5= (num)=>num*num;
console.log(squares5(12));