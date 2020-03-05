import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({ videoes, onVideoSelect }) => {
    const renderedList = videoes.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        ></VideoItem>
    });
    // console.log(renderedList);
    return <div className="ui relaxed divided list">{renderedList}</div>
}
export default VideoList;