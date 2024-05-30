// import React from 'react'
import React, { useEffect , useState } from 'react'


function Useeffect() {
  let [Title,setTitle] = useState(1)

  

//   useEffect(()=>{
//     setInterval(()=>{
//         setTitle(Title+1)
//           },1000)
//   },[Title])

useEffect(()=>{
 fetch('')
 .then(res=>res.json())
 .then(res=>setTitle(res))
 console.log(res,'llllllllllllll');

}, [])

const show=()=>{

}
  return (
    <div>
   <button onClick={show}>Show data</button>
    <div> {Title}</div>

    </div>
  )
}

export default Useeffect
