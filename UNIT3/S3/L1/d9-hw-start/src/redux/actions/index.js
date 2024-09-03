export const ADD_TO_STEVE_LIST = 'ADD_TO_STEVE_LIST';
export const REMOVE_FROM_STEVE_LIST = 'REMOVE_FROM_STEVE_LIST';
export const GET_STEVE = 'GET_STEVE';


export const addToSteveList = (steve) => {
    return {
        type: ADD_TO_STEVE_LIST,
        payload: steve,
    }
};

export const removeFromSteveList = (i) => {
    return {
        type: REMOVE_FROM_STEVE_LIST,
        payload: i,
    }
}

export const getSteve = (query) => {
    return async (dispatch, getState) => {

        const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                const { data } = await response.json();
                
                dispatch({
                    type:GET_STEVE,
                    payload: data,
                })
                
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }

    }
}