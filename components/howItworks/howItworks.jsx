import React from 'react'

const HowItworks = ({ howItWorks }) => {
    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-2xl text-center font-semibold text-blue-500 py-5'>How it Work</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {howItWorks.map((item, index) => (
                    <div key={index} className='text-center'>
                        <div className='bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                            <span>{index+1} </span>
                        </div>
                        <h3 className='font-semibold text-lg mb-2 text-gray-600'>{item?.step} </h3>
                        <p className='text-gray-600'>{item?.description} </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HowItworks