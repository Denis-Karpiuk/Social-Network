import React from 'react';
import { connect } from 'react-redux';
import VideoUsers from './VideoUsers';
import {getUsersVideoPage} from '../../redux/Video-Reducer'

class VideoClassContainer extends React.Component {
    componentDidMount(){
        this.props.getUsersVideoPage(2,10)
    }
    render(){
        return (
            <VideoUsers users={this.props.videoPage.users} />
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        videoPage: state.videoPage
    }
}

const VideoContainer = connect(mapStateToProps, {getUsersVideoPage})(VideoClassContainer)
export default VideoContainer;