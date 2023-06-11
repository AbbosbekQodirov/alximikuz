import React from 'react'

function VideoGuide({ videoTitle, videoLink }) {
  return (
    <>
      <h1>{videoTitle}</h1>
      <iframe
        className="video"
        width="880"
        height="515"
        src={videoLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default VideoGuide