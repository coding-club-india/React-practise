import React from 'react'
import {useState} from 'react'

function TextForm() {
let [text,setText] = useState("enter the Text");

  let handleToUpCase = () => {
   console.log("helllo");
   let upper = text.toUpperCase();
   setText(upper) 

  }
  let handleToLoCase = () => {
    console.log("helllo");
    let low = text.toLowerCase()
    setText(low)
 
   }
   let handleToClear = () => {
    // console.log("helllo");
    
    setText('')
 
   }
  
  let handleToText = (event) => {
    // console.log("hiii"+text);
    setText(event.target.value)
    // console.log("hiii"+setText(event.target.value));

   }
  return (
   
      <>
      <h3>Enter the text to analayze</h3>
      <div className="mb-3 my-2">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Content</label>
              <textarea className="form-control" value={text} onChange={handleToText} id="exampleFormControlTextarea1" rows="7"></textarea>
          </div>
          <div>  
          <button className='btn btn-primary mx-1' onClick={handleToUpCase} > Convert To Uppercase </button>
          <button className='btn btn-primary mx-1' onClick={handleToLoCase} > Convert To Lowercase </button>
          <button className='btn btn-primary mx-1' onClick={handleToClear} > Clear  </button>
          </div>
        
          <h2> Your Text summary</h2>
          <p> {text.split(" ").length} Words and {text.length} characters</p>
          <p> {0.008*text.split(" ").length} Read Words time</p>

          <h3>Preview</h3>
          <p>{text}</p>
    
   
          </>

   
  )
}

export default TextForm
