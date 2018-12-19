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

export function searchFinished(){
    return {
        type: 'SEARCH_SUCCESS'
    }
}

export function searchFailed(){
    return {
        type: 'SEARCH_FAILED'
    }
}