const initialState = {
    curVal: '',
    doesNameMatch: false,
    isSearching: false,
    player: {}
}

export default function(state=initialState, action){
    
    console.log(action);

    if (action.type === "USER_TYPED"){
        return {
            ...state,
            curVal: action.payload
        }
    }

    if (action.type === "SEARCH_START"){
        return {
            ...state,
            isSearching: true
        }
    }

    if (action.type === "SEARCH_SUCCESS"){
        return {
            ...state,
            isSearching: false,
            player: action.payload
        }
    }

    if(action.type === "SEARCH_FAILED"){
        return {
            ...state,
            isSearching: false,
            doesNameMatch: false
        }
    }

    return state;
}