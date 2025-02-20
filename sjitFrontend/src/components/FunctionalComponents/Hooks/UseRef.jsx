
import { useEffect, useRef,useState } from "react";
const UseRef = () => {  
var[text,setText] = useState("");
var previosText = useRef();
useEffect(()=>{
    previosText.current = text;
}
,[text])

    return(

<div>
<center><h1>useRef</h1></center>
 Type Here: {" "}<input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
 <h2>Current Render {text}</h2>
 <h3>Previous {previosText.current}</h3>

{/* <button onClick={alert("GOOD bye")}> CLick me</button> */}
</div>



    )
}
export default UseRef;