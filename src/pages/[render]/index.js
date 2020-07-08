import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Player from '../../components/player';
import SFriends from '../../components/search_friends';

import Home from '../home';
import Genders from '../genders';
import Gender from '../gender';
import Playlist from '../playlist';
import Search from '../search';
import RecentPlayed from '../recentplayed';
import LikedMusics from '../likedmusics';
import PlaylistUser from '../playlistuser';

export default function(){
    const state = useSelector(state => state.routes);

    const render = () => {
        if(state[0].current)
        {
            return <Home />;
        } 
        else if(state[1].current)
        {
            return <Genders />;
        }
        else if(state[2].current)
        {
            return <Gender />;
        }
        else if(state[1].current)
        {
            return <Genders />;
        }
        else if(state[3].current)
        {
            return <Playlist />;
        }
        else if(state[4].current)
        {
            return <Search />;
        }
        else if(state[5].current)
        {
            return <RecentPlayed />;
        }
        else if(state[6].current)
        {
            return <LikedMusics />;
        }
        else if(state[7].current)
        {
            return <PlaylistUser />;
        }
    };

    return(
         <>
            <SFriends />
            {render()}
            <Header />
            <Navigation />
            <Player />
        </>
    );
}
