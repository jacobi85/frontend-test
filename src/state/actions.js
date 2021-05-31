import * as C from './constants'

export const addSearchItemToLocalHistory = (name) => ({
    type: C.ADD_LOCAL_HISTORY_SEARCH_ITEM,
    payload: {
        name,
    },
});

export const removeSearchItemToLocalHistory = (name) => ({
    type: C.REMOVE_LOCAL_HISTORY_SEARCH_ITEM,
    payload: {
        name
    },
});

export const clearLocalHistory = () => ({
    type: C.CLEAR_LOCAL_HISTORY
});