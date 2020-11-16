

export const getTable = (table) =>{
    return {
        type: "GET_CURRENT_TABLE", table
    }
};

export const loadFacultiesList = (addresses) =>{
    return {
        type: "LOAD_FACULTIES_LIST", addresses
    }
};

export const setActiveAudience = (address, audience, timeInterval) =>{
    return {
        type: "SET_ACTIVE_AUDIENCES", address, audience, timeInterval
    }
};
