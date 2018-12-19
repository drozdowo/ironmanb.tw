export function userTyped(val){
    return {
        type: 'USER_TYPED',
        payload: val
    }
}

export function userSearch(){
    return {
        type: 'SEARCH_START'
    }
}

export function searchFinished(payload){
    return {
        type: 'SEARCH_SUCCESS',
        payload: payload
    }
}

export function searchFailed(){
    return {
        type: 'SEARCH_FAILED'
    }
}