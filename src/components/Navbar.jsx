import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import {BiChevronDown} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';

function Navbar() {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [showClose, setShowClose] = useState(false);
    const path = location.pathname.split('/')[1];


  return (
    <div>
        <div className='border shadow-sm shadow-gray-300 flex flex-row justify-between items-center px-2 relative z-10 bg-white'>
            {/* Logo */}
            <div>
                <img src={require('../assets/logo1.jpg')} alt="" height={60} width={60}/>
            </div>

            {/* Links */}
            <div className='flex flex-row'>
                <div className='hidden flex-row sm:flex'>
                    <div className='px-3 hover:text-[#ce3168] cursor-pointer'>
                        <p className={`font-medium  hover:text-[#ce3168] ${path === 'home' && 'border-b-black border-b-2 hover:border-b-[#ce3168]'}`}>Home</p>
                    </div>

                    <div className='pl-3 pr-2 hover:text-[#ce3168] cursor-pointer hidden md:flex flex-row items-center '>
                        <p className='font-medium hover:font-semibold' onClick={() => setShowMenu(!showMenu)} >Services</p>
                        <BiChevronDown />
                    </div>

                    <div className='pl-3 pr-2 hover:text-[#ce3168] cursor-pointer flex md:hidden flex-row items-center '>
                        <p className='font-medium hover:font-semibold' onClick={() => setShowMenu(!showMenu)} >Services</p>
                    </div>

                    <div className='px-3 hover:text-[#ce3168] cursor-pointer'>
                        <p className='font-medium hover:font-semibold capitalize'>Projects</p>
                    </div>

                    <div className='px-3 hover:text-[#ce3168] cursor-pointer'>
                        <p className='font-medium hover:font-semibold capitalize'>Departmants</p>
                    </div>

                    <div className='px-3 hover:text-[#ce3168] cursor-pointer hidden md:block'>
                        <p className='font-medium hover:font-semibold capitalize hidden md:block'>Blog</p>
                    </div>

                    <div className='px-3 hover:text-[#ce3168] cursor-pointer'>
                        <p className='font-medium hover:font-semibold capitalize hidden md:block'>Gallery</p>
                    </div>

                    <div className='px-3 hover:text-[#ce3168] cursor-pointer hidden md:block'>
                        <p className='font-medium hover:font-semibold capitalize'>Contact</p>
                    </div>
                </div>

                {!showClose ? <div className='px-3 hover:text-[#ce3168] cursor-pointer block md:hidden' onClick={() => setShowClose(!showClose)}>
                    <GiHamburgerMenu className='text-2xl'/>
                </div> :
                <div className='px-3 hover:text-[#ce3168] cursor-pointer block md:hidden' onClick={() => setShowClose(!showClose)}>
                    <GrClose className='text-2xl'/>
                </div>
                }

            </div>
        </div>

        {showMenu && <div className='hidden md:flex flex-col border shadow-sm shadow-gray-300 rounded-lg p-3 h-[100] w-[200px] absolute right-[200px] md:right-[400px] z-10 bg-white'>
            <p className='font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168]'>Team-15</p>
            <p className='font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168]'>Game-Dev</p>
            <p className='font-medium hover:font-semibold hover:text-[#ce3168] capitalize cursor-pointer py-2'>E-Sports</p>
        </div>}

        <div className={`border bg-white shadow-md rounded-lg p-3 z-10 absolute right-0 ${showClose ? 'top-[85px] transition-all duration-300' : 'top-[-800px] transition-all ease-in-out duration-300' } w-[300px] h-auto block md:hidden z-20`}>
            <p className={`font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168] block sm:hidden md:hidden ${path === 'home' && 'text-[#ce3168]'}`}>Home</p>
            <p className={`font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168] block sm:hidden md:hidden ${path === 'services' && 'text-[#ce3168]'}`}>Services</p>
            <p className={`font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168] block sm:hidden md:hidden ${path === 'projects' && 'text-[#ce3168]'}`}>Projects</p>
            <p className={`font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168] block sm:hidden md:hidden ${path === 'departments' && 'text-[#ce3168]'}`}>Departments</p>
            <p className='font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168]'>Team-15</p>
            <p className='font-medium hover:font-semibold capitalize cursor-pointer py-2 hover:text-[#ce3168]'>Game-Dev</p>
            <p className='font-medium hover:font-semibold hover:text-[#ce3168] capitalize cursor-pointer py-2'>E-Sports</p>
            <p className='font-medium hover:font-semibold hover:text-[#ce3168] capitalize cursor-pointer py-2'>Blog</p>
            <p className='font-medium hover:font-semibold hover:text-[#ce3168] capitalize cursor-pointer py-2'>Gallery</p>
            <p className='font-medium hover:font-semibold hover:text-[#ce3168] capitalize cursor-pointer py-2'>Contact</p>
        </div>
    </div>
  )
}

export default Navbar
