import { SET_SOUND, SET_START, SET_PRESENTATION } from "./actions";

const initialState={
    sound: false,
    start: false,
    presentation: true,
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
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;