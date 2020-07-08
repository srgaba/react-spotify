export function navigate(path, prop = null)
{
    return {
        type: "@route/NAVIGATE_MIDDLEWARE",
        payload: { path, prop }
    };
}

export function navigateReducer(path, prop = null)
{
    return {
        type: "@route/NAVIGATE_REDUCER",
        payload: { path, prop }
    };
}
