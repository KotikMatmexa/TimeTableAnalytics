import {table_example} from "../testData";

export const facultiesListReducer = (state = null, action) => {

    switch (action.type){
        case "LOAD_FACULTIES_LIST_FOR_GROUPS":
            return action.faculties;
        default:
            return state;
    }
};


export const groupsReducer = (state = null, action) => {
    console.log("hey")
    switch (action.type){
        case "LOAD_GROUPS_LIST":
            console.log(action.faculty)
            return action.faculty
            //return getGroups(action.faculty);
        default:
            return state;
    }
};

export const groupReducer = (state = null, action) => {

    switch (action.type){
        case "LOAD_GROUP_DATA":
            return setStatistics(action.group);
          //  return action.group;
        //    return getData(action.faculty,action.group);
        default:
            return state;
    }
};

let getGroups = (faculty) => {
    let obj = Object.values(table_example).find(item => item.faculty == faculty);

    if(obj) {
        return obj.groups;
    }
    return null;
};

const setStatistics = (group) =>{
    console.log(group)
    let disciplines = group.disciplines;
    for (let discipline of disciplines){
        let percents = Math.round(getPercents(discipline.requiredHours,discipline.assignedHours));
        let remainder = discipline.assignedHours - discipline.requiredHours;
        discipline.percents = percents;
        discipline.restOfHours = remainder;
    }
    console.log(disciplines)
    return disciplines;
};

const getPercents = (currentValue, totalValue) => {
    return currentValue*100/totalValue;
};

let getData = (faculty, group) => {
    let obj = Object.values(table_example).find(item => item.faculty == faculty);
    let index = Object.values(obj.groups).findIndex(it => it.name == group);
    return obj.groups[index].data;
};

//вычисления по таблице
let setGroupData = (group) => {

};