import React from 'react';
import ResCards from './ResCards';
import { resData } from '../data'

const Body = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-2 mt-7'>
        <input
          type='text'
          placeholder='search items'
          className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
        />
        <button className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'>
          Search
        </button>
      </div>
      
      <div className='mt-5 flex flex-row flex-wrap gap-4'>
        {/* Render ResCards component for each item in resData array */}
        {resData.map((restro) => (
          <ResCards resData={restro} key={restro.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
