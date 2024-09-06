import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import { AiFillEye } from 'react-icons/ai';

const Table = (props) => {
  let { coloumns = [], rows, delete1, edit, details } = props;

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
              {rows.map((row, index) => (
                <th key={index} scope="col" className="px-6 py-3 bg-blue-500">
                  {row.label}
                </th>
              ))}
             
            </tr>
          </thead>
          <tbody>
            {coloumns.map((item) => {
              return (
                <tr key={item.id} className="bg-blue-600 border-b border-blue-400">
                  {rows.map((data) => {
                    return (
                      <td key={item.id} className="px-6 py-4">
                        {item[data.value]}
                      </td>
                    );
                  })}
                  <td className="px-6 py-4 bg-blue-500">
                    <AiFillEye onClick={() => details(item)} />
                  </td>
                  <td className="px-6 py-4">
                    <HiPencilAlt onClick={() => edit(item)} />
                  </td>
                  <td className="px-6 py-4 bg-blue-500">
                    <a href="#" className="font-medium text-white hover:underline">
                      <FaTrashAlt onClick={() => delete1(item)} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="ml-[100px] mt-[40px]">
        <h1 className="ml-[350px] mb-[50px]">{title}</h1>
        <table className="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr>
              {rows.map((row, index) => (
                <th key={index} className="border border-slate-300 p-4">
                  {row.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {coloumns.map((item) => {
              return (
                <tr key={item.id} >
                  {rows.map((data) => {
                    return (
                      <td key={item.id} className="border border-slate-300 p-4">
                        {item[data.value]}
                      </td>
                    );
                  })}
                  <td className="border border-slate-300 p-4">
                    <AiFillEye onClick={() => details(item)} />
                  </td>
                  <td className="border border-slate-300 p-4">
                    <HiPencilAlt onClick={() => edit(item)} />
                  </td>
                  <td className="border border-slate-300 p-4">
                    <FaTrashAlt onClick={() => delete1(item)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default Table;
