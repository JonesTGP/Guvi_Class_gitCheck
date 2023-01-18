
// getting all records
fetch("https://63539e82ccce2f8c02f9ceee.mockapi.io/api")
.then((data)=>{console.log(data); return data.json()})
.then((data)=>{console.log(data);return data})
// .then((data)=>{fun(data)});

function fun(data){
  let arr=data.map((x)=>{return x.name})
  console.log(arr); return arr}


// .then((data)=>{console.log(data);return data})

  // setTimeout(() => {
  //   console.log(fun())
  // }, 1000); 





// POST insert new data
const req_body ={avatar:"https://cloud",createdAt:"2022",id:"111",name:"AAAA"};

fetch("https://63539e82ccce2f8c02f9ceee.mockapi.io/api",{method:'POST',
headers:{'Content-Type':"application/json"},
body: JSON.stringify(req_body)})

.then((data)=>{return data.json()})
.then((data)=>{console.log(data)})

fetch("https://63539e82ccce2f8c02f9ceee.mockapi.io/api")
.then((data)=>{return data.json()})
.then((data)=>{console.log(data);return data})

let imgg=document.createElement("img");
document.body.appendChild(imgg);
imgg.src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg";