import React from 'react'

export default function Jumpstart() {
  return (
    <>
    <div className='bg-indigo-700 '>
      <div className='flex flex-col items-center py-[60px]'>
        <h2 className='text-white font-bold text-[32px] pb-3'>Ready to jumpstart your career?</h2>
        <p className='text-slate-200 font-normal text-[20px]'>Join thousands of professionals who found their dream jobs through JobConnect</p>
        <div className='flex gap-5 pt-14'>
          <button className='bg-white px-6 py-3 text-indigo-700 font-normal text-[18px] rounded-lg'>Post a Job</button>
          <button className='bg-transparent hover:bg-indigo-900 border border-white px-6 py-3 text-white font-normal text-[18px] rounded-lg'>Browse Jobs</button>
        </div>
      </div>
    </div>
    </>
  )
}
