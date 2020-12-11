import {combineReducers} from "redux";
import {loadAudienceDataReducer, loadGroupDataReducer, loadTeachersDataReducer,
    teachersReducer,teacherReducer,activeAddressesReducer,
    addressesReducer, startDateReducer, endDateReducer, dateReducer, daysReducer} from "./dataReducer";
import {menuPrevIndexReducer, menuIndexReducer} from "./menuReducer";
import {groupControlReducer, audiencesReducer,facultyyReducer, audienceReducer} from "./tableReducer"
import {filterTypeReducer, teachersListReducer} from "./filterReducer";
import {facultyReducer , clearFacultyReducer}  from "./tableReducer";
import {groupsReducer, groupReducer,facultiesListReducer} from "./groupReducer";


export const rootReducer = combineReducers({
    menuPrevIndexReducer, menuIndexReducer,filterTypeReducer,groupControlReducer,
    groupsReducer, loadAudienceDataReducer,loadTeachersDataReducer,loadGroupDataReducer,
    groupReducer,
    teachersReducer,
    teacherReducer,
    addressesReducer,
    startDateReducer,
    endDateReducer,
    activeAddressesReducer,
    teachersListReducer,
    facultyReducer,
    audiencesReducer,
    dateReducer,
    daysReducer,
    facultyyReducer,
    facultiesListReducer,
    audienceReducer,
    clearFacultyReducer
});