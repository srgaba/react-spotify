import produce from 'immer';

export default function auth(state = {}, action)
{
    switch(action.type)
    {
        case '@auth/SIGN_IN_SUCESS':
            return produce(state, draft => {
                draft.token = action.payload.token;
                draft.signed = true;
        });

        default: 
            return state;
    }
};