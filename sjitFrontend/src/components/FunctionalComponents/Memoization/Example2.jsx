import { useState } from "react"
const Example2=()=>{
    var [text,settext]=useState("");
    return(
        <>
        <h1>Exapmle 2 for Memoziation</h1>
        <input type="text" value={text}onChange={(e)=>settext(e.target.value)}/>
        <h2>This is the Number {text}</h2>
        </>
    )
}
export default Example2;
