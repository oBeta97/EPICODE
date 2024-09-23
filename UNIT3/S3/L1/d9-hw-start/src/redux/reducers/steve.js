import { GET_STEVE } from "../actions";

const initialState = {
    list: []
};

export const steve = (state = initialState, action) => {

    switch (action.type) {

        case GET_STEVE:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ],
            }

        default: {
            return state
        }
    }
}
