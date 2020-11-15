import {combineReducers} from "redux";
import {loadDataReducer, teachersReducer,teacherReducer,activeAddressesReducer,
    addressesReducer, startDateReducer, endDateReducer, dateReducer} from "./dataReducer";
import {menuPrevIndexReducer, menuIndexReducer} from "./menuReducer";
import {groupControlReducer, audiencesReducer} from "./tableReducer"
import {filterTypeReducer, teachersListReducer} from "./filterReducer";
import {facultyReducer} from "./filterReducer";
import {facultyReducer as facultiesReducer}  from "./tableReducer";
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
    activeAddressesReducer,
    teachersListReducer,
    facultiesReducer,
    audiencesReducer,
    dateReducer
});