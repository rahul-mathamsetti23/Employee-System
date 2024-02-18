import React from 'react'

import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();

  return (
    <div className="bg-gray-900 shadow-md">
      <div className='h-20 px-12 flex items-center justify-between'>
        <p onClick={() => navigate('/employeeList')} className="text-xl text-white font-semibold cursor-pointer">Employee Management System</p>
        <div className="flex items-center space-x-4"></div>
      </div>
    </div>
  );
}


export default Navbar