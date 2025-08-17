import React from 'react'

export default function FeaturedSection() {
  return (
    <>
    <div className='common-container pt-[100px]'>
        <div className='flex flex-col items-center pb-4'>
            <h2 className='font-bold text-[32px]'>Featured Jobs</h2>
            <p className='font-normal text-gray-400'>Hand-picked jobs that stand out from the rest</p>
        </div>
        <div className='flex gap-6'>
            <div className='bg-white border border-[#E0e0e0] transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg'>
                <div className='flex flex-col pl-[26px] py-[26px]'>
                    <div className='flex gap-4'>
                        <div className='w-8 h-8 border border-[#e0e0e0] p-2'>
                            <img src="/google.png" alt="" width={32} height={32} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-semibold'>Frontend Developer</p>
                            <p className=''>Seattle, Washington</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p className='font-normal text-gray-400 text-[18px]'>Looking for an experienced frontend developer proficient in React to join our team.</p>
                    </div>
                    <div className='flex gap-4 pt-4'>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>React</div>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>JavaScript</div>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>HTML/CSS</div>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow-lg border border-[#E0e0e0] transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg'>
                <div className='flex flex-col pl-[26px] py-[26px]'>
                    <div className='flex gap-4'>
                        <div className='w-8 h-8 border border-[#e0e0e0] p-2'>
                            <img src="/google.png" alt="" width={32} height={32} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-semibold'>Frontend Developer</p>
                            <p className=''>Seattle, Washington</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p className='font-normal text-gray-400 text-[18px]'>Looking for an experienced frontend developer proficient in React to join our team.</p>
                    </div>
                    <div className='flex gap-4 pt-4'>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>React</div>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>JavaScript</div>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>HTML/CSS</div>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow-lg border border-[#E0e0e0] transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg'>
                <div className='flex flex-col pl-[26px] py-[26px]'>
                    <div className='flex gap-4'>
                        <div className='w-8 h-8 border border-[#e0e0e0] p-2'>
                            <img src="/google.png" alt="" width={32} height={32} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[12px] font-semibold'>Frontend Developer</p>
                            <p className=''>Seattle, Washington</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p className='font-normal text-gray-400 text-[18px]'>Looking for an experienced frontend developer proficient in React to join our team.</p>
                    </div>
                    <div className='flex gap-4 pt-4'>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>React</div>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>JavaScript</div>
                        <div className='bg-blue-100 text-blue-500 font-light rounded-lg px-3'>HTML/CSS</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center pt-8'>
            <button className='bg-gradient-to-r from-blue-400 to-blue-900 text-white text-[17px] px-8 py-3 rounded-xl'>View All Jobs</button>
        </div>
    </div>
    </>
  )
}
