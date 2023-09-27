import { SET_SOUND, SET_START, SET_PRESENTATION, SET_DISPLAY_PORTRAIT } from "./actions";

const initialState={
    sound: false,
    start: false,
    presentation: true,
    display_portrait: false
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){

        case SET_SOUND:
            return{
                ...state,
                sound: action.payload
            }
        case SET_START:
            return{
                ...state,
                start: action.payload
            }
        case SET_PRESENTATION:
            return {
                ...state,
                presentation: action.payload
            }
        case SET_DISPLAY_PORTRAIT:
            return {
                ...state,
                display_portrait: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;