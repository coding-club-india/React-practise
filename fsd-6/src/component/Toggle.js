import React, { useState } from 'react'
import '../css/Toggle.css'

function Toggle() {
  let [IsBool,setIsBool]= useState( false )

  return (
    <div className='hh' style={{ backgroundImage:IsBool?'url(https://tse2.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api&P=0&h=180)':''}}>

        {/* <img style={{height:'10rem'}} src="https://wallpapercave.com/wp/wp2649231.jpg" alt="" /> */}


      <button onClick={()=>{setIsBool(!IsBool)}}> { IsBool?'Hide':'Show' }</button>
    </div>
  )
}

export default Toggle
