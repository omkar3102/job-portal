import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-gray-800'>
        <div className='flex justify-around py-[80px] common-container'>
            <div className='flex flex-col'>
                <h2 className='text-white font-semibold text-[24px] pb-2'>JobConnect</h2>
                <p className='text-slate-300 font-normal '>Connecting talent with opportunity since 2023</p>
            </div>
            <div>
                <h2 className='font-semibold text-slate-300 text-[18px]'>FOR JOB SEEKERS</h2>
                <ul className='flex flex-col pt-3'>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Browse Jobs</li>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Create Profile</li>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Job Alerts</li>
                    <li className='font-normal text-slate-300 text-[16px] '>Career Advice</li>
                </ul>
            </div>
            <div>
                <h2 className='font-semibold text-slate-300 text-[18px]'>FOR EMPLOYERS</h2>
                <ul className='flex flex-col pt-3'>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Post a Job</li>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Browse Candidates</li>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Recruiting Solutions</li>
                    <li className='font-normal text-slate-300 text-[16px] '>Pricing</li>
                </ul>
            </div>
            <div>
                <h2 className='font-semibold text-slate-300 text-[18px]'>COMPANY</h2>
                <ul className='flex flex-col pt-3'>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>About Us</li>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Contact</li>
                    <li className='font-normal text-slate-300 text-[16px] pb-2'>Careers</li>
                    <li className='font-normal text-slate-300 text-[16px] '>Blog</li>
                </ul>
            </div>
        </div>
        {/* <div className='border border-[#E0E0E0] pt-4'></div>
        <div className='flex justify-start'>
                <p className='text-slate-300 font-normal text-[16px]'>© 2023 CareerConnect. All rights reserved.</p>
        </div> */}
    </div>
    </>
  )
}
