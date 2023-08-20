import React from 'react'

const Cards = ({card}) => {

const {id,title,body}=card;

  return (
    <div className='h-[300px] w-[300px] bg-gray-600 text-white m-10'>
        <div className='p-4'>
            <h1>{id}</h1>
            <h6 className='text-3xl text-orange-400'>{title.substr(0,15)}</h6>
            <h3>{body.substr(0,150)}</h3>
           
        </div>
    </div>
  )
}

export default Cards