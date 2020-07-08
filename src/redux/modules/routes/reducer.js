import produce from 'immer';

const initalState = [
    {
        path: "Home",
        current: true
    },
    {
        path: "Navigate[Genders]",
        current: false
    },  
    {
        path: "Gender",
        current: false,
        body: {
            genderSelected: ""
        }
    },
    {
        path: "Playlist",
        current: false,
        body: {
            playlistSelected: 0,
        }
    },
    {
        path: "Search",
        current: false,
    },
    {
        path: "Recent Played",
        current: false,
    },
    {
        path: "Liked musics",
        current: false
    },
    {
        path: "Playlist user",
        current: false,
        body: {
            playlistSelected: 0
        }
    }
];

export default function routes(state = initalState, action)
{   
    switch(action.type)
    {
        case '@route/NAVIGATE_REDUCER':
            return produce(state, draft => {
                const { path, prop } = action.payload;

                const newState = draft.map(index => {
                    if(index.path === path && path === "Playlist")
                    {
                        index.current = true;
                        index.body.playlistSelected = prop;
                    } 
                    else if(index.path === path && path === "Gender")
                    {
                        index.current = true;
                        index.body.genderSelected = prop;
                    } 
                    else if(index.path === path && path === "Playlist user")
                    {
                        index.current = true;
                        index.body.playlistSelected = prop;
                    } 
                    else if(index.path === path) {
                        index.current = true;
                    } 
                    else {
                        index.current = false;
                    };
                });
                
                draft = newState;
            });  
        default: 
            return state;
    }
};