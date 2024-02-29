import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const [btnName , setBtnName] = useState("Login")

    function clickHandler(){
        if( btnName ==="Login"){
            setBtnName("Logout")
        }
        else{
            setBtnName("Login")
        }
    }
  return (
    <div className='flex flex-row items-center justify-between py-4 px-8 bg-gray-800 text-white'>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" alt="logo" className='rounded-full h-10'/>
      </div>
      <nav className='flex items-center gap-8'>
        <ul className='flex flex-row gap-8'>
          <li><a href="#" className='hover:text-gray-400'>Home</a></li>
          <li><a href="#" className='hover:text-gray-400'>About us</a></li>
          <li><a href="#" className='hover:text-gray-400'>Contact</a></li>
        </ul>
        <FaShoppingCart className='text-2xl cursor-pointer hover:text-gray-400'/>
        <button className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={clickHandler}>{btnName}</button>
      </nav>
    </div>
  );
}

export default Header;
