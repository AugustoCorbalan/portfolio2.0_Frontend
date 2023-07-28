export const SET_SOUND = "SET_SOUND";
export const SET_START = "SET_START";

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