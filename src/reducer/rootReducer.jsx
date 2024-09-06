import { combineReducers } from "redux";
import account from "./AccountReducer";
import EmployeeReducer from "./EmployeeReducer";
import departmentReducer from "./DepartmentReducer"
import Account2Reducer from "./Account2Reducer"


const rootReducer = combineReducers({ 
    account,
    EmployeeReducer,
    departmentReducer,
    Account2Reducer
})

export default rootReducer;