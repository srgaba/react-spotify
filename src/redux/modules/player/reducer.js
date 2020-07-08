import produce from 'immer';
import Reactotron from 'reactotron-react-js';

const initialState = {
    state: {
        play: false,
        count: 0,
        empty: true,
        similar: false
    },
    playlistID: 0,
    playing: {
        title: '',
        artist: '',
        music_url: '',
    },
    allMusics: [],
    imgUrl: ''
};

export default function(state = initialState, action){
    switch(action.type)
    {
        case '@player/PLAY_MUSIC_PLAYLIST':
            return produce(state, draft => {
                if(
                    (draft.state.empty == true) 
                    ||
                    (draft.state.empty == false && action.payload.overwrite == true)
                    ||
                    (draft.playlistID !== action.payload.playlistID)
                )
                {
                    draft.state.play = true;
                    draft.state.empty = false;
                    draft.state.similar = false;

                    draft.playlistID = action.payload.playlistID

                    draft.playing.title = action.payload.firstMusic.title;
                    draft.playing.artist = action.payload.firstMusic.artist;
                    draft.playing.music_url = action.payload.firstMusic.File.url;

                    draft.allMusics = action.payload.allMusics;
                    draft.imgUrl = action.payload.imgUrl;
                } 
                else if(draft.state.play == true && draft.playlistID == action.payload.playlistID)
                {
                    draft.state.play = false;
                    draft.state.similar = true;
                } 
                else if ( draft.state.play == false && draft.playlistID == action.payload.playlistID )
                {
                    draft.state.play = true;
                }
            });

        case '@player/PLAY_PAUSE_PLAYER':
            return produce(state, draft => {
                draft.state.play = !draft.state.play;
                draft.state.similar = true;
            });

        case '@player/NEXT_MUSIC_PLAYER':
            return produce(state, draft => {
                const index = draft.state.count + 1;

                if(draft.allMusics[index])
                {
                    draft.state.count = index;
                    draft.state.play = true;
                    draft.state.similar = false;

                    draft.playing.title = draft.allMusics[index].title;
                    draft.playing.artist = draft.allMusics[index].artist;
                    draft.playing.music_url = draft.allMusics[index].File.url;
                } else {
                    return;
                }
            });
        default:
            return state
    }
}