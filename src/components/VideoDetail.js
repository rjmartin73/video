import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId ||
    video.id.channelId}`;
  return (
    <div className="">
      <div className="ui embed">
        {" "}
        <iframe
          title="video player"
          src={videoSrc}
          allow="accelerometer; autoPlay; fullscreen;"
        />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
