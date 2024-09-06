import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Login1 } from '../image/login.svg';
import { logIn } from '../action/Action';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateData = () => {
    if (!email) {
      toast.warn('Please Enter Valid Email !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (!password) {
      toast.warn('Please Enter Password !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (password.length < 6) {
      toast.warn('Please Enter Minimum 6 digit Password !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (email === account.email && password === account.password) {
      toast.success(` ${account.name} your Login succesfully`, {
        position: toast.POSITION.TOP_CENTER
      });
      return true;
    } else {
      toast.error('Wrong Crendiential !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
  };

  function submitForm(e) {
    e.preventDefault();

    if (validateData()) {
      dispatch(
        logIn({
          email,
          password
        })
      );
      navigate('/home');
    }
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24  flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap items-center">
          <div className="svg-container  md:pr-1 lg:pr-0 pr-0 w-1/2 sm:w-1/2 md:w-1/2 xl:w-1/2 lg:w-1/2">
            <Login1 />
          </div>

          <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
            <form action="" onSubmit={submitForm}>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
