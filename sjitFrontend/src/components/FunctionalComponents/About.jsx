import { useState } from "react";
function About() {
    var init = 0;
    var [num,setnum] = useState(init);
   var  beg="";
    var [init,final] = useState("Hello");
   
   
    return (
       <div>
            <h1>About Page</h1>
            <h2>state is {init}</h2>
            <button onClick={()=> setnum(num-1)}>--</button>
            <h3>Updating : {num}</h3>
            <button onClick={()=> setnum(num+1)}>++</button>
            <h2>Handling Letters</h2>
            <button onChange={()=>final(beg)}  >ADD</button>

            </div>
    );
}

export default About;