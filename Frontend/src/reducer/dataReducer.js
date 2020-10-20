import {faculty_data,teachers,addresses} from "../testData";


export const dataReducer = (state = false, action) => {
    switch (action.type){
        case "SET_VISIBILITY":
            return action.visibility;
        default:
            return state
    }
};

export const loadDataReducer = (state = false, action) => {
    switch (action.type){
        case "LOAD_DATA":
            return action.flag;
        default:
            return state
    }
};

export const teachersReducer =  (state = [], action) => {
    switch (action.type){
        case "LOAD_TEACHERS":
            return getTeachers(action.address);
        default:
            return state
    }
};

let getTeachers = (address) => {
    const faculty = Object.values(faculty_data).find(item => item.address == address).name;
    let teachersList = [];

    for(let teacher of Object.values(teachers)){
        if(teacher.faculty == faculty)
            teachersList.push(teacher)
    }
    return teachersList;
};



export const addressesReducer =  (state = addresses, action) => {
    console.log(action.type)
    switch (action.type){
        case "LOAD_ADDRESSES":
            return action.addresses;
        default:
            return state
    }
};
