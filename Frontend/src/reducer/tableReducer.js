import {table_example} from "../testData";

export const groupControlReducer = (state = table_example, action) => {

    switch (action.type){
        case "GET_CURRENT_TABLE":
            return action.table;
        default:
            return state;
    }
};
