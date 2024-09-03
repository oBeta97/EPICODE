import { ADD_TO_STEVE_LIST, REMOVE_FROM_STEVE_LIST } from "../actions"

const initialState = {
    list: []
};

const steveList = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_STEVE_LIST:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ],
            }

        case REMOVE_FROM_STEVE_LIST:
            return {
                ...state,
                list:state.list.filter((steve, i) => i !== action.payload && action.payload !== steve._id),
            }

        default: {
            return state
        }
    }
}

export default steveList