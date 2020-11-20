
export const filterTypeReducer = (state = "audience", action) => {
    switch (action.type){
        case "GET_FILTER_TYPE":
            return action.newType;
        default:
            return state
    }
};

export const facultyReducer = (state = [], action) => {

    switch (action.type){
        case "SET_CURRENT_FACULTY":
            return action.faculty;
        default:
            return state;
    }
};

export const teachersListReducer = (state = [], action) => {

    switch (action.type){
        case "SET_FILTERED_TEACHERS_LIST_BY_LETTER":
            return getTeachersList(action.letter, action.list);
        default:
            return state;
    }
};

let getTeachersList = (letter, teachersList) => {

    let final_list = [];
    for (let teacher of Object.values(teachersList.results)){
        if ((teacher.name).toLowerCase().startsWith(letter.toLowerCase()))
            final_list.push(teacher)

    }
    if (final_list.length > 0)
        return final_list;
    return "Нет фамилий с такой буквы"
};