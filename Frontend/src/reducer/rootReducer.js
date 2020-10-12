import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {menuPrevIndexReducer, menuIndexReducer} from "./menuReducer";
import {filterTypeReducer} from "./filterReducer";

export const rootReducer = combineReducers({
    menuPrevIndexReducer, menuIndexReducer,filterTypeReducer
});