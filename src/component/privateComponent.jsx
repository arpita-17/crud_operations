import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateComponent = () => {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
export default PrivateComponent;
