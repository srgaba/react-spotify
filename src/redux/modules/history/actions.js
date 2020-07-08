export function setHistory(path, body = null)
{
    return {
        type: '@history/SET',
        payload: { path, body }
    }
};