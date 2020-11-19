import {table_example} from "../testData";
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
            //return action.addresses;
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

    return getData(addresses);
};


export const audiencesReducer = (state = null, action) => {
    switch (action.type){
        case "SET_ACTIVE_AUDIENCES":
            return setAudiences(action.address, action.audience, action.timeInterval);
        default:
            return state;
    }
};

export const facultyyReducer = (state = null, action) => {
    switch (action.type){
        case "SET_THIS_FACULTY":
            return action.FACULTY;
        default:
            return state;
    }
};


export const audienceReducer = (state = null, action) => {
    switch (action.type){
        case "SET_THIS_AUDIENCE":
            return setAudiences(action.address, action.audience, action.timeInterval);
        default:
            return state;
    }
};

export const setAudiences = (address, audience, dates) => {
    let finalData;
    finalData = JSON.parse(JSON.stringify(address));

    const index = Object.values(address.locationWithEventsDto.results)
        .findIndex(item => item.location.number_actual === audience);

    if(index!== -1) {
         finalData["activeAudience"] = address.locationWithEventsDto.results[index];
    }

    //make days
    let events = finalData.activeAudience.events.results;
    let days = [];

    for (let date of dates){
        let lessons = createDay(events, date);
        let data = {
          day: date,
          data: lessons
        };
        days.push(data);
    }
  ///  let res = {
    //    audience_data: address.locationWithEventsDto.results[index],
      //  days:days
    //};
    finalData.activeAudience.events.results = days;
    return finalData;
};

const createDay = (events, date) => {
    let final_list = [];
    let currentDate = new Date(date);

    for (let event of events){
        const startDay = event.start;
        let final_date = new Date(startDay);

        final_date.setHours(0);
        final_date.setMinutes(0);
        final_date.setMilliseconds(0)

        //console.log(final_date.toString(),new Date(currentDate).toString());
       // console.log(new Date(final_date).toString() == new Date(currentDate).toString());

        if (new Date(final_date).toString() == new Date(currentDate).toString())
            final_list.push(event);
    }
    final_list = final_list.sort((a, b) => new Date(a.start) > new Date(b.start) ? 1 : -1);

    return final_list;
};