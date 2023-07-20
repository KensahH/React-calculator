import React from "react";
import "./style.css";
import{useState} from "react";

export default function App() {
  const[value, setValue] = useState("")
  return (
    <div>
      <h3> simple calculator</h3>
      <div className="container">
        <div className="calculator">
          <form action ="">
          <input className="input" type="text" value={value}></input>

<div className="row1">
<input className="ac"onClick={e => setValue("")}  type="button" value="AC"></input>
<input className="de" onClick={e=> setValue(value.slice(0, -1))} type="button" value="DE"></input>
<input  className="dot" onClick={e => setValue(value + e.target.value)}type="button" value="."></input>
<input className="slash" onClick={e => setValue(value + e.target.value)} type="button" value="/"></input>

</div>
<div className="row2">
<input  className="seven" onClick={e => setValue( value + e.target.value)}type="button"  value="7"></input>
<input className="eight" onClick={e=> setValue(value + e.target.value)} type="button"  value="8"></input>
<input className="nine"  onClick={e => setValue(value + e.target.value)}type="button"  value="9"></input>
<input className="times" onClick={e=> setValue(value + e.target.value)}type="button"  value="*"></input>

</div>
<div className="row5">
<input onClick={ e=> setValue(value + e.target.value)} className="four"type="button" value="4"></input>
<input   onClick={e => setValue(value + e.target.value)}className="five"type="button" value="5"></input>
<input onClick={e=> setValue(value + e.target.value)} className="six" type="button" value="6"></input>
<input  type="button" className="plus" onClick={e => setValue(value + e.target.value)} value="+"></input>
</div>

<div className="row3">
<input  onClick={e=> setValue(value + e.target.value)} className="one" type="button" value="1"></input>
<input className="two" onClick={e => setValue(value + e.target.value)} type="button" value="2"></input>
<input className="three" onClick={e => setValue(value + e.target.value)} type="button" value="3"></input>
<input className="minuse" onClick={e=> setValue(value + e.target.value)}type="button" value="-"></input>
</div>
<div className="row4">
<input className="zeros" onClick={e => setValue(value + e.target.value)} type="button" value="00"></input>
<input className="zero" onClick={e => setValue(value + e.target.value)}type="button" value="0"></input>
<input  className="equal" onClick={e=> setValue(eval(value))}type="button" value="="></input>

</div>


</form>
        </div>





      </div>
    </div>
  );
}
