import React from 'react'
import StroyImg from '../../public/Hurricane.webp';


export default function News() {
  return (
    <div>
       <div className='flex px-2 border-b-2 gap-2 py-4'>
          <div className='w-[70%] px-1'>
            <h2 className='text-[14px] text-[#666C7B]'>HURRICANE</h2>
          <p className='text-sm py-1'>Hurricane Helene to roar ashore in Florida’s Big Bend as a Category 3</p>
          <p className='text-[11px] text-[#666C7B]'>3 hours ago</p>
          </div>
          <div className='w-[30%]'>
            <img src={StroyImg} className='rounded' />
          </div>
        </div>
    </div>
  )
}
