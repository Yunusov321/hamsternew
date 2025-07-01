import React from 'react'
import { SlEnergy } from "react-icons/sl";


const Section = () => {
  return (
    <div className='flex justify-between items-center m-auto gap-16'>
        <div className="main flex justify-between items-center text-white text-3xl text-center gap-[120px]">
            <span className='flex items-center gap-1 text-orange-400'><SlEnergy /> <span className='text-white'>2000/2000</span></span>

            <h1>Boost</h1>
        </div>
    </div>
  )
}

export default Section