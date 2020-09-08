import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoItem(props) {
  return (
    <>
     <li className="video__item"> 
       <ReactPlayer width="100%" controls url='https://www.youtube.com/watch?v=UOxkGD8qRB4' />
      </li> 

      <li className="video__item">
       <ReactPlayer width="100%" controls url='https://www.youtube.com/watch?v=RkID8_gnTxw' />
      </li>
    </>
  )
}

export default VideoItem;
