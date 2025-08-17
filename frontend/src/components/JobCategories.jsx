import React from 'react'

export default function JobCategories() {
  return (
    <>
    <div className='common-container pt-[100px]'>
        <div className='flex flex-col items-center gap-2'>
            <h2 className=' text-[32px] font-bold'>Popular Job Categories</h2>
            <p className='text-gray-400 text-[20px] '>Browse jobs by your preferred category and sector</p>
        </div>
        <div className='flex gap-5 pt-10'>
            <div className='bg-[#e0e0e0] border border-transparent hover:bg-white hover:border-[#e0e0e0] w-auto h-auto rounded-lg'>
                <div className='flex flex-col pl-[26px] pb-5'>
                    <div className='flex gap-4 pt-5'>
                        <div className='w-8 h-8 items-center'>
                            <img src="/technology.png" alt="Technology"  width={32} height={32}/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[20px] font-bold'>Technology</p>
                            <p className='text-[16px] font-normal text-[#363636]'>245 jobs</p>
                        </div>
                    </div>
                    <div className='pt-2.5'>
                        <p className='text-[#363636] font-normal '>Software development, IT services, Cloud computing</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0e0e0] border border-transparent hover:bg-white hover:border-[#e0e0e0] w-auto h-auto rounded-lg'>
                <div className='flex flex-col pl-[26px] pb-5'>
                    <div className='flex gap-4 pt-5'>
                        <div className='w-8 h-8 items-center'>
                            <img src="/finance.png" alt="Finance"  width={32} height={32}/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[20px] font-bold'>Finance</p>
                            <p className='text-[16px] font-normal text-[#363636]'>152 jobs</p>
                        </div>
                    </div>
                    <div className='pt-2.5'>
                        <p className='text-[#363636] font-normal '>Banking, Investment, Accounting, Auditing</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0e0e0] border border-transparent hover:bg-white hover:border-[#e0e0e0] w-auto h-auto rounded-lg'>
                <div className='flex flex-col pl-[26px] pb-5'>
                    <div className='flex gap-4 pt-5'>
                        <div className='w-8 h-8 items-center'>
                            <img src="/healthcare.png" alt="HealthCare"  width={32} height={32}/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[20px] font-bold'>HealthCare</p>
                            <p className='text-[16px] font-normal text-[#363636]'>185 jobs</p>
                        </div>
                    </div>
                    <div className='pt-2.5'>
                        <p className='text-[#363636] font-normal '>Doctors, Nurses, Pharmacists, Healthcare support</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0e0e0] border border-transparent hover:bg-white hover:border-[#e0e0e0] w-auto h-auto rounded-lg'>
                <div className='flex flex-col pl-[26px] pb-5'>
                    <div className='flex gap-4 pt-5'>
                        <div className='w-8 h-8 items-center'>
                            <img src="/school.png" alt="Technology"  width={32} height={32}/>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[20px] font-bold'>Education</p>
                            <p className='text-[16px] font-normal text-[#363636]'>97 jobs</p>
                        </div>
                    </div>
                    <div className='pt-2.5'>
                        <p className='text-[#363636] font-normal '>Teaching, Administration, Research, Training</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
