import produce from 'immer';

export default function user(state = { }, action)
{
    switch(action.type)
    {
        case '@auth/SIGN_IN_SUCESS':
            return produce(state, draft => {
                draft.profile = action.payload.user;
            });

        default: 
            return state;
    }
};