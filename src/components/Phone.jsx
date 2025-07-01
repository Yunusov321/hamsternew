import React, { useState } from 'react'
import { BsCoin } from "react-icons/bs"
import { SlEnergy } from "react-icons/sl"
import hamster from '../assets/hamster.png'

const Phone = () => {
  const [coins, setCoins] = useState(120023232)
  const [energy, setEnergy] = useState(2000)


  const soqa = () => {
    if (energy > 0) {
      setCoins(prev => prev + 12)
      setEnergy(prev => prev - 12)
    }
  }

  return (
    <div>
      <h1 className='text-yellow-300 flex text-center m-auto justify-center items-center gap-3 text-5xl'>
        <BsCoin /> <span className='text-white'>{coins}</span>
      </h1>

      <img 
        onClick={soqa}
        className='m-auto mt-[32px] active:scale-110 transition-transform duration-200 cursor-pointer' 
        src={hamster} 
        alt="hamster" 
      />

      <div className='flex justify-between items-center m-auto gap-16 mt-4'>
        <div className="main flex justify-between items-center text-white text-3xl text-center gap-[120px]">
          <span className='flex items-center gap-1 text-orange-400'>
            <SlEnergy /> <span className='text-white'>{energy}/2000</span>
          </span>
          <h1>Boost</h1>
        </div>
      </div>
    </div>
  )
}

export default Phone
