export function playMusicPlaylist(type, body)
{
    return {
        type: '@player/PLAY_MUSIC_PLAYLIST_MIDDLEWARE',
        payload: { type, body }
    };
};

export function playMusicPlaylist_REDUCER(playlistID, firstMusic, allMusics, imgUrl, overwrite)
{
    return {
        type: '@player/PLAY_MUSIC_PLAYLIST',
        payload: { playlistID, firstMusic, allMusics, imgUrl, overwrite }
    }
}

export function playPausePlayer()
{
    return {
        type: '@player/PLAY_PAUSE_PLAYER'
    };
};

export function nextPlayer()
{
    return {
        type: '@player/NEXT_MUSIC_PLAYER'
    };
};