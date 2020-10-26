
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

export const setStartDate = (date) => {
    return {
        type: "SET_START_DATE", date
    }
};


export const setEndDate = (date) => {
    return {
        type: "SET_END_DATE", date
    }
};