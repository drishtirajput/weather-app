import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaSun } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { LuCloudSun } from 'react-icons/lu'

export default function Header() {
  return (
    <div className='bg-black'>
      <div className='flex py-4 w-[75%] mx-auto justify-between'>
        <div className='flex text-white'>
          <div className=' flex gap-2 text-3xl font-bold'>
            <FaSun className='text-orange-600' />Weather
          </div>
          <div className='flex gap-2 text-xl pt-2 font-bold px-5'>
            <div>Delhi, India</div>
            <div className='text-orange-400'><LuCloudSun /></div>
          </div>
        </div>
        <div className='flex text-white gap-3'>
          <div className='flex bg-white text-black rounded-sm'>
            <CiSearch className=' text-md cursor-pointer m-2' />
            <input type="text" placeholder='Search' className='outline-none' />
            <select className='outline-none mx-3'>
              <option>Location</option>
              <option>News</option>
            </select>
          </div>
          <div className='text-3xl'><HiBars3BottomRight /></div>
        </div>
      </div>
    </div>
  )
}
