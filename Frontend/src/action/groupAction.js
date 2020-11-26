
export const loadGroups = (faculty) => {
    console.log(faculty)
    return{
        type: "LOAD_GROUPS_LIST", faculty
    }
};

export const setActiveGroup = (faculty,group) => {
  return{
      type: "LOAD_GROUP_DATA", faculty, group
  }
};