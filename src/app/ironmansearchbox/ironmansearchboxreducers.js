const initialState = {
    isTyping: false,
    curVal: ''
}

export default function(state=initialState, action){
    if (action.type == "USER_TYPED"){
        return {
            ...state,
            curVal: action.payload
        }
    }

    return state;
}