import { all, takeLatest, call, put } from 'redux-saga/effects';
import Reactotron from 'reactotron-react-js';

import { playMusicPlaylist_REDUCER } from './actions';

import api from '../../../util/api';

export function* setPlayed({ payload })
{
    const { type, body } = payload;

    switch(type)
    {
        case 'Home':
        {
            const { playlistID } = body;

            const answear = yield call(api.get, `playlist/get_playlist_especify/${playlistID}`);
            const firstMusic = answear.data.musics[0];
            const allMusics = answear.data.musics;
            const playlistImgUrl = answear.data.File.url;

            // yield call(api.post(`/playlist/set_played/${playlistID}`));
            yield put(playMusicPlaylist_REDUCER(playlistID, firstMusic, allMusics, playlistImgUrl, false));
        }
        break;

        case 'Playlist default':
        {
            const { musicID, playlistID } = body;

            const answear = yield call(api.get, `playlist/get_playlist_especify/${playlistID}`);

            const indexMusic = answear.data.musics.findIndex(music => music.id == musicID);
            const firstMusic = answear.data.musics[indexMusic];
            const allMusics = answear.data.musics;
            const playlistImgUrl = answear.data.File.url;

            // yield call(api.post(`/playlist/set_played/${playlistID}`));
            yield put(playMusicPlaylist_REDUCER(playlistID, firstMusic, allMusics, playlistImgUrl, true));
        }
        break;

        case 'Liked sons':
        {
            const { firstMusic, allMusics, playlistImgUrl } = body;

            yield put(playMusicPlaylist_REDUCER(0, firstMusic, allMusics, playlistImgUrl, true));
        }
        break;

        case 'Playlist user':    
        {
            const { playlistID: playlistUserID, musicID } = body;

            const answear = yield call(api.get, `/users/playlist/getespecify/${playlistUserID}`);

            const { Music: firstMusic } = answear.data.allMusics.find(index => index.Music.id === musicID);
            const { url: playlistImgUrl } = firstMusic.Playlist.File;

            const formattedMusics = answear.data.allMusics.map(index => {
                const { Music } = index;

                return Music;
            });
            const allMusics = formattedMusics;

            
            yield put(playMusicPlaylist_REDUCER(0, firstMusic, allMusics, playlistImgUrl, true));
        }
        break;
    }
}

export default all([
    takeLatest('@player/PLAY_MUSIC_PLAYLIST_MIDDLEWARE', setPlayed)
])