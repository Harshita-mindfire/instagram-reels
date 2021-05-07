import React, {useState, useRef} from 'react'
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoHeader from '../VideoHeader/VideoHeader';
import './VideoCard.css'
import video from '../../video.mp4'

function VideoCard({url, likes,shares, channel, song, avatarSrc}) {
    const [isVideoPlaying, setIsVideoPlaying] =  useState(false)
    const videoRef = useRef(null);
    const onVideoPress = ()=>{
        if(isVideoPlaying){
         videoRef.current.pause();
         setIsVideoPlaying(false)
        }
        else{
             videoRef.current.play();
             setIsVideoPlaying(true);
        }
    }
    return (
    
            <div className="videoCard">
                <VideoHeader />
                <video className="videoCard__player"
                ref={videoRef}
                onClick={onVideoPress}
                src='https://storage.googleapis.com/veed-docs/sample-video.mp4'
                loop
                />
                <VideoFooter 
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                likes={likes}
                shares={shares}/>
            </div>
    
    )
}

export default VideoCard
