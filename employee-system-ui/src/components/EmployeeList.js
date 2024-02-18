import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from './services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
            if(employees) {
                setEmployees((prevElement)=> {
                return prevElement.filter((employee) => employee.id !== id);
            })
        }
    })
}

  return (
<div className='container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg'>
    <div className='flex justify-between items-center mb-6'>
        <button 
        onClick={() => navigate("/addEmployee")}
        className='rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-semibold transition-colors duration-150'  >
            Add Employee
        </button>
    </div>
    
    <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
            <thead className="bg-gray-100">
                <tr>
                    <th className="text-left font-semibold text-gray-600 py-3 px-6 bg-gray-50">
                        First Name
                    </th>
                    <th className="text-left font-semibold text-gray-600 py-3 px-6 bg-gray-50">
                        Last Name
                    </th>
                    <th className="text-left font-semibold text-gray-600 py-3 px-6 bg-gray-50">
                        Email ID
                    </th>
                    <th className="text-right font-semibold text-gray-600 py-3 px-6 bg-gray-50">
                        Actions
                    </th>
                </tr>
            </thead>
            {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}></Employee>
              ))}
            </tbody>
          )}
        </table>
    </div>
</div>

    
  )
}

export default EmployeeList