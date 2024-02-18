import React from 'react'
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
  };
   
  return (
    
            <tr className="hover:bg-gray-50" key={employee.id}>
                <td className="px-6 py-4 text-gray-800">
                    {employee.firstName}
                </td>
                <td className="px-6 py-4 text-gray-800">
                    {employee.lastName}
                </td>
                <td className="px-6 py-4 text-gray-800">
                    {employee.emailId}
                </td>
                <td className="px-6 py-4 text-right text-gray-800">
                    <button
                        onClick={(e, id) => editEmployee(e, employee.id)}
                        className="text-blue-500 hover:text-blue-600 mr-2">
                        Edit
                    </button>
                    <button
                        onClick={(e, id) => deleteEmployee(e, employee.id)}
                        className="text-red-500 hover:text-red-600">
                        Delete
                    </button>
                </td>
            </tr>

  )
}

export default Employee