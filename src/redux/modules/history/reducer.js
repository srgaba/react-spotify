import produce from 'immer';

const initialState = {
    history: "Home",
    content: null
};

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case '@history/SET':
            return produce(state, draft => {
                draft.history = action.payload.path;
                draft.content = action.payload.body;
            });
        default:
            return state;
    }
};