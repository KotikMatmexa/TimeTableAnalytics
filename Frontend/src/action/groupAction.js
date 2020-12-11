

export const loadFaculties = (faculties) => {
    console.log(faculties)
    return{
        type: "LOAD_FACULTIES_LIST_FOR_GROUPS", faculties
    }
};

export const loadGroups = (faculty) => {
    console.log(faculty);
    return{
        type: "LOAD_GROUPS_LIST", faculty
    }
};

export const setActiveGroup = (faculty,group) => {
  return{
      type: "LOAD_GROUP_DATA", faculty, group
  }
};

//получаем список факультетов
export const getFacultiesList = () => dispatch => {

    const link = `http://localhost:8080/divisions`;
    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(faculties => {
            console.log(faculties);
            dispatch(loadFaculties(faculties))
        })
        .catch(e => console.log(e));
};


//получаем список групп для текущего факультета
export const getGroupsList = (facultyId) => dispatch => {

    const link = `http://localhost:8080/groups/${facultyId}`;
    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(groups => {
            console.log(groups);
            dispatch(loadGroups(groups))
        })
        .catch(e => console.log(e));
};


//получаем данные по текущей группе
export const getGroupData = (groupId) => dispatch => {

    const link = `http://localhost:8080/group/${groupId}`;
    fetch(link, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })
        .then(data =>
            data.json())
        .then(group => {
            console.log(group);
            dispatch(setActiveGroup(group))
        })
        .catch(e => console.log(e));
};
