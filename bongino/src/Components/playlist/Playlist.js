import React, {useContext} from 'react'
import {song_list} from '../../context/songs'

let Playlist = () => (
    <div className="playlist">
        <ul className="loi">
            {
                song_list.map(
                    (song, i) => 
                    <li className='songContainer'>
                        <div className="tmbn_song">
                            <i className="fas fa-play"></i>
                        </div>
                        <div className="songmeta_playlist">
                            <span className="songname">{song.title}</span>
                            <span className="songauthors">{song.artistName}</span>
                        </div>
                        
                    </li>
                )
            }
        </ul>
    </div>
)

export default Playlist