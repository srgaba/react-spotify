export function signInRequest(email, password)
{
    return{
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password }
    };
};

export function signInSucess(token, user)
{
    return{
        type: '@auth/SIGN_IN_SUCESS',
        payload: { token, user }
    };
};

