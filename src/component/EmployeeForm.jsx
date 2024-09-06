import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { employeeInformation } from '../action/Action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [department, setDepartment] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [mobile, setMobile] = useState('');
  const [panno, setPanno] = useState('');
  const [gender, setGender] = useState('');
  const [marital, setMarital] = useState('');

  let date = new Date();
  let id = date.getTime();
  const validatedata = () => {
    if (!first) {
      toast.warn('Please Enter Valid Name !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (!last) {
      toast.warn('Please Enter Valid Last Name !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (!department) {
      toast.warn('Please Enter  deparment !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (!address1) {
      toast.warn('Please Enter  Address1 !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (!mobile) {
      toast.warn('Please Enter Address2 !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }

    if (!panno) {
      toast.warn('Please Enter Pan No !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }

    if (!gender) {
      toast.warn('Please Enter Gender !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }
    if (!marital) {
      toast.warn('Please Enter martiual status !', {
        position: toast.POSITION.TOP_CENTER
      });
      return false;
    }

    return true;
  };

  const employeeData = (e) => {
    e.preventDefault();
  

    if (validatedata()) {
      dispatch(
        employeeInformation({
          id,
          first,
          last,
          department,
          address1,
          address2,
          mobile,
          panno,
          gender,
          marital
        })
      );
      navigate('/employee');
    }
  };
  return (
    <section className="container mx-auto mt-10">
      <form onSubmit={employeeData}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={last}
              onChange={(e) => setLast(e.target.value)}
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>

          <select
            onChange={(e) => setDepartment(e.target.value)}
            id="underline_select"
            className="block py-2.5 px-0 w-full  text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a Deparment</option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="relative z-0 w-full mb-6 group mt-6">
          <input
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            type="address"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Address 1
          </label>
        </div>

        <div className=" relative z-0 w-full mb-6 group">
          <input
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            type="address"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Address 2
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="tel"
             
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              value={panno}
              onChange={(e) => setPanno(e.target.value)}
              type="text"
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Pan Number
            </label>
          </div>
          <label htmlFor="underline_select" className="sr-only">
            Gender
          </label>
          <select
            onChange={(e) => setGender(e.target.value)}
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="underline_select" className="sr-only">
            Martiual Status
          </label>
          <select
            onChange={(e) => setMarital(e.target.value)}
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a Marital Status</option>
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </section>
  );
};

export default EmployeeForm;
