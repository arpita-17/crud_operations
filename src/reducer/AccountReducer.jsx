const initialState = {};

const login = (state, { email, password }) => {
  return {
    ...state,
    email,
    password,
    isLoggedIn: true
  };
};

const signUp = (state, { name, email, password }) => {
  return {
    ...state,
    isLoggedIn: false,
    name,
    email,
    password
  };
};

const logout = (state) => {
  return {
    ...state,
    isLoggedIn: false
  };
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return login(state, action.payload);

    case 'SIGNUP':
      return signUp(state, action.payload);

    case 'LOGOUT':
      return logout(state);

    default:
      return state;
  }
};

export default AccountReducer;
