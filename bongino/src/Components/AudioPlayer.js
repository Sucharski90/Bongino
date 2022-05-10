import React from 'react'
import AudioPlayerHeader from './AudioPlayerHeader'
import Actions from './playlist/Actions'
import Playlist from './playlist/Playlist'

let AudioPlayer = () => {
    return <div>
        <AudioPlayerHeader />
        <Actions />
        <Playlist />
    </div>
}

export default AudioPlayer