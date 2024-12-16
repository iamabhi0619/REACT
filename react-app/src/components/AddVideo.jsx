import React, { useState } from 'react';
   
const AddVideo = ({onAdd}) => {
  const defaultValue = {
    title: "",
    channelName: "",
    uploadTime: "",
    view: "",
    verified: ""
  }
  const [video, setVideo] = useState(defaultValue); 
  let handelChange = (e) => {
    setVideo({...video,
      [e.target.name] : e.target.value
    })
  }
  let handelAddVideo = (e) =>{
    e.preventDefault();
    onAdd(video)
    setVideo(defaultValue);
  }
  return (
    <div className='ml-5 bg-red-200 p-5 h-[350px]'>
      <form className='flex flex-col justify-between h-full'>
        <input type="text" name='title' placeholder='Video Title' onChange={handelChange} value={video.title}/>
        <input type="text" name='channelName' placeholder='Channal Name' onChange={handelChange} value={video.channelName}/>
        <input type="text" name='uploadTime' placeholder='Uplode Time' onChange={handelChange} value={video.uploadTime}/>
        <input type="text" name='view' placeholder='Views' onChange={handelChange} value={video.view}/>
        <div className='flex justify-between item-center align-middlel w-full'>
          <input type="radio" name='verified' id='true' value={true} onChange={handelChange} />
          <label>Varified</label>
          <input type="radio" name='verified' id='false' value={false} onChange={handelChange}/>
          <label>Not Varified</label>
        </div>
        <button className='bg-red-400' type='submit' onClick={handelAddVideo}>Submit </button>
      </form>
    </div>
  );
}
export default AddVideo;