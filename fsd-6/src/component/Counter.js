import React,{useState} from 'react'

function Counter() {
    let [count,setCount] =  useState(0)

    function handle(){
          setCount(count+1)
          // console.log(count);
    }
    function reset(){
      setCount(0)
      // console.log(count);
  }
    function decre(){
      if(count<=0)
         return (alert('fan is off ')) 
        setCount(count-1)
      
  
     
      
  }
  
    return (
      
      <div className="App">
        <h1 style={{color: count === 0 ? 'red' : 'green'}}> Fan Speed :- {count}</h1>
        <button onClick={handle}  style={{color:count===0?'blue':'green'}}>Increment</button>
        <button onClick={decre} style={{color:count>0?'red':'blue'}}> Decrement</button>
        <button onClick={reset} style={{color:count===0?'red':'blue',backgroundcolor:count===0?'red':'blue'}}> Reset</button>
  
      </div>
      
     
    );
  }
export default Counter
