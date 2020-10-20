
export const filterTypeReducer = (state = "audience", action) => {
    switch (action.type){
        case "GET_FILTER_TYPE":
            return action.newType;
        default:
            return state
    }
};

export const facultyReducer = (state = [], action) => {

    switch (action.type){
        case "SET_CURRENT_FACULTY":
            return action.faculty;
        default:
            return state;
    }
};

