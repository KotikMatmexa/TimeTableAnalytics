
export const loadData = (flag) => {
    return{
        type: "LOAD_DATA", flag
    }
};

export const loadTeachers = (address) => {
  return {
      type: "LOAD_TEACHERS", address
  }
};

export const loadAddresses = (addresses) => {
    console.log(addresses)
    return {
        type: "LOAD_ADDRESSES", addresses
    }
};