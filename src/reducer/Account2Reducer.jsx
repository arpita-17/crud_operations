const initialState = {
  accountData: []
};

const accData = (state, payload) => {
  return {
    ...state,
    accountData: [...state.accountData, payload]
  };
};

const accDelet = (state, payload) => {
  const newList1 = state.accountData.filter((item) => item.id !== payload);

  return {
    ...state,
    accountData: newList1
  };
};

const accEdit = (state, payload) => {
  const updateList = state.accountData.find((item) => item.id == payload);

  return {
    ...state,
    accountData1: updateList
  };
};

const accUpdate = (state, payload) => {
  const newData = state.accountData.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

  return {
    ...state,
    accountData: newData
  };
};

const Account2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACCDATA':
      return accData(state, action.payload);
    case 'ACCDELET':
      return accDelet(state, action.payload);

    case 'ACCEDIT':
      return accEdit(state, action.payload);

    case 'ACCUPDATE':
      return accUpdate(state, action.payload);

    default:
      return state;
  }
};

export default Account2Reducer;
