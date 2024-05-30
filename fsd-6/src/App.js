import React,{useState} from "react"

import './App.css';
import Counter from "./component/Counter";
import Toggle from "./component/Toggle";
import Useeffect from "./component/Useeffect";



function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Toggle/> */}
      <Useeffect/>
    </div>
  )
}

export default App


// Hooks => Apne javascript main kiye gaye changes ko vertual screen par show karane ke liye muje hooks ki jarurat hoti hain
// state ko manipulate ke liye hooks ka use hota hain 
// react page ko one time hi render karta hain 
// page ko rerender ke liye hooks ka use karte hain / page main state change karne ke liye hooks ka use hota hain / page ko dynamic karne ke liye hooks ka us ekarte hain
// first hook-> useState 

// usestate by default array return karta hain / or aap apni need regarding value ya datatype pass kar sakte hain
// use state array inside first no. par initial value hoti hain or secont main function hota hain funtion ki help through initial value update hoti hain like a sysntax
// count [count , setCount] = useState(0)

// useState, useEffect, 
