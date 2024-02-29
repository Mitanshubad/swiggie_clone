import React, { useState } from 'react';

const ResCards = ({ resData }) => {
    // Destructuring the first item of resData
    const { data } = resData;
    const [showFullCuisines, setShowFullCuisines] = useState(false);

    // Function to toggle between trimmed and full cuisines
    const toggleCuisines = () => {
        setShowFullCuisines(!showFullCuisines);
    };

    // Truncate the cuisines to show only the first two words
    const truncatedCuisines = data.cuisines.slice(0, 2).join(', ');

    return (
      <div className='max-w-md mx-auto rounded overflow-hidden shadow-lg'>
        <img
          className='w-full h-48 object-cover'
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${data.cloudinaryImageId}`}
          alt='img'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{data.name}</div>
          <p className='text-gray-200 text-base'>
            Cuisines: {showFullCuisines ? data.cuisines.join(', ') : truncatedCuisines}
            {!showFullCuisines && <button className="text-blue-500" onClick={toggleCuisines}>Read More</button>}
          </p>
          <p className='text-gray-300 text-base'>Rating: {data.avgRating}</p>
          <p className='text-gray-400 text-base'>
            Delivery Time: {data.deliveryTime} min
          </p>
        </div>
      </div>
    );
};

export default ResCards;
