import { useState } from "react"
const Example1=()=>{
    var [number,setnumber]=useState(0);
    return(
        <>
        <h1>Exapmle 1 for Memoziation</h1>
        <input type="number" value={number}onChange={(e)=>setnumber(e.target.value)}/>
        <h2>This is the Number {number}</h2>
        </>
    )
}
export default Example1;
