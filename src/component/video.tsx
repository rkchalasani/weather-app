import React from "react";

import "./video.css";

const Video: React.FC = () => {
  return (
    <div>
      <video
        autoPlay
        src="assets/images/video3.mp4"
        muted
        loop
        className="bg-vid"
      >
        {/* <source  type="video/webm">
	    	<source src="http://www.w3schools.com/tags/movie.mp4" type="video/mp4"> */}
      </video>
    </div>
  );
};
export default Video;
