import React from 'react'

const Card = ({heading,text}) => {
  return (
    <div className='p-6 bg-white rounded-xl border-[1px] border-gray-200 text-center py-12'>
        <div className='bg-BrandWhite p-4 rounded-full'>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vbneL7zyq1DV2WwOvdRaUQKUz14aaCE7cw&s" alt="icon" className='w-12 mx-auto' />
        </div>
        <h4 className='my-4 text-lg font-bold'>{heading}</h4>
        <p className='text-gray-400 text-sm'>{text}</p>
    </div>
  )
}

export default Card