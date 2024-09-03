import { ADD_TO_STEVE_LIST, REMOVE_FROM_STEVE_LIST } from "../actions"

const initialState = {
    steveList: {
        content: [],
    },
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_STEVE_LIST:
            return {
                ...state,
                steveList: {
                    ...state.steveList,
                    content: [...state.steveList.content, action.payload], // :D
                },
            }

        case REMOVE_FROM_STEVE_LIST:
            return {
                ...state,
                steveList: {
                    ...state.steveList,
                    content: state.steveList.content.filter((steve, i) => i !== action.payload && action.payload !== steve._id),
                    // action.payload è l'indice da rimuovere
                },
            }

        default: {
            return state
        }
    }
}

export default mainReducer