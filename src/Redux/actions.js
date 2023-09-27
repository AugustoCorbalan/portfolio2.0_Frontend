export const SET_SOUND = "SET_SOUND";
export const SET_START = "SET_START";
export const SET_PRESENTATION = "SET_PRESENTATION";
export const SET_DISPLAY_PORTRAIT = "SET_DISPLAY_PORTRAIT";

export const setSound = (status)=>{
    return function(dispatch){
        dispatch({type: SET_SOUND, payload: status})
    }
}
export const setStart = (status)=>{
    return function(dispatch){
        dispatch({type: SET_START, payload: status})
    }
}
export const setPresentation = (status)=>{
    return function(dispatch){
        dispatch({type: SET_PRESENTATION, payload: status})
    }
}
export const setDisplayPortrait = (status)=>{
    return function(dispatch){
        dispatch({type: SET_DISPLAY_PORTRAIT, payload: status})
    }
}