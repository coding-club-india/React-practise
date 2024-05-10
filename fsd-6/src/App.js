import React,{useState} from "react"

import './App.css';


function App() {

   let [count,setCount] =  useState(0)

  function handle(){
        setCount(count+1)
        // console.log(count);
  }
  function decre(){
    if(count>0){
      setCount(count-1)
    }

    if(count==0){

    }
    
}

  return (
    
    <div className="App">
      <h1 style={{color: count === 0 ? 'red' : 'green'}}> Fan Speed :- {count}</h1>
      <button onClick={handle}>Increment</button>
      <button onClick={decre}> Decrement</button>
    </div>
    
   
  );
}

export default App;


// state ko manipulate ke liye hooks ka use hota hain 
// react page ko one time hi render karta hain 
// page ko rerender ke liye hooks ka use karte hain / page main state change karne ke liye hooks ka use hota hain / page ko dynamic karne ke liye hooks ka us ekarte hain
// first hook-> useState 

// usestate by default array return karta hain / or aap apni need regarding value ya datatype pass kar sakte hain
// use state array inside first no. par initial value hoti hain or secont main function hota hain funtion ki help through initial value update hoti hain like a sysntax
// count [count , setCount] = useState(0)
