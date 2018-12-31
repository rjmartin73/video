import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const rederedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div className='ui relaxed divided list'>{rederedList}</div>;
};

export default VideoList;
