import {groups} from "../testData";

export const loadFaculties = (faculties) => {

    return{
        type: "LOAD_FACULTIES_LIST_FOR_GROUPS", faculties
    }
};

export const loadGroups = (faculty) => {
    console.log(faculty)
    return{
        type: "LOAD_GROUPS_LIST", faculty
    }
};

export const setActiveGroup = (group) => {
  return{
      type: "LOAD_GROUP_DATA",  group
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
          //  console.log(faculties);
            dispatch(loadFaculties(faculties))
        })
        .catch(e => console.log(e));
};


//получаем список групп для текущего факультета
export const getGroupsList = (facultyId) => dispatch => {

    const link = `http://localhost:8080/divisions/${facultyId}`;
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

export const getTestGroupsList = (facultyId) => dispatch => {

    let group_list = [];

    for (let group of groups){
        if (group.facultyId == facultyId) {
            group_list = group.groups;
            break;
        }
    }
    console.log(group_list);
    dispatch(loadGroups(group_list));

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
      //      console.log(group);
            dispatch(setActiveGroup(group))
        })
        .catch(e => console.log(e));
};

export const getTestGroupData = (facultyId,groupId) => dispatch => {

    let currentGroup = {};
    let faculty = {};
    for (let group of groups) {
        if (group.facultyId == facultyId) {
            faculty = group;
        }
    }
    console.log(faculty, groupId)

    for (let group of faculty.groups){
        if (group.id == groupId) {
            currentGroup = group;
            break;
        }
    }
    console.log(currentGroup)
    dispatch(setActiveGroup(currentGroup));
};