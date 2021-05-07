
import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './Components/VideoCard/VideoCard';
import db from './firebase'
function App() {

  const [reels, setReels] = useState([])
  useEffect(() =>{
    //snapshot is like taking a picture of real time data from db.. the snapshot is refreshed each time the db gets updated
    db.collection('reels').onSnapshot(snapshot => 
      setReels(snapshot.docs.map(doc => doc.data())) )
     }, [])
  return (
    //following BEM naming conventions
    <div className="app">  
      <div className="app__top">
        <div className="app__logo">
            {/*logo at top*/}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
             alt="" />
        </div>
       <h1>Reels</h1>
        {/*text reels */}
      </div>
      <div className="app__videos">
          {/* scrollable container */}  
          { reels.map(({channel, avatarSrc, likes, shares, song, url}) => (
            <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares} />
          ))}
         
      </div>
  
      
     
    </div>
  );
}

export default App;
