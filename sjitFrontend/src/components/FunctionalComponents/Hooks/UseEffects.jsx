import { useState } from "react"
const UseEffects = () => {  
    let[text,settext] = useState("")
    return (
        <section>
            <h1>UseEffects</h1>
            Type here: <input type="text" value={text} onChange={(e)=> settext(e.target.value)} />
            <h1>Result :{text}</h1>
            
        </section>      
    )
}
export default UseEffects