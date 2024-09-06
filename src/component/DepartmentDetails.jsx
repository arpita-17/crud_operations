import React from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DepartmentDetails = () => {
  const formData = useSelector((state) => state.EmployeeReducer);

  const [data, setData] = useState([]);

  const { id } = useParams();

  const compareId = () => {
    let compareData = formData.Data.filter((item) => {
      return item.department == id;
    });
    setData(compareData);
    
  };
  

  useEffect(() => {
    compareId();
  }, [id]);

  const rows = [
    { label: 'First name', value: 'first' },
    { label: 'Last name', value: 'last' },
    { label: 'Department', value: 'department' },
    { label: 'Address 1', value: 'address1' },
    { label: 'Address 2', value: 'address2' },
    { label: 'Mobile no', value: 'mobile' },
    { label: 'Pan no', value: 'panno' },
    { label: 'Gender', value: 'gender' },
    { label: 'Marital status', value: 'marital' }
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
      <div>
        <Table coloumns={data} rows={rows} title={'department details'} />
      </div>
    </>
  );
};

export default DepartmentDetails;
