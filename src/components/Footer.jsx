import React, { useState } from 'react'
import Exchange from './Exchange'
import { RiExchangeFill } from "react-icons/ri";
import { TbPick } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { TbCoinBitcoinFilled } from "react-icons/tb";

const Footer = () => {
  const [showExchange, setShowExchange] = useState(false)

  const handlePickClick = () => {
    setShowExchange(prev => !prev) 
  }

  return (
    <>
      <div className='w-[400px] h-[70px] bg-[#32363CB2] mt-[32px] rounded-2xl m-auto'>
        <div className="flex items-center justify-center gap-3 pt-[12px]">

          <div className="logo w-[65px] h-[50px] rounded-2xl bg-[#21242980]">
            <RiExchangeFill className='text-yellow-400 text-[30px] m-auto mt-[10px]' />
          </div>

          <div
            className="logo w-[65px] h-[50px] rounded-2xl cursor-pointer hover:bg-[#21242980] transition"
            onClick={handlePickClick}
          >
            <TbPick className='text-gray-400 text-[30px] m-auto mt-[10px]' />
          </div>

          <div className="logo w-[65px] h-[50px] rounded-2xl hover:bg-[#21242980] transition">
            <FaUserFriends className='text-gray-400 text-[30px] m-auto mt-[10px]' />
          </div>

          <div className="logo w-[65px] h-[50px] rounded-2xl hover:bg-[#21242980] transition">
            <GiTwoCoins className='text-gray-400 text-[30px] m-auto mt-[10px]' />
          </div>

          <div className="logo w-[65px] h-[50px] rounded-2xl hover:bg-[#21242980] transition">
            <TbCoinBitcoinFilled className='text-gray-400 text-[30px] m-auto mt-[10px]' />
          </div>

        </div>
      </div>

     {showExchange && (
  <div className='mt-4 text-center'>
    <Exchange onClose={() => setShowExchange(false)} />
  </div>
)}

    </>
  )
}

export default Footer
