import {table_example} from "../testData";
import {faculty_data} from "../testData";
export const groupControlReducer = (state = table_example, action) => {

    switch (action.type){
        case "GET_CURRENT_TABLE":
            return action.table;
        default:
            return state;
    }
};

export const facultyReducer = (state = [], action) => {

    switch (action.type){
        case "LOAD_FACULTIES_LIST":
            return getFaculties(action.addresses);
        default:
            return state;
    }
};


const getFaculties = (addresses) => {
    console.log(addresses);
    let finalList = [];
    for (let address of addresses) {
        finalList.push(Object.values(faculty_data).find(item => item.address == address));
    }
    return finalList;
};


export const audiencesReducer = (state = [], action) => {


    switch (action.type){
        case "SET_ACTIVE_AUDIENCES":
            return setAudiences(action.address, action.audiences);
        default:
            return state;
    }
};

const setAudiences = (address, audiences) => {
    console.log(audiences)
    let finalList = [];
    for (let audience in audiences) {
        if(Object.values(address).find(item => item[2].indexOf(audiences[audience]))!=-1)
            finalList.push(audiences[audience]);
    }
    address["activeAudiences"] = finalList;
    return address;
};