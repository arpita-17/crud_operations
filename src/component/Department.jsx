import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Table from './Table';
import { departmentDelete } from '../action/Action';
import { departmentEdit } from '../action/Action';

import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import PropTypes from 'prop-types';

const Department = () => {
  const departmentValue = useSelector((state) => state.departmentReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const departmentPage = () => {
    navigate('/departmentform');
  };

  function removeDepartment(Data) {
    swal({
      title: `${Data.departmentname} Are you sure?`,
      text: 'Once deleted, you will not be able to recover this information!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(departmentDelete(Data.id));
        swal('Poof! Your information  has been deleted!', {
          icon: 'success'
        });
      } else {
        swal('Your information  is safe!');
      }
    });
  }

  function editDepartment(edit) {
    dispatch(departmentEdit(edit.id));

    navigate('/editdepartment');
  }

  const rows = [
    { label: 'Department name', value: 'departmentname' },
    { label: 'Department Id', value: 'identity' },
    { label: 'No Of Employee', value: 'noemployee' },
    { label: 'Head Of Department', value: 'hod' },
    
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
      <div className="container  flex flex-row justify-end mt-[70px] cursor-pointer">
        <div>
          <AiOutlinePlusCircle onClick={() => departmentPage()} size="35px" />
        </div>
      </div>
      <div className="ml-[200px] mt-[10px]">
        <Table
          coloumns={departmentValue.Info}
          rows={rows}
          title={'Department'}
          delete1={removeDepartment}
          edit={editDepartment}
          details={(item) => {
            navigate(`/departmentdetails/${item.departmentname}`);
          }}
        />
      </div>
    </>
  );
};

export default Department;
