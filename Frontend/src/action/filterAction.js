
export const getFilterType = (newType) =>{
    return {
        type: "GET_FILTER_TYPE", newType
    }
};

export const setFaculty = (faculty) => {
  return{
      type: "SET_CURRENT_FACULTY", faculty
  }
};

export const setFilteredTeachersListByLetter = (letter,list) => {
    return{
        type: "SET_FILTERED_TEACHERS_LIST_BY_LETTER", letter, list
    }
};