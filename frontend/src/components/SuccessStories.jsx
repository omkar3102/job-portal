import React from 'react'

export default function SuccessStories() {
  return (
    <>
    <div className='bg-[#E0E0E0] py-20 '>
        <div className='flex flex-col items-center pb-6'>
            <h2 className='font-bold text-[32px] pb-4'>Success Stories</h2>
            <p className='text-gray-400 text-[24px] font-normal'>What our users say about JobConnect</p>
        </div>
        <div className='flex gap-8 common-container'>
            <div className='bg-white flex flex-col pl-[26px] py-5'>
                <div className='flex gap-4 pb-4'>
                    <div className='w-8 h-8'>
                        <img src="/verify.png" alt="" width={32} height={32} />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[20px]'>Sarah Johnson</p>
                        <p className='font-normal text-gray-400 text-[16px]'>Software Engineer At Google</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 font-normal text-[17px]'>"JobConnect helped me find my dream job in tech within a month. The application process was seamless and the job recommendations were spot-on."</p>
                </div>
            </div>
            <div className='bg-white flex flex-col pl-[26px] py-5'>
                <div className='flex gap-4 pb-4'>
                    <div className='w-8 h-8'>
                        <img src="/verify.png" alt="" width={32} height={32} />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[20px]'>Michael Rodriguez</p>
                        <p className='font-normal text-gray-400 text-[16px]'>Product Manager at Amazon</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 font-normal text-[17px]'>"As a hiring manager, JobConnect saved us countless hours in recruitment. The quality of candidates was consistently excellent."</p>
                </div>
            </div>
            <div className='bg-white flex flex-col pl-[26px] py-5'>
                <div className='flex gap-4 pb-4'>
                    <div className='w-8 h-8'>
                        <img src="/verify.png" alt="" width={32} height={32} />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[20px]'>Priya Patel</p>
                        <p className='font-normal text-gray-400 text-[16px]'>UX Designer at Facebook</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-400 font-normal text-[17px]'>"I was able to find several great opportunities through JobConnect. The job alerts feature helped me stay updated on new postings."</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
