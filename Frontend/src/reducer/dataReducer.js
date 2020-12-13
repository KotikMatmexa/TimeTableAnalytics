import {faculty_data,teachers} from "../testData";

import {createDay} from "./tableReducer";


export const dataReducer  = (state = false, action) => {
    switch (action.type){
        case "SET_VISIBILITY":
            return action.visibility;
        default:
            return state
    }
};

export const loadAudienceDataReducer = (state = false, action) => {
    switch (action.type){
        case "LOAD_AUDIENCE_DATA":
            return action.flag;
        default:
            return state
    }
};
export const loadTeachersDataReducer = (state = false, action) => {
    switch (action.type){
        case "LOAD_TEACHERS_DATA":
            return action.flag;
        default:
            return state
    }
};
export const loadGroupDataReducer = (state = false, action) => {
    switch (action.type){
        case "LOAD_GROUPS_DATA":
            return action.flag;
        default:
            return state
    }
};

export const teachersReducer =  (state = null, action) => {

    switch (action.type){
        case "LOAD_TEACHERS":
            return action.teachers;
        case "SET_DATE_ARRAY":
            return null;
        case "CLEAR_TEACHERS":
            return null;
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

export const teacherReducer =  (state = null, action) => {

    switch (action.type){
        case "SET_TEACHER":
            return teacherData(action.teacher, action.dateInterval);
        default:
            return state
    }
};

export const teacherData = (teacher, dates) => {

    console.log(teacher);
    let days = setDays(teacher.events, dates);
    teacher.actualEvents = days;
    return teacher;
};

const setDays = (events, dates) =>{
    let days = [];

    const filteredEvents = preprocessing(events);

    for (let date of dates){
        let lessons = createLesson(filteredEvents, date);
        let data = {
            day: date,
            data: lessons
        };
        days.push(data);
    }
    return days;
};

const preprocessing = (events) =>{


    let startDay = events[0].start;
    let startDate = new Date(startDay);
    let filteredEvents = [];

    //console.log(startDate);
   // startDate.setHours(startDay.getHours());
   // startDate.setMinutes(startDay.getMinutes());
   // startDate.setSeconds(startDay.getSeconds());
    let data = events[0];
    let current_group = data.student_group;

    for (let i = 1; i< events.length; i++){

        let currentDate = events[i].start;
        if(new Date(currentDate).toString() == new Date(startDate).toString()){
            data.student_group = [];
            data.student_group.push(current_group);
            data.student_group.push(events[i].student_group);
            current_group = data.student_group;
        }
        else{
            filteredEvents.push(data);
            data = events[i];
        }

    }
    return filteredEvents;

};

const createLesson = (events, date) => {
    let final_list = [];
    let currentDate = new Date(date);

  //  console.log(events)
    for (let event of events){
        const startDay = event.start;
        let start_date = new Date(startDay);

        start_date.setHours(0);
        start_date.setMinutes(0);
        start_date.setSeconds(0);

        const endTime = event.end;
        let end_date = new Date(endTime);

        //end_date.setHours(endTime.getHours());
        //end_date.setMinutes(endTime.getMinutes());
        //end_date.setSeconds(endTime.getSeconds());

        //console.log(final_date.toString(),new Date(currentDate).toString());
        // console.log(new Date(final_date).toString() == new Date(currentDate).toString());
     //   console.log(new Date(start_date).toISOString() == new Date(currentDate).toISOString())
      //  if (new Date(start_date).toString() == new Date(currentDate).toString())
        if (new Date(start_date).toISOString() == new Date(currentDate).toISOString())
            final_list.push(event);
    }
 //   console.log(final_list)
    final_list = final_list.sort((a, b) => new Date(a.start) > new Date(b.start) ? 1 : -1);

    return final_list;
};

export const addressesReducer =  (state = null, action) => {
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
   // console.log(action)
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
