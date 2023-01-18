import './App.css';
import primg1 from "./images/logo-og.png";

export default function App() {
  return (
    <div className="App">
      <Msg1 img1="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Msg1 img1={primg1} />

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

function Msg1(prop) {
  return (
    <div>
      <img className="profileimg" src={prop.img1} />
    </div>
  );
}

