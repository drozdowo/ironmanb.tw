const initialState = {
    curVal: '',
    doesNameMatch: false,
    isSearching: false,
    ironMan: {
        isIronMan: false,
        isHardCoreIronMan: false,
        isUltimateIronMan: false
    }
}

export default function(state=initialState, action){
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
            isIronMan: action.payload.isIronMan,
            isHardCoreIronMan: action.payload.isHardCoreIronMan,
            isUltimateIronMan: action.payload.isUltimateIronMan
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