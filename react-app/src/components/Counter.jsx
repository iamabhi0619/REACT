import React, { useState } from 'react'

function Post() {
  const [number, setNumber] = useState(1);

  let handelClick = (e) =>{
    console.log(number);
    setNumber(number+1)
    console.log(e); 
  }
  return (
    <div className='flex bg-green-300 h-40 m-10'>
     <div className='flex flex-col justify-between p-5 text-center text-xl'>
      <p>Counter:- <span className='text-red-950'>{number}</span></p>
      <button className='bg-red-300 p-2 rounded-xl' onClick={handelClick}>COUNT</button>
     </div>
    </div>
  )
}

export default Post