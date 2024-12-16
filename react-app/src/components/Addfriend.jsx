import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Addfriend({onClick}) {
  let handleClick = () =>{
    onClick()
    console.log(onClick);
  }
  return (
    <PersonAddIcon onClick={handleClick}/>
  )
}

export default Addfriend