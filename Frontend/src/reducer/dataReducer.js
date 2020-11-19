import {faculty_data,teachers,addresses} from "../testData";

import {addressesList} from "../dataParser";


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

export const teacherReducer =  (state = [], action) => {

    switch (action.type){
        case "SET_TEACHER":
            return action.teacher;
        default:
            return state
    }
};

export const addressesReducer =  (state = [], action) => {
    switch (action.type){
        case "LOAD_ADDRESSES":
            return action.addresses;
        default:
            return state
    }
};


export const activeAddressesReducer =  (state = [], action) => {

    switch (action.type){
        case "SET_ACTIVE_ADDRESSES":
            return action.addresses;
        default:
            return state
    }
};


export const startDateReducer =  (state = null, action) => {

    switch (action.type){
        case "SET_START_DATE":
            return action.date;
        default:
            return state
    }
};

const nextDay = () =>{
    let today = new Date();
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    return tomorrow;
};

export const endDateReducer =  (state = null, action) => {

    switch (action.type){
        case "SET_END_DATE":
            return action.date;
        default:
            return state
    }
};

export const dateReducer =  (state = [], action) => {
    switch (action.type){
        case "SET_DATE_ARRAY":
            return datesList(action.startDate, action.endDate);
        default:
            return state
    }
};

const datesList = (startDate, endDate) => {

    let endDay = new Date(endDate);
    let days = [];

    let currentDate = new Date(startDate);

    while(currentDate <= new Date(endDate)){
        let newDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

        days.push(newDay);
        currentDate = new Date(newDay);
        currentDate.setDate(newDay.getDate()+1);
    }

    return days;
};

export const daysReducer =  (state = [], action) => {
    switch (action.type){
        case "SET_DAYS_LIST":
            return action.daysList;
        default:
            return state
    }
};
