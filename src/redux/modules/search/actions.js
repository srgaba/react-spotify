export function setContent(body)
{
    return {
        type: "@search/SET_CONTENT",
        payload: { body }
    }
}