import React from 'react';
import { CiHome, CiHeart, CiSearch } from "react-icons/ci";
import { PiCompassThin, PiArticleLight } from "react-icons/pi";
import { IconContext } from 'react-icons';

function Nav() {
  return (
    <div className='w-full h-14 flex justify-between items-center'>
      <div className='left ml-5 mb-2 flex gap-10 items-center'>
        <h1 className='text-lg font-semibold flex items-center'>
          PlatePals
        </h1>
        <div>
          <input
            type='text'
            placeholder='Search'
            className='p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm'
          />
        </div>
      </div>
      
      <div className='right flex justify-center items-center gap-10 m-3'>
        <IconContext.Provider value={{ className: "size-5 hover:cursor-pointer hover:text-pink-400" }}>
          <CiHome />
          <CiHeart />
          <PiCompassThin />
          <PiArticleLight />
        </IconContext.Provider>
        
        <div className='flex justify-center items-center'>
          <h3 className='text-sm'>Hi Melvin Robson</h3>
          <div className='h-10 w-10 rounded-full bg-zinc-50 m-2 flex'>
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className='object-cover rounded-full overflow-hidden'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;