import { SET_SOUND, SET_START } from "./actions";

const initialState={
    sound: false,
    start: false,
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
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;