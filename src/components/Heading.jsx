import React from 'react'

export default function Heading({firstElement, secondElement}) {
  return (
    <div>
       <div className='flex py-3 px-5 border-b justify-between text-sm'>
              <div className='text-[#666C7B]'>{firstElement}</div>
              {/* <div>{secondElement}</div> */}
              {secondElement !== 'hidden' && <div>{secondElement}</div>}
            </div>
    </div>
  )
}
