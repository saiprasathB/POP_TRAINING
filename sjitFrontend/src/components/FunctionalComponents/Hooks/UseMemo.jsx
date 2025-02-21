import React, { useState,useMemo } from 'react';
const UseMemo = () => {
    var [num, setNum] = useState(0);
    var[theme,setTheme] = useState(true);
    var styling={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    }


    function doubleNumber(num){
        return num*2;
    }
    function slowFunction(num){
        for(let i=0;i<=10000000000;i++){}
        return num*2;
    }
        return(
          <>
          
            <div style={styling}>
            <button onClick={()=>setTheme(!theme)} >DarkMode</button>
                <h1>
                    Use Memo
                </h1>
                Number Box : <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
                <h2>Number is : {num}</h2>
                <h2>Double Number is : {doubleNumber(num)}</h2>
                 
                 <h2>Number is :{slowFunction(num)}</h2>

            </div></> 
        )
}
export default UseMemo;