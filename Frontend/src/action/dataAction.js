
export const loadData = (flag) => {
    return{
        type: "LOAD_DATA", flag
    }
};

export const loadTeachers = (address) => {
  return {
      type: "LOAD_TEACHERS", address
  }
};

export const setCurrentTeacher = (teacher) => {
    return {
        type: "SET_TEACHER", teacher
    }
};

export const loadAddresses = (addresses) => {
    return {
        type: "LOAD_ADDRESSES", addresses
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
            dispatch(loadAddresses(addresses))
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