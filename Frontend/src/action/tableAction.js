

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

export const setActiveAudiences = (address, audiences) =>{
    return {
        type: "SET_ACTIVE_AUDIENCES", address, audiences
    }
};
