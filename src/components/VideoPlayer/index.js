import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://www.youtube.com/embed/ZgqwjeGj4nw'
const VideoPlayer = () => (
  <div className="video-container">
    <div className="responsive-container">
      <ReactPlayer url={videoURL} />
    </div>
  </div>
)
export default VideoPlayer
