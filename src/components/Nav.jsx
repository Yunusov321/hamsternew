import React, { useState } from 'react'
import { BsCoin } from "react-icons/bs"
import Earnpertap from './Earnpertap'

const Nav = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex justify-center gap-6 mt-8 text-white">
        <div onClick={() => setShowModal(true)} className="cursor-pointer">
          <InfoBox label="Earn per tap" value="+12" color="text-orange-400" showCoin={true} />
        </div>

        <InfoBox label="Coins to level up" value="10 M" />

        <div>
          <InfoBox label="Profit per Hour" value="+120" showCoin={true} />
        </div>
      </div>

      {showModal && (
        <Earnpertap onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

function InfoBox({ label, value, color = 'text-white', showCoin = false }) {
  return (
    <div className="bg-[#0f3460] px-6 py-3 rounded-xl shadow text-center w-[150px]">
      <p className={`text-sm ${color}`}>{label}</p>
      <p className='text-lg font-bold flex justify-center items-center gap-1'>
        {value}
        {showCoin && <BsCoin />}
      </p>
    </div>
  )
}

export default Nav
