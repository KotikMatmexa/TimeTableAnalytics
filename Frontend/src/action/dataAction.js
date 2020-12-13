import {datePreparation, loadFacultiesList} from "./tableAction";
import teachers from "../TestData/teacher data";

export const loadAudienceData = (flag) => {
    return{
        type: "LOAD_AUDIENCE_DATA", flag
    }
};
export const loadTeachersData = (flag) => {
    return{
        type: "LOAD_TEACHERS_DATA", flag
    }
};
export const loadGroupsData = (flag) => {
    return{
        type: "LOAD_GROUPS_DATA", flag
    }
};

export const loadTeachers = (teachers) => {
    if(teachers) {
        return {
            type: "LOAD_TEACHERS", teachers
        }
    }
    else {
        return {
            type: "CLEAR_TEACHERS"
        }
    }
};

//получаем список учителей по текущему адресу
//address = адрес, по которому получаем список пользователей
export const getTeachersList = (addressId) => dispatch => {

    if (!addressId){
        loadTeachers(null);
        return false;
    }

    const link = `http://localhost:8080/address/educators/${addressId}`;
    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(teachers => {
      // console.log(teachers);
            dispatch(loadTeachers(teachers))
        })
        .catch(e => console.log(e));
};


export const setCurrentTeacher = (teacher,dateInterval) => {
    return {
        type: "SET_TEACHER", teacher,dateInterval
    }
};


export const getTeachersDataTest = (teacher, dateInterval) => dispatch => {
    let final_data = {};

    for (let data of teachers.teachers){
        let name = teacher.name.toString();

        if (data.educator.name == name.substr(0, name.length-1)){
            final_data = data;
        }
    }
    console.log(dateInterval)
    dispatch(setCurrentTeacher(final_data,dateInterval))
};
//получаем список пар для конкретного учителя
//teacher = учитель, о нагрузке которого хотим узнать
//startDate, endDate - даты нагрузки
export const getTeachersData = (teacher, startDate, endDate) => dispatch => {

    const formattedDates = datePreparation(startDate,endDate);

    let teacherId = teacher.oid;
    const link = `http://localhost:8080/educators/events/${teacherId}?start=${formattedDates[0]}&end=${formattedDates[1]}`;

    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(data => {
            dispatch(setCurrentTeacher(data))
        })
        .catch(e => console.log(e));
};



export const loadAddresses = (addresses) => {
    return {
        type: "LOAD_ADDRESSES", addresses
    }
};



export const SET_FACULTY = (FACULTY) => {
    return {
        type: "SET_THIS_FACULTY", FACULTY
    }
};


export const SET_AUDIENCE = (address, audience, timeInterval) => {
    return {
        type: "SET_THIS_AUDIENCE", address, audience, timeInterval
    }
};


//загрузка адресов в фильтр с сервера
export const getAddresses = () => dispatch => {
    const link = 'http://localhost:8080/address';
    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
           data.json())
        .then(addresses => {
            dispatch(loadAddresses(addresses.results))
        })
        .catch(e => console.log(e));
};


export const setActiveAddresses = (addresses) => {
    return {
        type: "SET_ACTIVE_ADDRESSES", addresses
    }
};

export const setStartDate = (date) => {
    return {
        type: "SET_START_DATE", date
    }
};

export const setDateInterval = (startDate, endDate) => {
    return {
        type: "SET_DATE_ARRAY", startDate, endDate
    }
};


export const setEndDate = (date) => {
    return {
        type: "SET_END_DATE", date
    }
};