import {facultyReducer} from "../reducer/tableReducer";


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


//получаем данные по адресам
//addresses = список oid выбранных адресов
//startDate, endDate = параметры времени начала и окончания (String)
export const getFacultiesData = (addresses,startDate,endDate) => dispatch => {

    //2020-10-15 10:05
    const link = `http://localhost:8080/address/timetable?start=${startDate}&end=${endDate}`;
    fetch(link, {
        method: "get",
        body: JSON.stringify(addresses),
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(addresses => {
            dispatch(loadFacultiesList(addresses))
        })
        .catch(e => console.log(e));
};



export const setActiveAudience = (address, audience, timeInterval) =>{
    return {
        type: "SET_ACTIVE_AUDIENCES", address, audience, timeInterval
    }
};


export const setDaysList = (daysList) =>{
    return {
        type: "SET_DAYS_LIST", daysList
    }
};
