import {table_example} from "../testData";
import {faculty_data} from "../testData";
import {getData} from "../dataParser";

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

export const currentFacultyReducer = (state = [], action) => {
    switch (action.type){
        case "LOAD_FACULTY_DATA":
            return getFaculties(action.addresses);
        default:
            return state;
    }
};


const getFaculties = (addresses) => {
    console.log(addresses);
  //  let finalList = [];
    //for (let address of addresses) {
      //  finalList.push(Object.values(faculty_data).find(item => item.address == address));
    //}
    //return finalList;
    return getData(addresses);
};


export const audiencesReducer = (state = [], action) => {
  //  console.log(action.address)
    switch (action.type){
        case "SET_ACTIVE_AUDIENCES":
            return setAudiences(action.address, action.audience, action.timeInterval);
        default:
            return state;
    }
};

const setAudiences = (address, audience, dates) => {
    let finalData;
    finalData = address;
    //for (let audience in audiences) {
    const index = Object.values(address.locationWithEventsDto.results)
        .findIndex(item => item.location.number_actual === audience);

    console.log(Object.values(address.locationWithEventsDto.results[index]))
    if(index!== -1) {
         finalData["activeAudience"] = address.locationWithEventsDto.results[index];
    }

    let events = finalData.activeAudience.events.results;
    let days = [];

    for (let date of dates){
        days.push(createDay(events, date));
    }
    //finalData.activeAudience.events.results = days;
    return finalData;
};

const createDay = (data, date) => {
    let final_list = [];
    for (let value of data){
        const startDay = value.start;
        //console.log(startDay)
        let final_date = new Date(startDay);
        let current_time = startDay.split("T");
        final_date.setHours(current_time[1].split(":")[0]);
        final_date.setMinutes(current_time[1].split(":")[1]);
      //  console.log(final_date);
        if (final_date.getDate() == date.getDate())
            final_list.push(value);
    }
    console.log(final_list)

    return final_list;
};