import React, { useState } from 'react'
import EmployeeService from './services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value});
    };

    const saveEmployee = (e) => {
          e.preventDefault();
          EmployeeService.saveEmployee(employee)
          .then((response) => {
            console.log(response);
            navigate("/employeeList")
          })
          .catch((error) => {
            console.log(error);
          })
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: "",
        })
    }

  return (
    <div className='flex flex-col max-w-2xl mx-auto shadow-lg border rounded-lg' style={{ marginTop: '60px', backgroundColor: '#f9f9f9' }}>
        <div className="px-10 py-10">
            <h1 className='font-semibold text-3xl text-gray-800 mb-8 text-center'>
                Add New Employee
            </h1>
            <div className="mb-6">
                <label className="block mb-2 text-gray-700 text-sm font-medium">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => handleChange(e)}
                    className="h-12 w-full border-gray-300 rounded-md shadow-sm mt-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border px-3">
                </input>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-gray-700 text-sm font-medium">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e) => handleChange(e)}
                    className="h-12 w-full border-gray-300 rounded-md shadow-sm mt-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border px-3">
                </input>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-gray-700 text-sm font-medium">
                    Email
                </label>
                <input
                    type="email"
                    name="emailId"
                    value={employee.emailId}
                    onChange={(e) => handleChange(e)}
                    className="h-12 w-full border-gray-300 rounded-md shadow-sm mt-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border px-3">
                </input>
            </div>
            <div className="flex items-center justify-center space-x-4 pt-4">
                <button
                onClick={saveEmployee}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 hover:bg-green-800 text-white font-medium py-2 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Save
                </button>
                <button
                    onClick = {reset}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-800 text-white font-medium py-2 px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Clear
                </button>
            </div>
        </div>
    </div>

  )
}

export default AddEmployee 