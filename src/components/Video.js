import React from 'react';

import './Video.css';
import VideoItem from './VideoItem';


function Video() {
  return (
    <div className="video">
       <h1>OFFICIAL K/DA VIDEO CLIPS</h1>
       <div className="video__container">
         <div className="video__wrapper">
            <ul className="video__items"> 
              <VideoItem
                
                />
               
            </ul>
         </div>
        </div>
    </div>
  )
}

export default Video;