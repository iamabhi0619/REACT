import React, { useState } from 'react'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';


function Post({id,title,channel,time,view,varified}) {
  const [playing, setPlaying] = useState(false);
  let hendelPlayPause = () => {
    if (playing) {
      console.log("Video is being Played..!!");
    }else{
      console.log("Viedo has been paused/stop");
    }
    setPlaying(!playing);
  }
  return (
    <div className={`flex flex-col justify-between ${varified ? "bg-green-200" : "bg-blue-200"} h-[350px] pb-2 w-[250px] m-2.5`}>
      <div>
        <img src={`https://picsum.photos/id/${id}/250/200`} alt='thumb' />
      </div>
      <div className='ml-3'>
        <h1 className='truncate font-bold text-2xl'>{title}</h1>
        <h2 className='font-medium'>{channel}</h2>
      </div>
      <div className='ml-3'>
        <p className='font-light text-slate-500'>uploded {time} ago | {view} views</p>
      </div>
      <div className='ml-3'>
        <Button variant='contained' startIcon={playing ? <PauseIcon/> : <PlayArrowIcon/> } onClick={hendelPlayPause}>{playing ? "Pause":"Play"}</Button>
      </div>
    </div>
  )
}
export default Post