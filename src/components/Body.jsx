import React, { useState, useEffect } from 'react';
import ResCards from './ResCards';
import { resData } from '../data';

const Body = () => {
   const [originalData, setOriginalData] = useState(resData);
   const [restroList, setRestroList] = useState(originalData);
   const [text, setText] = useState('');

   // useEffect to update restroList whenever originalData changes
   useEffect(() => {
      setRestroList(originalData);
   }, [originalData]);

   const clickHandler = () => {
      const filterData = originalData.filter(
         (restro) => restro.data.avgRating > 4
      );
      setRestroList(filterData);
      console.log(filterData);
   };

   const handleSearch = () => {
    const searchText = text.toLowerCase();
    const filteredData = originalData.filter((restro) => {
        const name = restro.data.name.toLowerCase();
        return name.includes(searchText);
    });
    setRestroList(filteredData);
};


   return (
      <div className='flex flex-col items-center'>
         <div>
            <button
               onClick={clickHandler}
               className='bg-red-500 text-white p-2 rounded-md'
            >
               Top Rated
            </button>
         </div>

         <div className='flex gap-2 mt-7'>
            <input
               type='text'
               placeholder='Search items'
               className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
            <button
               onClick={handleSearch}
               className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
            >
               Search
            </button>
         </div>

         <div className='mt-5 flex flex-row flex-wrap gap-4'>
            {restroList.map((restro) => (
               <ResCards resData={restro} key={restro.data.id} />
            ))}
         </div>
      </div>
   );
};

export default Body;
