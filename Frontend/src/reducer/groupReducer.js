import {table_example} from "../testData";

export const groupsReducer = (state = [], action) => {

    switch (action.type){
        case "LOAD_GROUPS_LIST":
            return getGroups(action.faculty);
        default:
            return state;
    }
};


let getGroups = (faculty) => {
    let obj = Object.values(table_example).find(item => item.faculty == faculty);
    return obj.groups;
};


export const groupReducer = (state = [], action) => {

    switch (action.type){
        case "LOAD_GROUP_DATA":
            return getData(action.faculty,action.group);
        default:
            return state;
    }
};

let getData = (faculty, group) => {
    let obj = Object.values(table_example).find(item => item.faculty == faculty);
    let index = Object.values(obj.groups).findIndex(it => it.name == group);
    return obj.groups[index].data;
};