import React from "react";

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading....</div>;
    }

    const videoID = video.id.videoID;
    const URL = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="responsive-embed-item" src={URL}>
                </iframe>
            </div>
            <div className="details">
                <div>
                    {video.snippet.title}
                </div>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;