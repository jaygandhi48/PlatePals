import React from 'react'
import { useState } from 'react';
function Search({setKey}) {


  return (
    <div>
    <input
      type='text'
      placeholder='Search recipie'
      className='p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm'
      onKeyUp={setKey}
    />
  </div>
  )
}

export default Search