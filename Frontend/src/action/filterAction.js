
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

