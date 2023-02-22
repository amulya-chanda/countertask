import './App.css';
import React, { useState } from "react";

function App() {
  let [count,setcount]=useState(0)
  return(
    <div className='counter'>
      <h1>COUNTER APP</h1>
      {count}
      <div className='onclick_event'>
        <button onClick={()=>setcount(count+=1)}>increment</button>
        <button onClick={()=>setcount(count=0)}>Reset</button>
        <button onClick={()=>setcount(count-=1)}>decrement</button>
      </div>
    </div>

  )
    
  
}
export default App;