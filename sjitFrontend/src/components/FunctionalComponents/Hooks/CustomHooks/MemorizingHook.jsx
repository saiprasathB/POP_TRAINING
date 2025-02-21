import { useEffect, useState } from "react";

const useMemorizingHook = (key,value) => {
    var[text,setText] = useState(()=>{
        var jsonvalue = localStorage.getItem(key);
        if(jsonvalue!==null){
            return JSON.parse(jsonvalue);
        }
            return value
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(text))
    },[key,text])

    return [text,setText]
}
export default useMemorizingHook;