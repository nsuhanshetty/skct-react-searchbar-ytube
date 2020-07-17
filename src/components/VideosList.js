import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';

const VideoList = (props) => {
    return (
        // <div className="user-list">
        //     {props.videos && props.videos.map((video) => <VideoItem key={video.videoId} {...video} />)}
        // </div>

        <div className="row mb-6">
            <ul className="list-unstyled">
                {props.videos && props.videos.map((video) => <VideoItem key={video.videoId} {...video} />)}
            </ul>
        </div>);
};

const mapStateToProps = (state) => {
    return {
        videos: state
    };
};

export default connect(mapStateToProps)(VideoList);