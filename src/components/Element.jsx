import React from 'react'

export default function Element({ elementName, elementValue }) {
    return (
        <div>
            <div className='flex border-b-2 py-3 justify-between'>
                <div><p>{elementName}</p></div>
                <div>{elementValue}</div>
            </div>
        </div>
    )
}
