
export const getLine = (index) =>{
    console.log("current index:",index);
  return {
      type: "CHANGE_MENU_INDEX", index
  }
};
export const getPrevLine = (index) =>{
    return {
        type: "GET_PREV_INDEX", index
    }
};