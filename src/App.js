import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Signup from './account/Signup';
import Login from './account/Login';
import PrivateComponent from './component/privateComponent';
import EmployeeForm from './component/EmployeeForm';
import Employee from './component/Employee';
import EditEmployee from './component/EditEmployee';
import DepartmentForm from './component/DepartmentForm';
import Department from './component/Department';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditDepartment from './component/EditDepartment';

import DepartmentDetails from './component/DepartmentDetails';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<EmployeeForm />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/editEmployee" element={<EditEmployee />} />
          <Route path="/departmentform" element={<DepartmentForm />} />
          <Route path="/department" element={<Department />} />

          <Route path="/departmentdetails/:id"  element={<DepartmentDetails />} />

          <Route path="/editdepartment" element={<EditDepartment />} />
        </Route>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
     
    </>
  );
};
