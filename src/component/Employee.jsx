import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../action/Action';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { editData } from '../action/Action';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import Table from './Table';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Employee = () => {
  const formInformation = useSelector((state) => state.EmployeeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  function removeEmployee(employeeData) {
    swal({
      title: `${employeeData.first} Are you sure?`,
      text: 'Once deleted, you will not be able to recover this information!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteEmployee(employeeData.id));
        swal('Poof! Your information  has been deleted!', {
          icon: 'success'
        });
      } else {
        swal('Your information  is safe!');
      }
    });
  }

  function editEmployee(edit) {
    dispatch(editData(edit.id));

    navigate('/editEmployee');
  }

  const employeeForm = () => {
    navigate('/form');
  };

  const rows = [
    { label: 'First name', value: 'first' },
    { label: 'Last name', value: 'last' },
    { label: 'Department', value: 'department' },
    { label: 'Address 1', value: 'address1' },
    { label: 'Address 2', value: 'address2' },
    { label: 'Mobile nNo', value: 'mobile' },
    { label: 'Pan No', value: 'panno' },
    { label: 'Gender', value: 'gender' },
    { label: 'Marital Status', value: 'marital' },
      
   
  ];

  Table.propTypes = {
    coloumns: PropTypes.array,
    rows: PropTypes.array,
    title: PropTypes.string,
    delet: PropTypes.func,
    edit: PropTypes.func
  };

  return (
    <>
      <div className="flex flex-row justify-end mt-[40px] mr-[100px]">
        <div>
          <AiOutlinePlusCircle onClick={() => employeeForm()} size="35px" />
        </div>
      </div>
      <Table
        coloumns={formInformation.Data}
        rows={rows}
        title={'Employees'}
        delete1={removeEmployee}
        edit={editEmployee}
      />
    </>
  );
};

export default Employee;
