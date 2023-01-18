// // const paragraph = document.createElement("p");
// // paragraph.innerText = "JS generated content";

// // const inputUserName = document.createElement("input");
// // inputUserName.setAttribute("placeholder", "Enter your email");
// // inputUserName.setAttribute("type", "email");

// // const div = document.createElement("div");
// // // div.append(paragraph, inputUserName);
// // // div.append("this is div");
// // const a = div.appendChild(paragraph);

// // console.log(a);
// // document.body.append(div);

// const clickHandler = (name) => {
//   return () => console.log("from click event " + name);
// };
// //const clickHandler = () => console.log("from click event " + name);

// let btn = document.createElement("button");
// btn.textContent = "submit";

// btn.addEventListener("click", clickHandler("gopi")());

// document.body.appendChild(btn);

// lanelun.i
// form.appendChild(labelun);

// let input = document.createElement("input");
// input.type = "text"; // you can also use setAttribute method
// input.setAttribute("id", "txt");
// form.appendChild(input);

// let button = document.createElement("button");
// button.textContent = "Register";
// form.appendChild(button);

// const formHandler = (event) => {
//   event.preventDefault();
//   const v = document.getElementById("txt").value;
//   console.log(v);
// };

// form.addEventListener("submit", formHandler);

// document.body.appendChild(form);





//----------------------------------creat form-----------
const form1 = document.createElement("form");

// ---------------------------------------line break
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");

//----------------------------------------labels--------------------
//username
const lun = document.createElement("label");
lun.setAttribute("for","idun");
lun.textContent="User Name:";

//password
const lpw = document.createElement("label");
lpw.setAttribute("for","idpw");
lpw.textContent="Password:";

//conf password
const lcpw = document.createElement("label");
lcpw.setAttribute("for","idcpw");
lcpw.textContent="Re-enter Password:";

//--------------------------------------Input fields--------------------------
//username
const un = document.createElement("input");
un.type="text";
un.setAttribute("placeholder","Enter username");
un.setAttribute("id","idun");
un.setAttribute("name","idun");

//password
const pw = document.createElement("input")
pw.type="text";
pw.setAttribute("placeholder","Enter Password");
pw.setAttribute("id","idpw");
un.setAttribute("name","idpw");

//cnf password
const cpw = document.createElement("input")
cpw.type="text";
cpw.setAttribute("placeholder","re-enter password");
cpw.setAttribute("id","idcpw");
un.setAttribute("name","idcpw");

//---------------------------------button-----------------------
let btn=document.createElement("button");
btn.textContent="Register";


//-------------------------------append to form-----------------
form1.append(lun,un,br1,lpw,pw,br2,lcpw,cpw,br3,btn);
document.body.append(form1);

//-----------------------------get values----------------------------
let vun = document.getElementById("idun").value;
console.log(vun);

//--------------------------------creat object------------------------------