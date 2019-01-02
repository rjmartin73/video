import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const rederedList = videos.map(video => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId || video.id.channelId}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{rederedList}</div>;
};

export default VideoList;
