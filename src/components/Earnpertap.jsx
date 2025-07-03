import React from 'react'
import { BsCoin } from "react-icons/bs"

const Earnpertap = ({ onClose }) => {
  return (
    <div className="bg-[#25B67] w-[350px] p-4 rounded-2xl text-yellow-300 m-auto mt-6 shadow-md relative">

      <div className="flex justify-end mb-2">
        <button onClick={onClose} className="text-xl">✖</button>
      </div>

      <h2 className="text-lg font-semibold mb-4 text-white text-center">Earn per Tap Levels</h2>

      <div className="space-y-2">
        <div className="flex justify-between items-center bg-[#3b3b3b] p-2 rounded-lg">
          <span>lvl 1</span>
          <span className="flex items-center gap-1">+2 <BsCoin /></span>
          <span className="flex items-center gap-1">-1000 <BsCoin /></span>
        </div>

        <div className="flex justify-between items-center bg-[#3b3b3b] p-2 rounded-lg">
          <span>lvl 2</span>
          <span className="flex items-center gap-1">+3 <BsCoin /></span>
          <span className="flex items-center gap-1">-2500 <BsCoin /></span>
        </div>

        <div className="flex justify-between items-center bg-[#3b3b3b] p-2 rounded-lg">
          <span>lvl 3</span>
          <span className="flex items-center gap-1">+4 <BsCoin /></span>
          <span className="flex items-center gap-1">-6000 <BsCoin /></span>
        </div>
      </div>
    </div>
  )
}

export default Earnpertap
