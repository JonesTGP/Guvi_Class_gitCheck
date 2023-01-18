// let  arr=[10,20,30,40,50];
// let total= new Promise((resolve)=>{
//   var add=0;
//   for (let i=0;i<arr.length;i++)
//   add+=arr[i];
//   resolve({add})
// });


// let avg= promise.resolve({})


// console.log(total.then((data)=>{console.log(data)})
//                  .catch((data)=>{console.log(data)}));
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);