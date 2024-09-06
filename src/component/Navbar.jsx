import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../action/Action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.account);

  const accountLogout = () => {
    if (
      toast.success(` ${userInfo.name} your Logout succesfully`, {
        position: toast.POSITION.TOP_CENTER
      })
    ) {
      dispatch(logOut());
      navigate('/');
    }
  };

  return (
    <header className="text-gray-600 body-font">
      {userInfo.isLoggedIn ? (
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-500 shadow-md  border-b ">
          <a className="flex title-font font-medium items-center text-lg text-white hover:text-white hover:bg-indigo-600 rounded-md p-2 mb-4 md:mb-0">
            <span className="px-4 py-1 text-xl">TODO</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center font-semibold">
            <Link
              className="mr-5 text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2"
              to="/home">
              Home
            </Link>
            <Link
              className="mr-5  cursor-pointer text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2"
              to="/employee">
              Employee
            </Link>

            <Link
              className="mr-5  cursor-pointer text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2"
              to="/department">
              Deparment
            </Link>

            <Link
              className="mr-5 text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2"
              onClick={accountLogout}
              to="/">
              Logout
            </Link>
          </nav>
        </div>
      ) : (
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-500  border-b  ">
          <a className="flex title-font font-medium items-center text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2 mb-4 md:mb-0">
            <span className=" px-4 py-1 text-xl">TODO</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  text-lg font-semibold">
            <Link
              className="mr-5  cursor-pointer text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2"
              to="/login">
              Login
            </Link>
            <Link
              className="mr-5  cursor-pointer text-lg text-white hover:text-white hover:bg-indigo-700 rounded-md p-2"
              to="/">
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
