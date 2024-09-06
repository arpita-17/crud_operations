const initialState = {
  Info: []
};

const departmentData = (state, payload) => {
  return {
    ...state,
    Info: [...state.Info, payload]
  };
};

const departmentDelete = (state, payload) => {
  const newList = state.Info.filter((item) => item.id !== payload);

  return {
    ...state,
    Info: newList
  };
};

const departmentEdit = (state, payload) => {
  const updateList = state.Info.find((item) => item.id == payload);

  return {
    ...state,
    Info1: updateList
  };
};

const departmentUpdate = (state, payload) => {
  const newData = state.Info.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

  return {
    ...state,
    Info: newData
  };
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPDATA':
      return departmentData(state, action.payload);
    case 'DEPDELET':
      return departmentDelete(state, action.payload);

    case 'DEPEDIT':
      return departmentEdit(state, action.payload);

    case 'DEPUPDATE':
      return departmentUpdate(state, action.payload);

    default:
      return state;
  }
};

export default departmentReducer;
