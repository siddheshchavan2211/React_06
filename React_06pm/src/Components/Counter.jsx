import { useState } from "react"

const Counter=()=>{
    const [counter,setcounter]=useState(0);
    
    return(
        <div className="items-center flex ">
            <button className="bg-green-400 p-4 m-2" onClick={()=>setcounter(counter+1)} >+</button>
       <h1>{counter}</h1>
        <button className="bg-green-400 p-4 m-2 " onClick={()=>setcounter(counter-1)}>- </button>

        </div>
    )
}
export default Counter