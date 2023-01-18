//Named inport and export
import {func1,std} from "./script2.js";

console.log(func1(std));
console.log((std));

let std2={ name:"jeni",age:24,batch:"24day",marks:100,sex:"female"}

function func2(arr1,arr2){
  let std3=Object.assign(arr1,arr2)
  console.log(std3)  
}
func2(std,std2)


let std4=Object.assign(std,std2)
let std5={status:"single"}

function func3(std4,...std5){
  let arr3=[];
  arr3.push(std4,std5,"fds");
  console.log([...arr3,"hihi"]);
}
func3(std4,std5)
