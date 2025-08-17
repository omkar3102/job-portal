import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='common-container'>
        <div className='flex justify-between pt-4 items-center'>
            <p className='font-bold text-[20px]'>Job <span className='text-fuchsia-800 font-semibold'>Connect</span></p>
            <ul className='text-[#363636] text-[16px] flex gap-20 items-center'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Jobs</li>
                <li className='cursor-pointer'>Companies</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Connect</li>
            </ul>
            <div className='flex gap-4 '>
                <button className='hover:bg-gradient-to-r from-blue-500  to-fuchsia-900 text-[#363636] hover:text-white text-[16px] cursor-pointer bg-white py-3 px-9 rounded-xl'>Sign In</button>
                <button className='hover:bg-gradient-to-r from-blue-500  to-fuchsia-900 text-[#363636] hover:text-white text-[16px] cursor-pointer bg-white py-3 px-9 rounded-xl'>Register</button>
            </div>
        </div>
    </div>
    </>
  )
}
