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


export const datePreparation = (startDate, endDate) => {
    let sDate = startDate.getFullYear()+"-"+('0'+(startDate.getMonth()+1)).slice(-2)+"-"+
        ("0"+startDate.getDate()).slice(-2)+" "+
        ("0"+startDate.getHours()).slice(-2)+":"+("0"+startDate.getMinutes()).slice(-2);
    let eDate = endDate.getFullYear()+"-"+('0'+(endDate.getMonth()+1)).slice(-2)+"-"+
        ("0"+endDate.getDate()).slice(-2)+" "+
        ("0"+endDate.getHours()).slice(-2)+":"+("0"+endDate.getMinutes()).slice(-2);
    return [sDate,eDate]
};

//получаем данные по адресам
//addresses = список oid выбранных адресов
//startDate, endDate = параметры времени начала и окончания (String)
export const getFacultiesData = (addresses,startDate,endDate) => dispatch => {

    const formattedDates = datePreparation(startDate,endDate);

    const link = `http://localhost:8080/address/timetable?start=${formattedDates[0]}&end=${formattedDates[1]}`;
    fetch(link, {
        method: "POST",
        body: JSON.stringify(addresses),
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(addresses => {
            console.log(addresses);
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
