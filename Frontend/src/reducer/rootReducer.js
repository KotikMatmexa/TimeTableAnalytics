import {combineReducers} from "redux";
import {loadDataReducer, teachersReducer,teacherReducer, addressesReducer, startDateReducer, endDateReducer} from "./dataReducer";
import {menuPrevIndexReducer, menuIndexReducer} from "./menuReducer";
import {groupControlReducer} from "./tableReducer"
import {filterTypeReducer} from "./filterReducer";
import {facultyReducer} from "./filterReducer";
import {groupsReducer, groupReducer} from "./groupReducer";


export const rootReducer = combineReducers({
    menuPrevIndexReducer, menuIndexReducer,filterTypeReducer,groupControlReducer,facultyReducer,
    groupsReducer, loadDataReducer,
    groupReducer,
    teachersReducer,
    teacherReducer,
    addressesReducer,
    startDateReducer,
    endDateReducer,

});