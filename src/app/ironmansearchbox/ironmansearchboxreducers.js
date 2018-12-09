const initialState = {
    isTyping: false,
    curVal: ''
}

export default function(state=initialState, action){
    if (action.type == "CHANGE_VAL"){
        return {
            ...state,
        }
    }

    return state;
}