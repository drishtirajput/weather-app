import React from 'react'
import moment from 'moment'

export default function Home() {

 
    const currentDate = moment().format('ddd MMM DD');
     const currentTime = moment().format('h:mm a');

  return (
    <div>
      <div>
        <div className='flex'>
            <div>CURRENT WEATHER</div>
            <div>{currentTime} {currentDate}</div>
        </div>
      </div>
    </div>
  )
}
