// document.getElementById("ck3").addEventListener("click",function(){return btn("blue")});
// this.table1="windowtable"
// this.table2="kitchentable"
// this.table3={garage1 : "111", garage2 : "222"};
// console.log(table1);
// console.log(table2);
// console.log(table3.garage1);
// console.log(window);

function btn(color){
  document.querySelector('#aaa').style.color = color;
}


let a = 10;
document.getElementById("ck").addEventListener("click",function(){
  console.log(`clicked ${++a}`);
});




document.getElementById("ck2").addEventListener("click",()=>{promis()})

function promis(){
  createorder()
  .then(function(oid){
    return ptp(oid)
  })
  .then((oid2)=>{
    console.log(oid2 +1)
    return (oid2+1)
  })
  .catch((err)=>{
    console.log(err.message)
    console.error(err.message)
    console.log(err)}
  )
}

function ptp(oid){
  //proceedtoPay
  console.log(oid +1)
  return (oid+1)}




cart=["apple","mango","banana"];
// console.table(cart);

function createorder(){
  const pr = new Promise(function (resolve, reject){
    
    let orderid = a;
    if(1){
      resolve(orderid)
    }
    if(0){//cart validation
      reject(new Error("cart not valid"))
    }
  });
return pr;
}




let pr1= new Promise((res,rej)=>{
  res ("game1")
})

pr1.then((data)=>{console.log(data)})
let data2=pr1.then((data)=>{return data});
console.log(data2);



let pr2=Promise.resolve("hi2")
let pr3=Promise.resolve("hi3")
// pr2.then((data)=>{console.log(data)});
// pr3.then((data)=>{console.log(data)});
Promise.all([pr2,pr3])
.then((data)=>{console.log(data)})
.catch((ddata)=>{console.log(ddata)})





let arr1=[10,10,10,10,10];
let padd = new Promise((res)=>{
  let op= arr1.reduce((acc,cur)=>{return acc+=cur},0)
  res (op)})

function avgf(data){
  return new Promise((res)=>{
    res (avg= data/arr1.length)})}  

padd
.then((data)=>{console.log(`total ${data}`); return data})
.then((data)=>{return avgf(data)})
.then((data)=>{console.log(`average ${data}`)})


//-----------------------------sum of all the array----
    //var arr=[1,2,3,4,5,6]
    //console.log(arr.length)
    /*function add(arr){
      var summ=0
      //for (i=0;i<arr.length;i++){
      //  summ += arr[i]
      //}
      
      for(var val of arr){
        summ=summ+val
      }
      return (summ)
    }*/
    
    /*
    res=function(arr){
      var summ=0
      for(var val of arr){
        summ=summ+val
      }
      return (summ)
    }
    console.log(res([1,2,3,4,5,6]))
    */

    /*
    res=(arr)=>{
      var summ=0
      for(var val of arr){
        summ=summ+val
      }
      return (summ)
    }
    console.log(res([1,2,3,4,5,6]))
    */


    //---------reduce function in array-----------------------------
    // let arr=[
    // {pear:"name",vias:10,area:"loc"},
    // {pear:"name",vias:20,area:"loc"},
    // {pear:"name",vias:20,area:"loc"},
    // {pear:"name",vias:30,area:"loc"}];
    // console.log(arr)

    //---------------------------how many ppl with same age
    // let output ={};
    // output = arr.reduce((ac,cur)=>{
    //   if (ac[cur.vias]) {
    //     ac[cur.vias]= ++ac[cur.vias];
    //   }
    //   else{
    //     ac[cur.vias]=1;
    //   }
    //   return ac
    // },{});
    // console.log(output);
    