import React, { useState, useEffect } from 'react';
import Post from './Post';
import AddVideo from './AddVideo';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/apivideo')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addVideo = (videoadd) => {
    setVideos([...videos, { ...videoadd, id: videos.length + 1 }]);
  };

  return (
    <div className='flex flex-row flex-wrap justify-start items-center'>
      {videos.map(video => (
        <Post
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channelName}
          time={video.uploadTime}
          view={video.view}
          verified={video.verified}
        />
      ))}
      <AddVideo onAdd={addVideo} />
    </div>
  );
}

export default Home;
