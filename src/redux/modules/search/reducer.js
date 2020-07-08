import produce from 'immer';

const initialState = {
    content: "",
    length: 0
}

export default function(state = initialState, action)
{
    switch(action.type)
    {
        case '@search/SET_CONTENT':
            return produce(state, draft => {
                draft.content = action.payload.body;
                draft.length = action.payload.body.length;
        });

        default: 
            return state;
    }
}