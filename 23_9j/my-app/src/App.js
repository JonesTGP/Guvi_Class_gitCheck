import './App.css';
import primg1 from "./images/logo-og.png";
import {useState} from "react"

export default function App() {
  
function Msg1(prop) {
  return (
    <div>
      <img className="profileimg" src={prop.img1} alt={"profimg"} />
    </div>
  );
}
function Msg2({nm,ppl}) {
  return (
    <div>
    <h1>{nm}--{ppl}</h1>
  </div>
  );
}
// function Msg2(prop) {
//   return (
//     <div>
//       <h1>{prop.nm}--{prop.ppl}</h1>
//     </div>
//   );
// }

function Counterbtn1(){
  let count=0
  const [cval,setcvalfun]=useState(count);
  return(
  <div>
    <button className="btn" onClick={()=>setcvalfun(cval+1)} >
     👍 {cval}
    </button>
  </div>
  )
}
// function Addbox(){

// }

function Colorbox1(prop){
  const style2={marginTop:"10px", backgroundColor: prop.color1, borderRadius:"5px" ,margin: "auto auto", height: "50px", width:"200px"}
  return(
    <div style={style2}></div>
  )
}
// function DisplauyIO(){
//   let iio = document.getElementById("colorinput").value
//     return (console.log(iio))
// }

function Colorio(){
  const[color1,colorfun1]= useState("gray")
  const stylecolor1 = {backgroundColor: color1, borderRadius:"10px",border:"solid black 2px" ,height: "50px", width:"200px", color:"white"}

  let colorlist1= [];
  const[colorlist2,colorfun2]= useState(colorlist1)

  
    return(
    <div>
       
      <div>
        <input id="colorinput" value={color1} onChange={(event)=>{colorfun1(event.target.value)
        // ;DisplauyIO()
        // alert(event.target.value.charAt(event.target.value.length-1));
        }}
        style={stylecolor1} type="text"  placeholder='BG color'/>
        
        
        
        <button style={{height:"50px"}} onClick={()=>{colorfun2([...colorlist2,color1])}}>Add color box</button>
      </div>
      
      {colorlist2.map((clrar, index)=>{return(<Colorbox1 key={index} color1={clrar}/>)})}
      <span id="result11">hi</span>
    </div>)
}



let namess=["1.jones","2.jeni","4.mom"]

  return (
    <div className="App">
      <Counterbtn1/>
      <Counterbtn1/>
      <Colorio/>
      
      <Msg1 img1="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Msg1 img1={primg1} />

      {namess.map((nams, index)=>{return(
      <Msg2 key={index} nm={nams} ppl={"member-"+(nams.charAt(0))} />)})}
      
      <h1>Jones</h1>
      <div>
        <img
          className="profileimg"
          src="https://reactjs.org/logo-og.png"
          alt=""
        />
      </div>
      <div>
        <img style={{ width: "300px" }} src={primg1} alt="" />
      </div>
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}


