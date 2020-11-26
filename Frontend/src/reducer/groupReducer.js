import {table_example} from "../testData";

export const groupsReducer = (state = null, action) => {

    switch (action.type){
        case "LOAD_GROUPS_LIST":
            return getGroups(action.faculty);
        default:
            return state;
    }
};


let getGroups = (faculty) => {
    let obj = Object.values(table_example).find(item => item.faculty == faculty);
    console.log(faculty)
    if(obj) {
        return obj.groups;
    }
    return null;
};


export const groupReducer = (state = null, action) => {

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