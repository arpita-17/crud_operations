const initialState = {
  Data: [],
};

const employeeValue = (state, payload) => {
  return {
    ...state,

    
    Data: [...state.Data, payload],
  };
};

const deleteEmployee = (state, payload) => {
  const newList = state.Data.filter((item) => item.id !== payload);
  

  return {
    ...state,
    Data: newList,
  };
};

const editEmployee = (state, payload) => {
  const updateList = state.Data.find((item) => item.id == payload);

  return {
    ...state,
    Data1: updateList,
  };
};

const updateEmployee = (state, payload) => {
  

  const newValue = state.Data.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

 
  return {
    ...state,
    Data: newValue,
  };
};

const EmployeeReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "FORMDATA":
      return employeeValue(state, action.payload);

    case "DELETDATA":
      return deleteEmployee(state, action.payload);

    case "EDITDATA":
      return editEmployee(state, action.payload);

    case "UPDATEVALUE":
      return updateEmployee(state, action.payload);

    default:
      return state;
  }
};
export default EmployeeReducer;
