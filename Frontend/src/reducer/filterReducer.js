
export const filterTypeReducer = (state = "audience", action) => {
    switch (action.type){
        case "GET_FILTER_TYPE":
            return action.newType;
        default:
            return state
    }
};