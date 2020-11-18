
export const menuIndexReducer = (state = 0, action) => {

  switch (action.type){
      case "CHANGE_MENU_INDEX":
          return action.index;
      default:
          return state;
  }
};

export const menuPrevIndexReducer = (state = -1, action) => {

    switch (action.type){
        case "GET_PREV_INDEX":
            return action.index;
        default:
            return state;
    }
};

