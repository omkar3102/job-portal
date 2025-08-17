import React from 'react'

export default function JobConnect() {
  return (
    <>
    <div className='common-container py-[60px]'>
        <div className='flex flex-col items-center'>
            <h2 className='text-[32px] font-bold'>Why Choose JobConnect</h2>
            <p className='text-[24px] font-normal text-gray-400'>We connect talent with opportunity in the most efficient way</p>
        </div>
        <div className='flex gap-4 pt-[30px]'>
            <div className='flex flex-col items-center'>
                <div className='bg-blue-300 w-9 h-9 rounded-full'>
                    <img src="/briefcase.png" alt=""  width={32} height={32}/>
                </div>
                <p className='text-black text-[18px] font-bold pt-5'>95% Satisfaction Rate</p>
                <p className='text-gray-400 text-[16px] font-normal text-center pt-3'>Our candidates and employers consistently rate us highly for quality matches.</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='bg-purple-400 w-9 h-9 rounded-full'>
                    <img src="/verify.png" alt="" width={32} height={32} />
                </div>
                <p className='text-black text-[18px] font-bold pt-5'>Verified Employers</p>
                <p className='text-gray-400 text-[16px] font-normal text-center pt-3'>Every company profile is manually verified to ensure authenticity.</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='bg-green-200 w-9 h-9 rounded-full'>
                    <img src="/car.png" alt="" width={32} height={32} />
                </div>
                <p className='text-black text-[18px] font-bold pt-5'>Fast Matching</p>
                <p className='text-gray-400 text-[16px] font-normal text-center pt-3'>Our AI matches your profile to the best opportunities faster than competitors.</p>
            </div>
        </div>
    </div>
    </>
  )
}
